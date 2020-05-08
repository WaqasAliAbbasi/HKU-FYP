// package:
// file: stock/proto/stock.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StockSymbol extends jspb.Message {
  getStockSymbol(): string;
  setStockSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockSymbol.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StockSymbol
  ): StockSymbol.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StockSymbol,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StockSymbol;
  static deserializeBinaryFromReader(
    message: StockSymbol,
    reader: jspb.BinaryReader
  ): StockSymbol;
}

export namespace StockSymbol {
  export type AsObject = {
    stockSymbol: string;
  };
}

export class StockHistory extends jspb.Message {
  clearStockHistoryList(): void;
  getStockHistoryList(): Array<StockHistory.StockPrice>;
  setStockHistoryList(value: Array<StockHistory.StockPrice>): void;
  addStockHistory(
    value?: StockHistory.StockPrice,
    index?: number
  ): StockHistory.StockPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockHistory.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StockHistory
  ): StockHistory.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StockHistory,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StockHistory;
  static deserializeBinaryFromReader(
    message: StockHistory,
    reader: jspb.BinaryReader
  ): StockHistory;
}

export namespace StockHistory {
  export type AsObject = {
    stockHistoryList: Array<StockHistory.StockPrice.AsObject>;
  };

  export class StockPrice extends jspb.Message {
    getDate(): string;
    setDate(value: string): void;

    getSymbol(): string;
    setSymbol(value: string): void;

    getOpen(): number;
    setOpen(value: number): void;

    getClose(): number;
    setClose(value: number): void;

    getLow(): number;
    setLow(value: number): void;

    getHigh(): number;
    setHigh(value: number): void;

    getVolume(): number;
    setVolume(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StockPrice.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: StockPrice
    ): StockPrice.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: StockPrice,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): StockPrice;
    static deserializeBinaryFromReader(
      message: StockPrice,
      reader: jspb.BinaryReader
    ): StockPrice;
  }

  export namespace StockPrice {
    export type AsObject = {
      date: string;
      symbol: string;
      open: number;
      close: number;
      low: number;
      high: number;
      volume: number;
    };
  }
}

export class StockPredictions extends jspb.Message {
  clearPredictionsList(): void;
  getPredictionsList(): Array<number>;
  setPredictionsList(value: Array<number>): void;
  addPredictions(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPredictions.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StockPredictions
  ): StockPredictions.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StockPredictions,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StockPredictions;
  static deserializeBinaryFromReader(
    message: StockPredictions,
    reader: jspb.BinaryReader
  ): StockPredictions;
}

export namespace StockPredictions {
  export type AsObject = {
    predictionsList: Array<number>;
  };
}
