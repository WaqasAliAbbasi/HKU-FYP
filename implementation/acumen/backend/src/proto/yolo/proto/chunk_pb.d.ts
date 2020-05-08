// package:
// file: yolo/proto/chunk.proto

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
  getName(): string;
  setName(value: string): void;

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
    name: string;
  };
}

export class Reply extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  clearDetectionsList(): void;
  getDetectionsList(): Array<string>;
  setDetectionsList(value: Array<string>): void;
  addDetections(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reply.AsObject;
  static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Reply,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Reply;
  static deserializeBinaryFromReader(
    message: Reply,
    reader: jspb.BinaryReader
  ): Reply;
}

export namespace Reply {
  export type AsObject = {
    length: number;
    detectionsList: Array<string>;
  };
}
