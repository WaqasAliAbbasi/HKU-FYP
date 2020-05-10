import os
from concurrent import futures

import grpc
import time
import subprocess
import os
import json
import random
import string
from proto import alpr_pb2, alpr_pb2_grpc

ALPRChunk_SIZE = 1024 * 1024  # 1MB


def get_file_ALPRChunks(filename):
    with open(filename, 'rb') as f:
        while True:
            piece = f.read(ALPRChunk_SIZE)
            if len(piece) == 0:
                return
            yield alpr_pb2.ALPRChunk(buffer=piece)

def get_random_string():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))

def save_chunks_to_files(chunks, folder_path):
    all_chunks = b''
    for chunk in chunks:
        all_chunks += chunk.buffer
    files = []
    i = 0
    while i <= len(all_chunks):
        size = int.from_bytes(all_chunks[i:i+4], "big")
        files.append(all_chunks[i+4:i+4+size])
        i = i+4+size
    file_ids = []
    for file_data in files:
        file_id = get_random_string()
        file_ids.append(file_id)
        file_location = os.path.join(folder_path, "{}.jpg".format(file_id))
        with open(file_location, 'wb') as f:
            f.write(file_data)
    return file_ids

class ALPRFileServer(alpr_pb2_grpc.ALPRFileServerServicer):
    def __init__(self):
        class Servicer(alpr_pb2_grpc.ALPRFileServerServicer):
            def __init__(self):
                self.batch_location = "/tmp"

            def upload(self, request_iterator, context):
                file_ids = save_chunks_to_files(request_iterator, self.batch_location)
                file_paths = ["{}/{}.jpg".format(self.batch_location,file_id) for file_id in file_ids]
                responses = [json.loads(line) for line in os.popen(f'alpr -n 1 -j {" ".join(file_paths)}').readlines()]
                results = [alpr_pb2.ALPRAnalysis(plates=[result["plate"] for result in response["results"]]) for response in responses]
                return alpr_pb2.ALPRResults(results=results)

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
