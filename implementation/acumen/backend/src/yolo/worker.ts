import grpc from "grpc";
import { YoloClient } from "../generated/proto/yolo/proto/yolo_grpc_pb";
import { Chunk, Request } from "../generated/proto/yolo/proto/yolo_pb";
import { splitBuffer, getIntBuffer } from "../utils";

export interface ImageAnalysis {
  id: string;
  detections: string[];
  port: number;
}

interface Input {
  name: string;
  port: number;
  batchSize: number;
  timeThreshold: number;
}

export class YOLOWorker {
  client: YoloClient;
  name: string;
  port: number;
  timeThreshold: number;
  batchSize: number;
  constructor({ name, port, timeThreshold, batchSize }: Input) {
    this.name = name;
    this.port = port;
    this.timeThreshold = timeThreshold;
    this.batchSize = batchSize;
    this.client = new YoloClient(
      `localhost:${port}`,
      grpc.credentials.createInsecure()
    );
  }

  getYOLODetections = (images: Array<Buffer>): Promise<ImageAnalysis[]> =>
    new Promise((resolve, reject) => {
      const stream = this.client.detectObjects((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(
            response.getResultsList().map((imageAnalysis) => ({
              id: imageAnalysis.getId(),
              detections: imageAnalysis.getDetectionsList(),
              port: this.port,
            }))
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
        const chunk = new Chunk();
        chunk.setBuffer(new Uint8Array(c));
        stream.write(chunk);
      }
      stream.end();
    });

  getYOLOProcessedImage = (imageId: string): Promise<Buffer> => {
    const request = new Request();
    request.setId(imageId);
    return new Promise((resolve, reject) => {
      const stream = this.client.downloadProcessedImage(request);
      let buffer = Buffer.alloc(0);
      stream.on("data", (d: Chunk) => {
        buffer = Buffer.concat([buffer, Buffer.from(d.getBuffer())]);
      });
      stream.on("end", () => resolve(buffer));
      stream.on("error", reject);
    });
  };
}
