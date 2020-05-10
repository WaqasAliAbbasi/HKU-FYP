import Queue from "bull";
import fs from "fs";

import { AlprWorker } from "./worker";
import { filter } from "../utils";

export const alprWorkersQueue = new Queue<{
  name: string;
  port: number;
  timeThreshold: number;
  batchSize: number;
}>("alpr detection workers", {
  defaultJobOptions: { removeOnComplete: true },
});

const getAvailableAlprWorker = (): Promise<AlprWorker> =>
  new Promise(async (resolve) => {
    const [alprWorker] = await alprWorkersQueue.getWaiting();
    if (alprWorker) {
      const {
        data: { name, port, batchSize, timeThreshold },
      } = alprWorker;
      await alprWorker.moveToCompleted(undefined, true, false);
      resolve(new AlprWorker({ name, port, timeThreshold, batchSize }));
    } else {
      alprWorkersQueue.on("waiting", async (jobId) => {
        const job = await alprWorkersQueue.getJob(jobId);
        if (job) {
          const {
            data: { name, port, batchSize, timeThreshold },
          } = job;
          await job.moveToCompleted(undefined, true, false);
          resolve(new AlprWorker({ name, port, batchSize, timeThreshold }));
        }
      });
    }
  });

const returnAlprWorker = (alprWorker: AlprWorker) => {
  const { name, port, batchSize, timeThreshold } = alprWorker;
  return alprWorkersQueue.add({ name, port, batchSize, timeThreshold }, {});
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
  const worker = await getAvailableAlprWorker();
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
  await returnAlprWorker(worker);
};

alprDetectionsQueue.on(RECHECK_EVENT, processAlprDetection);
alprDetectionsQueue.on("waiting", processAlprDetection);
