import grpc

from car.proto import car_pb2, car_pb2_grpc
from nameplate.proto import nameplate_pb2, nameplate_pb2_grpc

car_channel = grpc.insecure_channel('localhost:50051')
nameplate_channel = grpc.insecure_channel('localhost:50052')

car_stub = car_pb2_grpc.CarStub(car_channel)
nameplate_stub = nameplate_pb2_grpc.NameplateStub(nameplate_channel)

if __name__ == "__main__":
    print("Let's get the car's location")
    number = car_pb2.Number(value=16)
    response = car_stub.GetCar(number)
    print(response.value)
    print("Let's get the nameplate of the car")
    number = nameplate_pb2.NameplateNumber(value=16)
    response = nameplate_stub.GetNameplate(number)
    print(response.value)
