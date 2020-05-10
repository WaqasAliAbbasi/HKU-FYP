import { Router } from "express";
import { getStockHistory, getStockPredictions } from "./stock";

const stockRoutes = Router();

stockRoutes.get("/stock/:stock_symbol", async (req, res) => {
  const stockSymbol = req.params["stock_symbol"];
  const stockHistory = await getStockHistory(stockSymbol);
  res.json(stockHistory);
});

stockRoutes.get("/stock/:stock_symbol/predict", async (req, res) => {
  const stockSymbol = req.params["stock_symbol"];
  const stockPredictions = await getStockPredictions(stockSymbol);
  res.json(stockPredictions);
});

export { stockRoutes };
