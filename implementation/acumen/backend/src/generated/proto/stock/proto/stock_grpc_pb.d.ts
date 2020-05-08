// package:
// file: stock/proto/stock.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as stock_proto_stock_pb from "../../stock/proto/stock_pb";

interface IStockService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getStockHistory: IStockService_IGetStockHistory;
  getStockPredictions: IStockService_IGetStockPredictions;
}

interface IStockService_IGetStockHistory
  extends grpc.MethodDefinition<
    stock_proto_stock_pb.StockSymbol,
    stock_proto_stock_pb.StockHistory
  > {
  path: string; // "/.Stock/GetStockHistory"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<stock_proto_stock_pb.StockSymbol>;
  requestDeserialize: grpc.deserialize<stock_proto_stock_pb.StockSymbol>;
  responseSerialize: grpc.serialize<stock_proto_stock_pb.StockHistory>;
  responseDeserialize: grpc.deserialize<stock_proto_stock_pb.StockHistory>;
}
interface IStockService_IGetStockPredictions
  extends grpc.MethodDefinition<
    stock_proto_stock_pb.StockSymbol,
    stock_proto_stock_pb.StockPredictions
  > {
  path: string; // "/.Stock/GetStockPredictions"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<stock_proto_stock_pb.StockSymbol>;
  requestDeserialize: grpc.deserialize<stock_proto_stock_pb.StockSymbol>;
  responseSerialize: grpc.serialize<stock_proto_stock_pb.StockPredictions>;
  responseDeserialize: grpc.deserialize<stock_proto_stock_pb.StockPredictions>;
}

export const StockService: IStockService;

export interface IStockServer {
  getStockHistory: grpc.handleUnaryCall<
    stock_proto_stock_pb.StockSymbol,
    stock_proto_stock_pb.StockHistory
  >;
  getStockPredictions: grpc.handleUnaryCall<
    stock_proto_stock_pb.StockSymbol,
    stock_proto_stock_pb.StockPredictions
  >;
}

export interface IStockClient {
  getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
  getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
  getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
}

export class StockClient extends grpc.Client implements IStockClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  public getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  public getStockHistory(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockHistory
    ) => void
  ): grpc.ClientUnaryCall;
  public getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
  public getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
  public getStockPredictions(
    request: stock_proto_stock_pb.StockSymbol,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: stock_proto_stock_pb.StockPredictions
    ) => void
  ): grpc.ClientUnaryCall;
}
