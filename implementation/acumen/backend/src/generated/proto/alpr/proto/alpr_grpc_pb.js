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

function serialize_ALPRResults(arg) {
  if (!(arg instanceof alpr_proto_alpr_pb.ALPRResults)) {
    throw new Error("Expected argument of type ALPRResults");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ALPRResults(buffer_arg) {
  return alpr_proto_alpr_pb.ALPRResults.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var ALPRFileServerService = (exports.ALPRFileServerService = {
  upload: {
    path: "/ALPRFileServer/upload",
    requestStream: true,
    responseStream: false,
    requestType: alpr_proto_alpr_pb.ALPRChunk,
    responseType: alpr_proto_alpr_pb.ALPRResults,
    requestSerialize: serialize_ALPRChunk,
    requestDeserialize: deserialize_ALPRChunk,
    responseSerialize: serialize_ALPRResults,
    responseDeserialize: deserialize_ALPRResults,
  },
});

exports.ALPRFileServerClient = grpc.makeGenericClientConstructor(
  ALPRFileServerService
);
