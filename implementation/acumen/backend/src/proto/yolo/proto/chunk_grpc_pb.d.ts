// package:
// file: yolo/proto/chunk.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yolo_proto_chunk_pb from "../../yolo/proto/chunk_pb";

interface IFileServerService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  upload: IFileServerService_Iupload;
  download: IFileServerService_Idownload;
}

interface IFileServerService_Iupload
  extends grpc.MethodDefinition<
    yolo_proto_chunk_pb.Chunk,
    yolo_proto_chunk_pb.Reply
  > {
  path: string; // "/.FileServer/upload"
  requestStream: boolean; // true
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<yolo_proto_chunk_pb.Chunk>;
  requestDeserialize: grpc.deserialize<yolo_proto_chunk_pb.Chunk>;
  responseSerialize: grpc.serialize<yolo_proto_chunk_pb.Reply>;
  responseDeserialize: grpc.deserialize<yolo_proto_chunk_pb.Reply>;
}
interface IFileServerService_Idownload
  extends grpc.MethodDefinition<
    yolo_proto_chunk_pb.Request,
    yolo_proto_chunk_pb.Chunk
  > {
  path: string; // "/.FileServer/download"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<yolo_proto_chunk_pb.Request>;
  requestDeserialize: grpc.deserialize<yolo_proto_chunk_pb.Request>;
  responseSerialize: grpc.serialize<yolo_proto_chunk_pb.Chunk>;
  responseDeserialize: grpc.deserialize<yolo_proto_chunk_pb.Chunk>;
}

export const FileServerService: IFileServerService;

export interface IFileServerServer {
  upload: grpc.handleClientStreamingCall<
    yolo_proto_chunk_pb.Chunk,
    yolo_proto_chunk_pb.Reply
  >;
  download: grpc.handleServerStreamingCall<
    yolo_proto_chunk_pb.Request,
    yolo_proto_chunk_pb.Chunk
  >;
}

export interface IFileServerClient {
  upload(
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  upload(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  upload(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  upload(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  download(
    request: yolo_proto_chunk_pb.Request,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_chunk_pb.Chunk>;
  download(
    request: yolo_proto_chunk_pb.Request,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_chunk_pb.Chunk>;
}

export class FileServerClient extends grpc.Client implements IFileServerClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public upload(
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  public upload(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  public upload(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  public upload(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: yolo_proto_chunk_pb.Reply
    ) => void
  ): grpc.ClientWritableStream<yolo_proto_chunk_pb.Chunk>;
  public download(
    request: yolo_proto_chunk_pb.Request,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_chunk_pb.Chunk>;
  public download(
    request: yolo_proto_chunk_pb.Request,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<yolo_proto_chunk_pb.Chunk>;
}
