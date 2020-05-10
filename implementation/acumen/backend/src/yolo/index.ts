import Queue from "bull";
import fs from "fs";

import { YOLOWorker } from "./worker";
import { filter } from "../utils";
import { yoloWorkerQueue } from "../alpr/workerQueue";

const returnYoloWorker = (yoloWorker: YOLOWorker) => {
  return yoloWorkerQueue.add(yoloWorker);
};

export const yoloDetectionsQueue = new Queue<{ imagePath: string }>(
  "yolo object detection"
);
yoloDetectionsQueue.empty();
const RECHECK_EVENT = "recheck";

const processYoloDetection = async () => {
  const worker = await yoloWorkerQueue.pop();
  const { batchSize, timeThreshold } = worker;

  const jobs = await yoloDetectionsQueue.getWaiting();
  const filteredJobs =
    jobs.length >= batchSize
      ? jobs
      : jobs.filter(
          (job) => new Date().getTime() - job.timestamp >= timeThreshold
        );
  if (filteredJobs.length !== jobs.length) {
    setTimeout(() => {
      yoloDetectionsQueue.emit(RECHECK_EVENT);
    }, 1000);
  }
  if (filteredJobs.length) {
    let count = 0;
    const activeJobs: typeof filteredJobs[0][] = [];
    let i = 0;
    while (count < batchSize && i < filteredJobs.length) {
      if ((await filteredJobs[i].takeLock()) !== false) {
        count++;
        activeJobs.push(filteredJobs[i]);
      }
      i++;
    }
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
