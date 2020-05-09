// package:
// file: yolo/proto/yolo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yolo_proto_yolo_pb from "../../yolo/proto/yolo_pb";

interface IYoloService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  detectObjects: IYoloService_IdetectObjects;
  downloadProcessedImage: IYoloService_IdownloadProcessedImage;
}

interface IYoloService_IdetectObjects
  extends grpc.MethodDefinition<
    yolo_proto_yolo_pb.Chunk,
    yolo_proto_yolo_pb.Results
  > {
  path: string; // "/.Yolo/detectObjects"
  requestStream: boolean; // true
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<yolo_proto_yolo_pb.Chunk>;
  requestDeserialize: grpc.deserialize<yolo_proto_yolo_pb.Chunk>;
  responseSerialize: grpc.serialize<yolo_proto_yolo_pb.Results>;
  responseDeserialize: grpc.deserialize<yolo_proto_yolo_pb.Results>;
}
interface IYoloService_IdownloadProcessedImage
  extends grpc.MethodDefinition<
    yolo_proto_yolo_pb.Request,
    yolo_proto_yolo_pb.Chunk
  > {
  path: string; // "/.Yolo/downloadProcessedImage"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<yolo_proto_yolo_pb.Request>;
  requestDeserialize: grpc.deserialize<yolo_proto_yolo_pb.Request>;
  responseSerialize: grpc.serialize<yolo_proto_yolo_pb.Chunk>;
  responseDeserialize: grpc.deserialize<yolo_proto_yolo_pb.Chunk>;
}

export const YoloService: IYoloService;

export interface IYoloServer {
  detectObjects: grpc.handleClientStreamingCall<
    yolo_proto_yolo_pb.Chunk,
    yolo_proto_yolo_pb.Results
  >;
  downloadProcessedImage: grpc.handleServerStreamingCall<
    yolo_proto_yolo_pb.Request,
    yolo_proto_yolo_pb.Chunk
  >;
}

export interface IYoloClient {
  detectObjects(
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  detectObjects(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  detectObjects(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  detectObjects(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  downloadProcessedImage(
    request: yolo_proto_yolo_pb.Request,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_yolo_pb.Chunk>;
  downloadProcessedImage(
    request: yolo_proto_yolo_pb.Request,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_yolo_pb.Chunk>;
}

export class YoloClient extends grpc.Client implements IYoloClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public detectObjects(
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  public detectObjects(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  public detectObjects(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  public detectObjects(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_yolo_pb.Results
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_yolo_pb.Chunk>;
  public downloadProcessedImage(
    request: yolo_proto_yolo_pb.Request,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_yolo_pb.Chunk>;
  public downloadProcessedImage(
    request: yolo_proto_yolo_pb.Request,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_yolo_pb.Chunk>;
}
