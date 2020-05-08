// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var yolo_proto_chunk_pb = require("../../yolo/proto/chunk_pb.js");

function serialize_Chunk(arg) {
  if (!(arg instanceof yolo_proto_chunk_pb.Chunk)) {
    throw new Error("Expected argument of type Chunk");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Chunk(buffer_arg) {
  return yolo_proto_chunk_pb.Chunk.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_Reply(arg) {
  if (!(arg instanceof yolo_proto_chunk_pb.Reply)) {
    throw new Error("Expected argument of type Reply");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Reply(buffer_arg) {
  return yolo_proto_chunk_pb.Reply.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_Request(arg) {
  if (!(arg instanceof yolo_proto_chunk_pb.Request)) {
    throw new Error("Expected argument of type Request");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request(buffer_arg) {
  return yolo_proto_chunk_pb.Request.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var FileServerService = (exports.FileServerService = {
  upload: {
    path: "/FileServer/upload",
    requestStream: true,
    responseStream: false,
    requestType: yolo_proto_chunk_pb.Chunk,
    responseType: yolo_proto_chunk_pb.Reply,
    requestSerialize: serialize_Chunk,
    requestDeserialize: deserialize_Chunk,
    responseSerialize: serialize_Reply,
    responseDeserialize: deserialize_Reply,
  },
  download: {
    path: "/FileServer/download",
    requestStream: false,
    responseStream: true,
    requestType: yolo_proto_chunk_pb.Request,
    responseType: yolo_proto_chunk_pb.Chunk,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Chunk,
    responseDeserialize: deserialize_Chunk,
  },
});

exports.FileServerClient = grpc.makeGenericClientConstructor(FileServerService);
