import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";

import { getYOLODetections, getYOLOProcessedImage } from "./yolo";
import { getALPRDetections } from "./alpr";
import { getStockHistory, getStockPredictions } from "./stock";

const app = express();
app.use(cors());
const upload = multer({ dest: "/tmp" });
const port = 5000;

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

app.post("/yolo", upload.single("0"), async (req, res) => {
  const image = fs.readFileSync(req.file.path);
  const detections = await getYOLODetections(image);
  const plates: string[] = [];
  if (detections.includes("car")) {
    plates.push(...(await getALPRDetections(image)));
  }
  res.json({ detections, plates });
});

app.get("/yolo", async (_, res) => {
  res.contentType("image/jpeg");
  res.end(await getYOLOProcessedImage());
});

const initial = [
  { name: "Machine 1 GPU 0", port: 50053 },
  { name: "Machine 1 GPU 1", port: 50054 },
  { name: "Machine 1 GPU 2", port: 50055 },
  { name: "Machine 1 GPU 3", port: 50056 },
  { name: "Machine 1 All 4 GPUs", port: 50057 },
  { name: "Machine 2 GPU 0", port: 50058 },
  { name: "Machine 2 GPU 1", port: 50059 },
  { name: "Machine 2 GPU 2", port: 50060 },
  { name: "Machine 2 GPU 3", port: 50061 },
  { name: "Machine 2 All 4 GPUs", port: 50062 },
];

app.get("/yolo_services/reset", (_, res) => res.json(initial));
app.get("/yolo_services", (_, res) => res.json(initial));
app.post("/yolo_services", (_, res) => res.json(initial));

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
