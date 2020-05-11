# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from . import yolo_pb2 as proto_dot_yolo__pb2


class YoloStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.detectObjects = channel.stream_unary(
        '/Yolo/detectObjects',
        request_serializer=proto_dot_yolo__pb2.Chunk.SerializeToString,
        response_deserializer=proto_dot_yolo__pb2.Results.FromString,
        )
    self.downloadProcessedImage = channel.unary_stream(
        '/Yolo/downloadProcessedImage',
        request_serializer=proto_dot_yolo__pb2.Request.SerializeToString,
        response_deserializer=proto_dot_yolo__pb2.Chunk.FromString,
        )


class YoloServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def detectObjects(self, request_iterator, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def downloadProcessedImage(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_YoloServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'detectObjects': grpc.stream_unary_rpc_method_handler(
          servicer.detectObjects,
          request_deserializer=proto_dot_yolo__pb2.Chunk.FromString,
          response_serializer=proto_dot_yolo__pb2.Results.SerializeToString,
      ),
      'downloadProcessedImage': grpc.unary_stream_rpc_method_handler(
          servicer.downloadProcessedImage,
          request_deserializer=proto_dot_yolo__pb2.Request.FromString,
          response_serializer=proto_dot_yolo__pb2.Chunk.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'Yolo', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))