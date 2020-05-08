import grpc from "grpc";
import { StockClient } from "../proto/stock/proto/stock_grpc_pb";
import { StockSymbol } from "../proto/stock/proto/stock_pb";
import { splitBuffer } from "../utils";

const client = new StockClient(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

interface StockPrice {
  date: string;
  symbol: string;
  open: number;
  close: number;
  low: number;
  high: number;
  volume: number;
}

export const getStockHistory = (
  stockSymbolString: string
): Promise<StockPrice[]> =>
  new Promise((resolve, reject) => {
    const stockSymbol = new StockSymbol();
    stockSymbol.setStockSymbol(stockSymbolString);
    client.getStockHistory(stockSymbol, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(
        response
          .getStockHistoryList()
          .map((stockPrice) => stockPrice.toObject())
      );
    });
  });

export const getStockPredictions = (
  stockSymbolString: string
): Promise<number[]> =>
  new Promise((resolve, reject) => {
    const stockSymbol = new StockSymbol();
    stockSymbol.setStockSymbol(stockSymbolString);
    client.getStockPredictions(stockSymbol, (error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response.getPredictionsList());
    });
  });
