import grpc from "grpc";
import { ALPRFileServerClient } from "../generated/proto/alpr/proto/alpr_grpc_pb";
import { ALPRChunk } from "../generated/proto/alpr/proto/alpr_pb";
import { splitBuffer, getIntBuffer } from "../utils";

interface Input {
  name: string;
  port: number;
  batchSize: number;
  timeThreshold: number;
}

export class AlprWorker {
  client: ALPRFileServerClient;
  name: string;
  port: number;
  timeThreshold: number;
  batchSize: number;
  constructor({ name, port, timeThreshold, batchSize }: Input) {
    this.name = name;
    this.port = port;
    this.timeThreshold = timeThreshold;
    this.batchSize = batchSize;
    this.client = new ALPRFileServerClient(
      `localhost:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  getALPRDetections = (images: Array<Buffer>): Promise<string[][]> =>
    new Promise((resolve, reject) => {
      const stream = this.client.upload((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getResultsList().map((result) => result.getPlatesList())
          );
        }
      });

      const combinedBuffer = Buffer.concat(
        images.reduce<Buffer[]>(
          (prev, current) => [...prev, getIntBuffer(current.length), current],
          []
        )
      );

      const chunks = splitBuffer(combinedBuffer);
      for (const c of chunks) {
        const chunk = new ALPRChunk();
        chunk.setBuffer(new Uint8Array(c));
        stream.write(chunk);
      }
      stream.end();
    });
}
