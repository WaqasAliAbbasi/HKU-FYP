# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from . import chunk_pb2 as proto_dot_chunk__pb2


class FileServerStub(object):
    # missing associated documentation comment in .proto file
    pass

    def __init__(self, channel):
        """Constructor.

        Args:
          channel: A grpc.Channel.
        """
        self.upload = channel.stream_unary(
            '/FileServer/upload',
            request_serializer=proto_dot_chunk__pb2.Chunk.SerializeToString,
            response_deserializer=proto_dot_chunk__pb2.Reply.FromString,
        )
        self.download = channel.unary_stream(
            '/FileServer/download',
            request_serializer=proto_dot_chunk__pb2.Request.SerializeToString,
            response_deserializer=proto_dot_chunk__pb2.Chunk.FromString,
        )


class FileServerServicer(object):
    # missing associated documentation comment in .proto file
    pass

    def upload(self, request_iterator, context):
        # missing associated documentation comment in .proto file
        pass
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def download(self, request, context):
        # missing associated documentation comment in .proto file
        pass
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_FileServerServicer_to_server(servicer, server):
    rpc_method_handlers = {
        'upload': grpc.stream_unary_rpc_method_handler(
            servicer.upload,
            request_deserializer=proto_dot_chunk__pb2.Chunk.FromString,
            response_serializer=proto_dot_chunk__pb2.Reply.SerializeToString,
        ),
        'download': grpc.unary_stream_rpc_method_handler(
            servicer.download,
            request_deserializer=proto_dot_chunk__pb2.Request.FromString,
            response_serializer=proto_dot_chunk__pb2.Chunk.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        'FileServer', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
