// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var yolo_proto_yolo_pb = require("../../yolo/proto/yolo_pb.js");

function serialize_Chunk(arg) {
  if (!(arg instanceof yolo_proto_yolo_pb.Chunk)) {
    throw new Error("Expected argument of type Chunk");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Chunk(buffer_arg) {
  return yolo_proto_yolo_pb.Chunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Request(arg) {
  if (!(arg instanceof yolo_proto_yolo_pb.Request)) {
    throw new Error("Expected argument of type Request");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request(buffer_arg) {
  return yolo_proto_yolo_pb.Request.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_Results(arg) {
  if (!(arg instanceof yolo_proto_yolo_pb.Results)) {
    throw new Error("Expected argument of type Results");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Results(buffer_arg) {
  return yolo_proto_yolo_pb.Results.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var YoloService = (exports.YoloService = {
  detectObjects: {
    path: "/Yolo/detectObjects",
    requestStream: true,
    responseStream: false,
    requestType: yolo_proto_yolo_pb.Chunk,
    responseType: yolo_proto_yolo_pb.Results,
    requestSerialize: serialize_Chunk,
    requestDeserialize: deserialize_Chunk,
    responseSerialize: serialize_Results,
    responseDeserialize: deserialize_Results,
  },
  downloadProcessedImage: {
    path: "/Yolo/downloadProcessedImage",
    requestStream: false,
    responseStream: true,
    requestType: yolo_proto_yolo_pb.Request,
    responseType: yolo_proto_yolo_pb.Chunk,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Chunk,
    responseDeserialize: deserialize_Chunk,
  },
});

exports.YoloClient = grpc.makeGenericClientConstructor(YoloService);
