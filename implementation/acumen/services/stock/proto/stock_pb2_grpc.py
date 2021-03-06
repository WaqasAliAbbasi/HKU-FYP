# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

from . import stock_pb2 as proto_dot_stock__pb2


class StockStub(object):
    # missing associated documentation comment in .proto file
    pass

    def __init__(self, channel):
        """Constructor.

        Args:
          channel: A grpc.Channel.
        """
        self.GetStockHistory = channel.unary_unary(
            '/Stock/GetStockHistory',
            request_serializer=proto_dot_stock__pb2.StockSymbol.SerializeToString,
            response_deserializer=proto_dot_stock__pb2.StockHistory.FromString,
        )
        self.GetStockPredictions = channel.unary_unary(
            '/Stock/GetStockPredictions',
            request_serializer=proto_dot_stock__pb2.StockSymbol.SerializeToString,
            response_deserializer=proto_dot_stock__pb2.StockPredictions.FromString,
        )


class StockServicer(object):
    # missing associated documentation comment in .proto file
    pass

    def GetStockHistory(self, request, context):
        # missing associated documentation comment in .proto file
        pass
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetStockPredictions(self, request, context):
        # missing associated documentation comment in .proto file
        pass
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_StockServicer_to_server(servicer, server):
    rpc_method_handlers = {
        'GetStockHistory': grpc.unary_unary_rpc_method_handler(
            servicer.GetStockHistory,
            request_deserializer=proto_dot_stock__pb2.StockSymbol.FromString,
            response_serializer=proto_dot_stock__pb2.StockHistory.SerializeToString,
        ),
        'GetStockPredictions': grpc.unary_unary_rpc_method_handler(
            servicer.GetStockPredictions,
            request_deserializer=proto_dot_stock__pb2.StockSymbol.FromString,
            response_serializer=proto_dot_stock__pb2.StockPredictions.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        'Stock', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
