// package:
// file: alpr/proto/alpr.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as alpr_proto_alpr_pb from "../../alpr/proto/alpr_pb";

interface IALPRFileServerService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  upload: IALPRFileServerService_Iupload;
}

interface IALPRFileServerService_Iupload
  extends grpc.MethodDefinition<
    alpr_proto_alpr_pb.ALPRChunk,
    alpr_proto_alpr_pb.ALPRResults
  > {
  path: string; // "/.ALPRFileServer/upload"
  requestStream: boolean; // true
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<alpr_proto_alpr_pb.ALPRChunk>;
  requestDeserialize: grpc.deserialize<alpr_proto_alpr_pb.ALPRChunk>;
  responseSerialize: grpc.serialize<alpr_proto_alpr_pb.ALPRResults>;
  responseDeserialize: grpc.deserialize<alpr_proto_alpr_pb.ALPRResults>;
}

export const ALPRFileServerService: IALPRFileServerService;

export interface IALPRFileServerServer {
  upload: grpc.handleClientStreamingCall<
    alpr_proto_alpr_pb.ALPRChunk,
    alpr_proto_alpr_pb.ALPRResults
  >;
}

export interface IALPRFileServerClient {
  upload(
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  upload(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  upload(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  upload(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
}

export class ALPRFileServerClient extends grpc.Client
  implements IALPRFileServerClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public upload(
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  public upload(
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  public upload(
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
  public upload(
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: alpr_proto_alpr_pb.ALPRResults
    ) => void
  ): grpc.ClientWritableStream<alpr_proto_alpr_pb.ALPRChunk>;
}
