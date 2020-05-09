import Queue from "bull";
import fs from "fs";

import { YOLOWorker } from "./worker";
import { filter } from "../utils";

const worker = new YOLOWorker(50059);

export const yoloDetectionsQueue = new Queue<{ imagePath: string }>(
  "yolo object detection"
);
yoloDetectionsQueue.empty();
setInterval(async () => {
  const jobs = await yoloDetectionsQueue.getWaiting();
  const activeJobs = await filter(
    jobs,
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
}, 3000);

export const yoloDownloadQueue = new Queue<{ processedImageId: string }>(
  "yolo processed image download"
);
yoloDownloadQueue.empty();
yoloDownloadQueue.process(async (job, done) => {
  try {
    const image = await worker.getYOLOProcessedImage(job.data.processedImageId);
    done(null, image);
  } catch (e) {
    console.log(e);
  }
});
