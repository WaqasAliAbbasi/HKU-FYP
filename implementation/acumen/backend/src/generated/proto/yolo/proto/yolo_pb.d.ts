// package:
// file: yolo/proto/yolo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Chunk extends jspb.Message {
  getBuffer(): Uint8Array | string;
  getBuffer_asU8(): Uint8Array;
  getBuffer_asB64(): string;
  setBuffer(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Chunk,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(
    message: Chunk,
    reader: jspb.BinaryReader
  ): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    buffer: Uint8Array | string;
  };
}

export class Request extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Request,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(
    message: Request,
    reader: jspb.BinaryReader
  ): Request;
}

export namespace Request {
  export type AsObject = {
    id: string;
  };
}

export class ImageAnalysis extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearDetectionsList(): void;
  getDetectionsList(): Array<string>;
  setDetectionsList(value: Array<string>): void;
  addDetections(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAnalysis.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ImageAnalysis
  ): ImageAnalysis.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ImageAnalysis,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ImageAnalysis;
  static deserializeBinaryFromReader(
    message: ImageAnalysis,
    reader: jspb.BinaryReader
  ): ImageAnalysis;
}

export namespace ImageAnalysis {
  export type AsObject = {
    id: string;
    detectionsList: Array<string>;
  };
}

export class Results extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ImageAnalysis>;
  setResultsList(value: Array<ImageAnalysis>): void;
  addResults(value?: ImageAnalysis, index?: number): ImageAnalysis;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Results,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(
    message: Results,
    reader: jspb.BinaryReader
  ): Results;
}

export namespace Results {
  export type AsObject = {
    resultsList: Array<ImageAnalysis.AsObject>;
  };
}
