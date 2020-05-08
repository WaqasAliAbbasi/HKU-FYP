// package:
// file: alpr/proto/alpr.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ALPRChunk extends jspb.Message {
  getBuffer(): Uint8Array | string;
  getBuffer_asU8(): Uint8Array;
  getBuffer_asB64(): string;
  setBuffer(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALPRChunk.AsObject;
  static toObject(includeInstance: boolean, msg: ALPRChunk): ALPRChunk.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ALPRChunk,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ALPRChunk;
  static deserializeBinaryFromReader(
    message: ALPRChunk,
    reader: jspb.BinaryReader
  ): ALPRChunk;
}

export namespace ALPRChunk {
  export type AsObject = {
    buffer: Uint8Array | string;
  };
}

export class ALPRRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALPRRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ALPRRequest
  ): ALPRRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ALPRRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ALPRRequest;
  static deserializeBinaryFromReader(
    message: ALPRRequest,
    reader: jspb.BinaryReader
  ): ALPRRequest;
}

export namespace ALPRRequest {
  export type AsObject = {
    name: string;
  };
}

export class ALPRReply extends jspb.Message {
  clearPlatesList(): void;
  getPlatesList(): Array<string>;
  setPlatesList(value: Array<string>): void;
  addPlates(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALPRReply.AsObject;
  static toObject(includeInstance: boolean, msg: ALPRReply): ALPRReply.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ALPRReply,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ALPRReply;
  static deserializeBinaryFromReader(
    message: ALPRReply,
    reader: jspb.BinaryReader
  ): ALPRReply;
}

export namespace ALPRReply {
  export type AsObject = {
    platesList: Array<string>;
  };
}
