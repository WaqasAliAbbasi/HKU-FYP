import os
import grpc
import json

from services.alpr.proto import alpr_pb2_grpc, alpr_pb2

from google.protobuf.json_format import MessageToJson

CHUNK_SIZE = 1024 * 1024  # 1MB


def get_file_chunks(filename):
    with open(filename, 'rb') as f:
        while True:
            piece = f.read(CHUNK_SIZE)
            if len(piece) == 0:
                return
            yield alpr_pb2.ALPRChunk(buffer=piece)


def save_chunks_to_file(chunks, filename):
    with open(filename, 'wb') as f:
        for chunk in chunks:
            f.write(chunk.buffer)


class FileClient:
    def __init__(self, address):
        channel = grpc.insecure_channel(address)
        self.stub = alpr_pb2_grpc.ALPRFileServerStub(channel)

    def upload(self, in_file_name):
        chunks_generator = get_file_chunks(in_file_name)
        response = self.stub.upload(chunks_generator)
        parsedResponse = json.loads(MessageToJson(response))
        if "plates" in parsedResponse:
            return parsedResponse["plates"]
        else:
            return []

    def download(self, target_name, out_file_name):
        response = self.stub.download(alpr_pb2.ALPRRequest(name=target_name))
        save_chunks_to_file(response, out_file_name)


def getALPRResult(filepath, predictionpath):
    client = FileClient('localhost:50053')
    plates = client.upload(filepath)

    return plates