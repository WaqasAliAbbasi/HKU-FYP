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
    const [yoloWorker] = await yoloWorkersQueue.getWaiting();
    if (yoloWorker) {
      const {
        data: { name, port, batchSize, timeThreshold },
      } = yoloWorker;
      await yoloWorker.moveToCompleted(undefined, true, false);
      resolve(new YOLOWorker({ name, port, timeThreshold, batchSize }));
    } else {
      yoloWorkersQueue.on("waiting", async (jobId) => {
        const job = await yoloWorkersQueue.getJob(jobId);
        if (job) {
          const {
            data: { name, port, batchSize, timeThreshold },
          } = job;
          await job.moveToCompleted(undefined, true, false);
          resolve(new YOLOWorker({ name, port, batchSize, timeThreshold }));
        }
      });
    }
  });

const returnYoloWorker = (yoloWorker: YOLOWorker) => {
  const { name, port, batchSize, timeThreshold } = yoloWorker;
  return yoloWorkersQueue.add({ name, port, batchSize, timeThreshold });
};

export const yoloDetectionsQueue = new Queue<{ imagePath: string }>(
  "yolo object detection"
);
yoloDetectionsQueue.empty();
const RECHECK_EVENT = "recheck";

const processYoloDetection = async () => {
  const worker = await getAvailableYoloWorker();
  const { batchSize, timeThreshold } = worker;
  const jobs = await yoloDetectionsQueue.getWaiting();
  const filteredJobs =
    jobs.length >= batchSize
      ? jobs
      : jobs.filter(
          (job) => new Date().getTime() - job.timestamp >= timeThreshold
        );
  if (filteredJobs.length !== jobs.length) {
    setTimeout(() => yoloDetectionsQueue.emit(RECHECK_EVENT), 1000);
  }
  if (filteredJobs.length) {
    let count = 0;
    const activeJobs = await filter(filteredJobs, async (job) => {
      if (count >= batchSize) {
        return false;
      }
      const take = (await job.takeLock()) !== false;
      if (take) {
        count++;
        return true;
      }
      return false;
    });
    if (activeJobs.length !== filteredJobs.length) {
      setTimeout(() => yoloDetectionsQueue.emit(RECHECK_EVENT), 1000);
    }
    if (activeJobs.length) {
      const detections: any[] = await worker.getYOLODetections(
        activeJobs.map((job) => fs.readFileSync(job.data.imagePath))
      );
      await Promise.all(
        activeJobs.map(async (job, index) =>
          job.moveToCompleted(detections[index], false, false)
        )
      );
      console.log("Yolo done");
    }
  }
  await returnYoloWorker(worker);
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
