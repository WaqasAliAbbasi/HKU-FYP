import { Router } from "express";
import { alprWorkerQueue, yoloWorkerQueue } from "./alpr/workerQueue";
import { AlprWorker } from "./alpr/worker";
import { YOLOWorker } from "./yolo/worker";

const resourceDistributionRoutes = Router();

const initialYolo = [
  // { name: "Machine 1 GPU 0", port: 50053 },
  // { name: "Machine 1 GPU 1", port: 50054 },
  // { name: "Machine 1 GPU 2", port: 50055 },
  // { name: "Machine 1 GPU 3", port: 50056 },
  // { name: "Machine 1 All 4 GPUs", port: 50057 },
  { name: "185 CPU 11 GPU 0", port: 50058, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 12 GPU 1", port: 50059, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 13 GPU 2", port: 50060, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 14 GPU 3", port: 50061, batchSize: 1, timeThreshold: 3000 },
  {
    name: "185 CPU 15 GPU All",
    port: 50062,
    batchSize: 1,
    timeThreshold: 3000,
  },
];

const setYoloWorkers = async (input: typeof initialYolo) => {
  yoloWorkerQueue.empty();
  for (const { name, port, batchSize, timeThreshold } of input) {
    yoloWorkerQueue.add(
      new YOLOWorker({ name, port, batchSize, timeThreshold })
    );
  }
};

setYoloWorkers(initialYolo);

const getActiveYoloWorkers = async () => {
  return yoloWorkerQueue.workers.map(
    ({ name, port, batchSize, timeThreshold }) => ({
      name,
      port,
      batchSize,
      timeThreshold,
    })
  );
};

resourceDistributionRoutes.get("/yolo_services/reset", async (_, res) => {
  await setYoloWorkers(initialYolo);
  res.json(await getActiveYoloWorkers());
});
resourceDistributionRoutes.get("/yolo_services", async (_, res) => {
  res.json(await getActiveYoloWorkers());
});

resourceDistributionRoutes.post("/yolo_services", async (req, res) => {
  await setYoloWorkers(req.body);
  res.json(await getActiveYoloWorkers());
});

const initialAlpr = [
  { name: "185 CPU 15", port: 50052, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 16", port: 50063, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 17", port: 50064, batchSize: 1, timeThreshold: 3000 },
  { name: "185 CPU 18", port: 50065, batchSize: 1, timeThreshold: 3000 },
];

const setAlprWorkers = async (input: typeof initialAlpr) => {
  alprWorkerQueue.empty();
  for (const { name, port, batchSize, timeThreshold } of input) {
    alprWorkerQueue.add(
      new AlprWorker({ name, port, batchSize, timeThreshold })
    );
  }
};

setAlprWorkers(initialAlpr);

const getActiveAlprWorkers = async () => {
  return alprWorkerQueue.workers.map(
    ({ name, port, batchSize, timeThreshold }) => ({
      name,
      port,
      batchSize,
      timeThreshold,
    })
  );
};

resourceDistributionRoutes.get("/alpr_services/reset", async (_, res) => {
  await setAlprWorkers(initialAlpr);
  res.json(await getActiveAlprWorkers());
});
resourceDistributionRoutes.get("/alpr_services", async (_, res) => {
  res.json(await getActiveAlprWorkers());
});

resourceDistributionRoutes.post("/alpr_services", async (req, res) => {
  await setAlprWorkers(req.body);
  res.json(await getActiveAlprWorkers());
});

export { resourceDistributionRoutes };
