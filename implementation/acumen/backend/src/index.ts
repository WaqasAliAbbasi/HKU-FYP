import express from "express";
import cors from "cors";

import { resourceDistributionRoutes } from "./resourceDistributionRoutes";
import { stockRoutes } from "./stockRoutes";
import { ImageAnalysisRoutes } from "./imageAnalysisRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", resourceDistributionRoutes);
app.use("/", stockRoutes);
app.use("/", ImageAnalysisRoutes);

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
