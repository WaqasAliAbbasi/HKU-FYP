import { Router } from "express";
import { yoloWorkersQueue } from "./yolo";
import { alprWorkersQueue } from "./alpr";

const resourceDistributionRoutes = Router();

const initialYolo = [
  // { name: "Machine 1 GPU 0", port: 50053 },
  // { name: "Machine 1 GPU 1", port: 50054 },
  // { name: "Machine 1 GPU 2", port: 50055 },
  // { name: "Machine 1 GPU 3", port: 50056 },
  // { name: "Machine 1 All 4 GPUs", port: 50057 },
  // { name: "Machine 2 GPU 0", port: 50058, batchSize: 3, timeThreshold: 3000 },
  { name: "Machine 2 GPU 1", port: 50059, batchSize: 3, timeThreshold: 3000 },
  { name: "Machine 2 GPU 2", port: 50060, batchSize: 3, timeThreshold: 3000 },
  { name: "Machine 2 GPU 3", port: 50061, batchSize: 3, timeThreshold: 3000 },
  {
    name: "Machine 2 All 4 GPUs",
    port: 50062,
    batchSize: 3,
    timeThreshold: 3000,
  },
];

const setYoloWorkers = async (input: typeof initialYolo) => {
  await yoloWorkersQueue.empty();
  await Promise.all(
    ["wait", "active", "failed", "completed", "delayed"].map((status: any) =>
      yoloWorkersQueue.clean(0, status)
    )
  );
  for (const { name, port, batchSize, timeThreshold } of input) {
    await yoloWorkersQueue.add({ name, port, batchSize, timeThreshold });
  }
};

setYoloWorkers(initialYolo);

const getActiveYoloWorkers = async () => {
  return ((await yoloWorkersQueue.getJobs(["waiting"])) || []).map(
    ({ data }) => data
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
  { name: "Machine 2 CPU 1", port: 50052, batchSize: 3, timeThreshold: 3000 },
];

const setAlprWorkers = async (input: typeof initialAlpr) => {
  await alprWorkersQueue.empty();
  await Promise.all(
    ["wait", "active", "failed", "completed", "delayed"].map((status: any) =>
      yoloWorkersQueue.clean(0, status)
    )
  );
  for (const { name, port, batchSize, timeThreshold } of input) {
    await alprWorkersQueue.add({ name, port, batchSize, timeThreshold });
  }
};

setAlprWorkers(initialAlpr);

const getActiveAlprWorkers = async () => {
  return ((await alprWorkersQueue.getJobs(["waiting"])) || []).map(
    ({ data }) => data
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
