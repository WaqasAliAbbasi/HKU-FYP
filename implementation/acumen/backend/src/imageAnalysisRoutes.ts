import { Router } from "express";
import multer from "multer";

import { yoloDetectionsQueue, yoloDownloadQueue } from "./yolo";
import { alprDetectionsQueue } from "./alpr";
import { ImageAnalysis } from "./yolo/worker";

const imageAnalysisRoutes = Router();

const upload = multer({ dest: "/tmp" });

imageAnalysisRoutes.post("/yolo", upload.any(), async (req, res) => {
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
  const alprResults: string[] = await Promise.all(
    files.map(async (file) =>
      (await alprDetectionsQueue.add({ imagePath: file.path })).finished()
    )
  );
  const resultsAfterAlpr = await Promise.all(
    results.map(async (result, index) => ({
      ...result,
      plates: alprResults[index],
    }))
  );

  res.json(resultsAfterAlpr);
});

imageAnalysisRoutes.get("/yolo/:port/:processed_image_id", async (req, res) => {
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

export { imageAnalysisRoutes as ImageAnalysisRoutes };
