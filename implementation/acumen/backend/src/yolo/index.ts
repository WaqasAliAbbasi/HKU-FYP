import Queue from "bull";
import fs from "fs";

import { YOLOWorker } from "./worker";
import { filter } from "../utils";

export const yoloWorkersQueue = new Queue<{ name: string; port: number }>(
  "yolo workers"
);
const getAvailableYoloWorker = (): Promise<YOLOWorker> =>
  new Promise(async (resolve) => {
    const [yoloWorker] = await yoloWorkersQueue.getWaiting(0, 0);
    if (yoloWorker) {
      await yoloWorker.takeLock();
      await yoloWorker.moveToCompleted();
      const {
        data: { name, port },
      } = yoloWorker;
      resolve(new YOLOWorker(name, port));
    }
    yoloWorkersQueue.on("waiting", async (jobId) => {
      const job = await yoloWorkersQueue.getJob(jobId);
      if (job) {
        job.moveToCompleted();
        const {
          data: { name, port },
        } = job;
        resolve(new YOLOWorker(name, port));
      }
    });
  });
const returnYoloWorker = (yoloWorker: YOLOWorker) => {
  yoloWorkersQueue.add({ name: yoloWorker.name, port: yoloWorker.port });
};

export const yoloDetectionsQueue = new Queue<{ imagePath: string }>(
  "yolo object detection"
);
yoloDetectionsQueue.empty();
const BATCH_SIZE = 3;
const TIME_THRESHOLD = 3000;
const RECHECK_EVENT = "recheck";

const processYoloDetection = async () => {
  const jobs = await yoloDetectionsQueue.getWaiting();
  const filteredJobs =
    jobs.length >= BATCH_SIZE
      ? jobs.slice(0, BATCH_SIZE)
      : jobs.filter(
          (job) => new Date().getTime() - job.timestamp >= TIME_THRESHOLD
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
      const worker = await getAvailableYoloWorker();
      const detections: any[] = await worker.getYOLODetections(
        activeJobs.map((job) => fs.readFileSync(job.data.imagePath))
      );
      await Promise.all(
        activeJobs.map(async (job, index) =>
          job.moveToCompleted(detections[index], false, false)
        )
      );
      returnYoloWorker(worker);
    }
  }
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
    const worker = new YOLOWorker(`some`, port);
    try {
      const image = await worker.getYOLOProcessedImage(processedImageId);
      done(null, image);
    } catch (e) {
      done(null, Buffer.alloc(0));
    }
  }
);
