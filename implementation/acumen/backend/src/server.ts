import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";

import {
  yoloDetectionsQueue,
  yoloDownloadQueue,
  yoloWorkersQueue,
} from "./yolo";
import { getALPRDetections } from "./alpr";
import { getStockHistory, getStockPredictions } from "./stock";
import { ImageAnalysis } from "./yolo/worker";

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ dest: "/tmp" });

app.get("/stock/:stock_symbol", async (req, res) => {
  const stockSymbol = req.params["stock_symbol"];
  const stockHistory = await getStockHistory(stockSymbol);
  res.json(stockHistory);
});

app.get("/stock/:stock_symbol/predict", async (req, res) => {
  const stockSymbol = req.params["stock_symbol"];
  const stockPredictions = await getStockPredictions(stockSymbol);
  res.json(stockPredictions);
});

app.post("/yolo", upload.any(), async (req, res) => {
  const files = Array.isArray(req.files)
    ? req.files
    : Object.values(req.files).reduce(
        (prev, current) => [...prev, ...current],
        []
      );
  const results: ImageAnalysis[] = await Promise.all(
    files.map(async (file) =>
      (await yoloDetectionsQueue.add({ imagePath: file.path })).finished()
    )
  );
  const resultsAfterAlpr = await Promise.all(
    results.map(async (result, index) => ({
      ...result,
      plates: result.detections.includes("car")
        ? await getALPRDetections(fs.readFileSync(files[index].path))
        : [],
    }))
  );

  res.json(resultsAfterAlpr);
});

app.get("/yolo/:port/:processed_image_id", async (req, res) => {
  const port = parseInt(req.params["port"]);
  const processedImageId = req.params["processed_image_id"];
  if (port && processedImageId) {
    const response = await (
      await yoloDownloadQueue.add({ processedImageId, port })
    ).finished();
    const processedImage = Buffer.from(response.data);
    res.contentType("image/jpeg");
    res.end(Buffer.from(processedImage));
  }
});

const initial = [
  // { name: "Machine 1 GPU 0", port: 50053 },
  // { name: "Machine 1 GPU 1", port: 50054 },
  // { name: "Machine 1 GPU 2", port: 50055 },
  // { name: "Machine 1 GPU 3", port: 50056 },
  // { name: "Machine 1 All 4 GPUs", port: 50057 },
  { name: "Machine 2 GPU 0", port: 50058, batchSize: 3, timeThreshold: 3000 },
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

const setYoloWorkers = async (input: typeof initial) => {
  await yoloWorkersQueue.empty();
  await Promise.all(
    ["wait", "active", "completed"].map((status: any) =>
      yoloWorkersQueue.clean(0, status)
    )
  );
  for (const { name, port, batchSize, timeThreshold } of input) {
    await yoloWorkersQueue.add({ name, port, batchSize, timeThreshold });
  }
};

setYoloWorkers(initial);

const getActiveYoloWorkers = async () => {
  return ((await yoloWorkersQueue.getJobs(["waiting"])) || []).map(
    ({ data }) => data
  );
};

app.get("/yolo_services/reset", async (_, res) => {
  await setYoloWorkers(initial);
  res.json(await getActiveYoloWorkers());
});
app.get("/yolo_services", async (_, res) => {
  res.json(await getActiveYoloWorkers());
});

app.post("/yolo_services", async (req, res) => {
  console.log(req.body);
  await setYoloWorkers(req.body);
  res.json(await getActiveYoloWorkers());
});

export { app };
