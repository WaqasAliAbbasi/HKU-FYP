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

export class ALPRAnalysis extends jspb.Message {
  clearPlatesList(): void;
  getPlatesList(): Array<string>;
  setPlatesList(value: Array<string>): void;
  addPlates(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALPRAnalysis.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ALPRAnalysis
  ): ALPRAnalysis.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ALPRAnalysis,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ALPRAnalysis;
  static deserializeBinaryFromReader(
    message: ALPRAnalysis,
    reader: jspb.BinaryReader
  ): ALPRAnalysis;
}

export namespace ALPRAnalysis {
  export type AsObject = {
    platesList: Array<string>;
  };
}

export class ALPRResults extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ALPRAnalysis>;
  setResultsList(value: Array<ALPRAnalysis>): void;
  addResults(value?: ALPRAnalysis, index?: number): ALPRAnalysis;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ALPRResults.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ALPRResults
  ): ALPRResults.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ALPRResults,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ALPRResults;
  static deserializeBinaryFromReader(
    message: ALPRResults,
    reader: jspb.BinaryReader
  ): ALPRResults;
}

export namespace ALPRResults {
  export type AsObject = {
    resultsList: Array<ALPRAnalysis.AsObject>;
  };
}
