import os
from concurrent import futures

import grpc
import time
import subprocess
import os
import detect

from proto import chunk_pb2, chunk_pb2_grpc

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


class FileServer(chunk_pb2_grpc.FileServerServicer):
    def __init__(self):

        class Servicer(chunk_pb2_grpc.FileServerServicer):
            def __init__(self):
                self.tmp_file_name = '/tmp/server_tmp.jpg'
                self.output_file_name = "./output/server_tmp.png"

            def upload(self, request_iterator, context):
                save_chunks_to_file(request_iterator, self.tmp_file_name)
                results = detect.detect("/tmp")
                detections = results[0]
                return chunk_pb2.Reply(length=os.path.getsize(self.output_file_name), detections=detections)

            def download(self, request, context):
                if request.name:
                    return get_file_chunks(self.output_file_name)

        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=1))
        chunk_pb2_grpc.add_FileServerServicer_to_server(
            Servicer(), self.server)

    def start(self, port):
        print("Starting server. Listening on port {}.".format(port))
        self.server.add_insecure_port(f'[::]:{port}')
        self.server.start()

        try:
            while True:
                time.sleep(60*60*24)
        except KeyboardInterrupt:
            self.server.stop(0)
