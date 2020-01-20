from nameplate.proto import nameplate_pb2, nameplate_pb2_grpc
from nameplate import nameplate_functions
import time
from concurrent import futures
import grpc


class NameplateServicer(nameplate_pb2_grpc.NameplateServicer):
    def GetNameplate(self, request, context):
        response = nameplate_pb2.NameplateNumber()
        response.value = nameplate_functions.get_nameplate(request.value)
        return response


server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

nameplate_pb2_grpc.add_NameplateServicer_to_server(
    NameplateServicer(), server)


def start(port):
    print("Starting server. Listening on port {}.".format(port))
    server.add_insecure_port("[::]:{}".format(port))
    server.start()

    try:
        while True:
            time.sleep(86400)
    except KeyboardInterrupt:
        server.stop(0)
