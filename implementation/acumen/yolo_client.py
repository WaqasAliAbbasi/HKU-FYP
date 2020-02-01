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
        return json.loads(MessageToJson(response))["detections"]
        # assert response.length == os.path.getsize(in_file_name)

    def download(self, target_name, out_file_name):
        response = self.stub.download(chunk_pb2.Request(name=target_name))
        save_chunks_to_file(response, out_file_name)


def getYOLOResult(filepath, predictionpath):
    if os.path.exists(predictionpath):
        os.remove(predictionpath)

    client = FileClient('localhost:50052')
    detections = client.upload(filepath)

    client.download('whatever_name', predictionpath)

    return detections
