import os
from concurrent import futures

import grpc
import time
import subprocess
import os
import detect
import struct
import random
import string

from proto import yolo_pb2, yolo_pb2_grpc

CHUNK_SIZE = 1024 * 1024  # 1MB


def get_file_chunks(filename):
    with open(filename, 'rb') as f:
        while True:
            piece = f.read(CHUNK_SIZE)
            if len(piece) == 0:
                return
            yield yolo_pb2.Chunk(buffer=piece)

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


class Yolo(yolo_pb2_grpc.YoloServicer):
    def __init__(self):

        class Servicer(yolo_pb2_grpc.YoloServicer):
            def __init__(self):
                self.batch_location = '/tmp'
                self.output_location = './output'

            def detectObjects(self, request_iterator, context):
                file_ids = save_chunks_to_files(request_iterator, self.batch_location)
                model_results = detect.detect(self.batch_location)
                # model_results = [("/asdf",[])]
                results = [yolo_pb2.ImageAnalysis(id=os.path.splitext(os.path.basename(path))[0],detections=detections) for path,detections in model_results]
                for file_id in file_ids:
                    os.remove(os.path.join(self.batch_location,"{}.jpg".format(file_id)))
                return yolo_pb2.Results(results=results)

            def downloadProcessedImage(self, request, context):
                if request.id:
                    output_path = os.path.join(self.output_location,"{}.png".format(request.id))
                    return get_file_chunks(output_path)

        self.server = grpc.server(futures.ThreadPoolExecutor(max_workers=1))
        yolo_pb2_grpc.add_YoloServicer_to_server(
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
