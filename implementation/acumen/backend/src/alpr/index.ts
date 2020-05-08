import grpc from "grpc";
import { ALPRFileServerClient } from "../proto/alpr/proto/alpr_grpc_pb";
import { ALPRChunk } from "../proto/alpr/proto/alpr_pb";
import { splitBuffer } from "../utils";

const client = new ALPRFileServerClient(
  "localhost:50052",
  grpc.credentials.createInsecure()
);

export const getALPRDetections = (image: Buffer): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const stream = client.upload((error, response) => {
      if (error) {
        reject(error);
      }
      resolve(response.getPlatesList());
    });

    const chunks = splitBuffer(image);
    for (const c of chunks) {
      const chunk = new ALPRChunk();
      chunk.setBuffer(new Uint8Array(c));
      stream.write(chunk);
    }
    stream.end();
  });
