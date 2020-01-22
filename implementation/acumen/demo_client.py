import os
import grpc

from services.yolo.proto import chunk_pb2_grpc, chunk_pb2

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
        # assert response.length == os.path.getsize(in_file_name)

    def download(self, target_name, out_file_name):
        response = self.stub.download(chunk_pb2.Request(name=target_name))
        save_chunks_to_file(response, out_file_name)


if __name__ == '__main__':
    client = FileClient('localhost:50052')

    # demo for file uploading
    in_file_name = './tmp/market.jpg'
    client.upload(in_file_name)

    # demo for file downloading:
    out_file_name = './tmp/prediction.jpg'
    if os.path.exists(out_file_name):
        os.remove(out_file_name)
    client.download('whatever_name', out_file_name)
