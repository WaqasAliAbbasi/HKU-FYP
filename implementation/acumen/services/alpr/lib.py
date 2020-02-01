import os
from concurrent import futures

import grpc
import time
import subprocess
import os
import json

from proto import alpr_pb2, alpr_pb2_grpc

ALPRChunk_SIZE = 1024 * 1024  # 1MB


def get_file_ALPRChunks(filename):
    with open(filename, 'rb') as f:
        while True:
            piece = f.read(ALPRChunk_SIZE)
            if len(piece) == 0:
                return
            yield alpr_pb2.ALPRChunk(buffer=piece)


def save_ALPRChunks_to_file(ALPRChunks, filename):
    with open(filename, 'wb') as f:
        for ALPRChunk in ALPRChunks:
            f.write(ALPRChunk.buffer)


class ALPRFileServer(alpr_pb2_grpc.ALPRFileServerServicer):
    def __init__(self):

        class Servicer(alpr_pb2_grpc.ALPRFileServerServicer):
            def __init__(self):
                self.tmp_file_name = '/tmp/server_tmp.jpg'

            def upload(self, request_iterator, context):
                save_ALPRChunks_to_file(request_iterator, self.tmp_file_name)
                response = json.loads(os.popen(
                    f'alpr -n 1 -j {self.tmp_file_name}').read())
                return alpr_pb2.ALPRReply(plates=[result["plate"] for result in response["results"]])

            def download(self, request, context):
                if request.name:
                    return get_file_ALPRChunks(self.tmp_file_name)

        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=1))
        alpr_pb2_grpc.add_ALPRFileServerServicer_to_server(
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
