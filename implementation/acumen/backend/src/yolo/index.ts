import grpc from "grpc";
import { FileServerClient } from "../generated/proto/yolo/proto/chunk_grpc_pb";
import { Chunk, Request } from "../generated/proto/yolo/proto/chunk_pb";
import { splitBuffer } from "../utils";

const client = new FileServerClient(
  "localhost:50059",
  grpc.credentials.createInsecure()
);

export const getYOLODetections = (image: Buffer): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const stream = client.upload((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.getDetectionsList());
      }
    });

    const chunks = splitBuffer(image);
    for (const c of chunks) {
      const chunk = new Chunk();
      chunk.setBuffer(new Uint8Array(c));
      stream.write(chunk);
    }
    stream.end();
  });

export const getYOLOProcessedImage = (): Promise<Buffer> => {
  const request = new Request();
  request.setName("NA");
  return new Promise((resolve, reject) => {
    const stream = client.download(request);
    let buffer = Buffer.alloc(0);
    stream.on("data", (d: Chunk) => {
      buffer = Buffer.concat([buffer, Buffer.from(d.getBuffer())]);
    });
    stream.on("end", () => resolve(buffer));
    stream.on("error", reject);
  });
};
