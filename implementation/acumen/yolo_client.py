import os
import grpc
import json

from services.yolo.proto import chunk_pb2_grpc, chunk_pb2
from google.protobuf.json_format import MessageToJson

CHUNK_SIZE = 1024 * 1024  # 1MB


def get_file_chunks(filename):
    with open(filename, 'rb') as f:
        while True:
            piece = f.read(CHUNK_SIZE)
            if len(piece) == 0:
                return
            yield chunk_pb2.Chunk(buffer=piece)


def save_chunks_to_file(chunks, filename):
    with open(filename, 'wb') as f:
        for chunk in chunks:
            f.write(chunk.buffer)


class FileClient:
    def __init__(self, address):
        channel = grpc.insecure_channel(address)
        self.stub = chunk_pb2_grpc.FileServerStub(channel)

    def upload(self, in_file_name):
        chunks_generator = get_file_chunks(in_file_name)
        response = self.stub.upload(chunks_generator)
        parsedResponse = json.loads(MessageToJson(response))
        if "detections" in parsedResponse:
            return parsedResponse["detections"]
        else:
            return []

    def download(self, target_name, out_file_name):
        response = self.stub.download(chunk_pb2.Request(name=target_name))
        save_chunks_to_file(response, out_file_name)


def getYOLOResult(filepath, predictionpath, service, q):
    # if os.path.exists(predictionpath):
    #     os.remove(predictionpath)

    port = service['port']
    client = FileClient('localhost:'+str(port))
    detections = client.upload(filepath)

    client.download('whatever_name', predictionpath)

    q.put(service)
    print("finished with " + str(port))

    return detections
