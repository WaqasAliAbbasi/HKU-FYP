// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var stock_proto_stock_pb = require("../../stock/proto/stock_pb.js");

function serialize_StockHistory(arg) {
  if (!(arg instanceof stock_proto_stock_pb.StockHistory)) {
    throw new Error("Expected argument of type StockHistory");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockHistory(buffer_arg) {
  return stock_proto_stock_pb.StockHistory.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_StockPredictions(arg) {
  if (!(arg instanceof stock_proto_stock_pb.StockPredictions)) {
    throw new Error("Expected argument of type StockPredictions");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockPredictions(buffer_arg) {
  return stock_proto_stock_pb.StockPredictions.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_StockSymbol(arg) {
  if (!(arg instanceof stock_proto_stock_pb.StockSymbol)) {
    throw new Error("Expected argument of type StockSymbol");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StockSymbol(buffer_arg) {
  return stock_proto_stock_pb.StockSymbol.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var StockService = (exports.StockService = {
  getStockHistory: {
    path: "/Stock/GetStockHistory",
    requestStream: false,
    responseStream: false,
    requestType: stock_proto_stock_pb.StockSymbol,
    responseType: stock_proto_stock_pb.StockHistory,
    requestSerialize: serialize_StockSymbol,
    requestDeserialize: deserialize_StockSymbol,
    responseSerialize: serialize_StockHistory,
    responseDeserialize: deserialize_StockHistory,
  },
  getStockPredictions: {
    path: "/Stock/GetStockPredictions",
    requestStream: false,
    responseStream: false,
    requestType: stock_proto_stock_pb.StockSymbol,
    responseType: stock_proto_stock_pb.StockPredictions,
    requestSerialize: serialize_StockSymbol,
    requestDeserialize: deserialize_StockSymbol,
    responseSerialize: serialize_StockPredictions,
    responseDeserialize: deserialize_StockPredictions,
  },
});

exports.StockClient = grpc.makeGenericClientConstructor(StockService);
