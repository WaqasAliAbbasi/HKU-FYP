import Queue from "bull";
import fs from "fs";

import { AlprWorker } from "./worker";
import { filter } from "../utils";
import { alprWorkerQueue } from "../workerQueue";

const returnAlprWorker = (alprWorker: AlprWorker) => {
  return alprWorkerQueue.add(alprWorker);
};

export const alprDetectionsQueue = new Queue<{ imagePath: string }>(
  "alpr detection",
  {
    defaultJobOptions: { removeOnComplete: true, removeOnFail: true },
  }
);
alprDetectionsQueue.empty();
const RECHECK_EVENT = "recheck";

const processAlprDetection = async () => {
  const worker = await alprWorkerQueue.pop();
  const { batchSize, timeThreshold } = worker;
  const jobs = await alprDetectionsQueue.getWaiting();
  const filteredJobs =
    jobs.length >= batchSize
      ? jobs
      : jobs.filter(
          (job) => new Date().getTime() - job.timestamp >= timeThreshold
        );
  if (filteredJobs.length !== jobs.length) {
    setTimeout(() => alprDetectionsQueue.emit(RECHECK_EVENT), 1000);
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
      setTimeout(() => alprDetectionsQueue.emit(RECHECK_EVENT), 1000);
    }
    if (activeJobs.length) {
      const results: any[] = await worker.getALPRDetections(
        activeJobs.map((job) => fs.readFileSync(job.data.imagePath))
      );
      await Promise.all(
        activeJobs.map(async (job, index) => {
          await job.moveToCompleted(results[index] || [], false, false);
        })
      );
    }
  }
  returnAlprWorker(worker);
};

alprDetectionsQueue.on(RECHECK_EVENT, processAlprDetection);
alprDetectionsQueue.on("waiting", processAlprDetection);
