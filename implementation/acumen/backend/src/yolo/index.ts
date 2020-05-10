import Queue from "bull";
import fs from "fs";

import { YOLOWorker } from "./worker";
import { filter } from "../utils";

export const yoloWorkersQueue = new Queue<{
  name: string;
  port: number;
  timeThreshold: number;
  batchSize: number;
}>("yolo workers");
const getAvailableYoloWorker = (): Promise<YOLOWorker> =>
  new Promise(async (resolve) => {
    const [yoloWorker] = await yoloWorkersQueue.getWaiting(0, 0);
    if (yoloWorker) {
      await yoloWorker.takeLock();
      await yoloWorker.moveToCompleted();
      const {
        data: { name, port, batchSize, timeThreshold },
      } = yoloWorker;
      resolve(new YOLOWorker({ name, port, timeThreshold, batchSize }));
    }
    yoloWorkersQueue.on("waiting", async (jobId) => {
      const job = await yoloWorkersQueue.getJob(jobId);
      if (job) {
        job.moveToCompleted();
        const {
          data: { name, port, batchSize, timeThreshold },
        } = job;
        resolve(new YOLOWorker({ name, port, batchSize, timeThreshold }));
      }
    });
  });
const returnYoloWorker = (yoloWorker: YOLOWorker) => {
  const { name, port, batchSize, timeThreshold } = yoloWorker;
  yoloWorkersQueue.add({ name, port, batchSize, timeThreshold });
};

export const yoloDetectionsQueue = new Queue<{ imagePath: string }>(
  "yolo object detection"
);
yoloDetectionsQueue.empty();
const RECHECK_EVENT = "recheck";

const processYoloDetection = async () => {
  const worker = await getAvailableYoloWorker();
  const { batchSize, timeThreshold } = worker;
  console.log(batchSize, timeThreshold);
  const jobs = await yoloDetectionsQueue.getWaiting();
  const filteredJobs =
    jobs.length >= batchSize
      ? jobs.slice(0, batchSize)
      : jobs.filter(
          (job) => new Date().getTime() - job.timestamp >= timeThreshold
        );
  if (filteredJobs.length !== jobs.length) {
    setTimeout(() => yoloDetectionsQueue.emit(RECHECK_EVENT), 1000);
  }
  if (filteredJobs.length) {
    const activeJobs = await filter(
      filteredJobs,
      async (job) => (await job.takeLock()) !== false
    );
    if (activeJobs.length) {
      const detections: any[] = await worker.getYOLODetections(
        activeJobs.map((job) => fs.readFileSync(job.data.imagePath))
      );
      await Promise.all(
        activeJobs.map(async (job, index) =>
          job.moveToCompleted(detections[index], false, false)
        )
      );
    }
  }
  returnYoloWorker(worker);
};

yoloDetectionsQueue.on(RECHECK_EVENT, processYoloDetection);
yoloDetectionsQueue.on("waiting", processYoloDetection);

export const yoloDownloadQueue = new Queue<{
  processedImageId: string;
  port: number;
}>("yolo processed image download");
yoloDownloadQueue.empty();
yoloDownloadQueue.process(
  async ({ data: { processedImageId, port } }, done) => {
    const worker = new YOLOWorker({
      name: `some`,
      port,
      batchSize: 3,
      timeThreshold: 3000,
    });
    try {
      const image = await worker.getYOLOProcessedImage(processedImageId);
      done(null, image);
    } catch (e) {
      done(null, Buffer.alloc(0));
    }
  }
);
