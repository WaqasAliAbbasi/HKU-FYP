from car.proto import car_pb2, car_pb2_grpc
from car import car_functions
import time
from concurrent import futures
import grpc

# import the generated classes

# import the original calculator.py

# create a class to define the server functions, derived from
# car_pb2_grpc.CarServicer


class CarServicer(car_pb2_grpc.CarServicer):

    # calculator.square_root is exposed here
    # the request and response are of the data type
    # calculator_pb2.Number
    def GetCar(self, request, context):
        response = car_pb2.Number()
        response.value = car_functions.get_car(request.value)
        return response


# create a gRPC server
server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

# use the generated function `add_CalculatorServicer_to_server`
# to add the defined class to the server
car_pb2_grpc.add_CarServicer_to_server(
    CarServicer(), server)

def start(port):
    # listen on port 50051
    print("Starting server. Listening on port {}.".format(port))
    server.add_insecure_port("[::]:{}".format(port))
    server.start()

    # since server.start() will not block,
    # a sleep-loop is added to keep alive
    try:
        while True:
            time.sleep(86400)
    except KeyboardInterrupt:
        server.stop(0)
