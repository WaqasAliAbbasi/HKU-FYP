// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var alpr_proto_alpr_pb = require("../../alpr/proto/alpr_pb.js");

function serialize_ALPRChunk(arg) {
  if (!(arg instanceof alpr_proto_alpr_pb.ALPRChunk)) {
    throw new Error("Expected argument of type ALPRChunk");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ALPRChunk(buffer_arg) {
  return alpr_proto_alpr_pb.ALPRChunk.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_ALPRReply(arg) {
  if (!(arg instanceof alpr_proto_alpr_pb.ALPRReply)) {
    throw new Error("Expected argument of type ALPRReply");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ALPRReply(buffer_arg) {
  return alpr_proto_alpr_pb.ALPRReply.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_ALPRRequest(arg) {
  if (!(arg instanceof alpr_proto_alpr_pb.ALPRRequest)) {
    throw new Error("Expected argument of type ALPRRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ALPRRequest(buffer_arg) {
  return alpr_proto_alpr_pb.ALPRRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var ALPRFileServerService = (exports.ALPRFileServerService = {
  upload: {
    path: "/ALPRFileServer/upload",
    requestStream: true,
    responseStream: false,
    requestType: alpr_proto_alpr_pb.ALPRChunk,
    responseType: alpr_proto_alpr_pb.ALPRReply,
    requestSerialize: serialize_ALPRChunk,
    requestDeserialize: deserialize_ALPRChunk,
    responseSerialize: serialize_ALPRReply,
    responseDeserialize: deserialize_ALPRReply,
  },
  download: {
    path: "/ALPRFileServer/download",
    requestStream: false,
    responseStream: true,
    requestType: alpr_proto_alpr_pb.ALPRRequest,
    responseType: alpr_proto_alpr_pb.ALPRChunk,
    requestSerialize: serialize_ALPRRequest,
    requestDeserialize: deserialize_ALPRRequest,
    responseSerialize: serialize_ALPRChunk,
    responseDeserialize: deserialize_ALPRChunk,
  },
});

exports.ALPRFileServerClient = grpc.makeGenericClientConstructor(
  ALPRFileServerService
);
