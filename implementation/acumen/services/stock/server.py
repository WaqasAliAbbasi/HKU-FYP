from proto import stock_pb2, stock_pb2_grpc
import helper
import time
from concurrent import futures
import grpc


class StockServicer(stock_pb2_grpc.StockServicer):
    def GetStockHistory(self, request, context):
        response = stock_pb2.StockHistory()
        stock_history = [stock_pb2.StockHistory.StockPrice(
            symbol=stock_price['symbol'], date=stock_price['date'], open=stock_price['open'], close=stock_price['close'], low=stock_price['low'], high=stock_price['high'], volume=stock_price['volume']) for stock_price in helper.get_stock_history(request.stock_symbol)]
        response.stock_history.extend(stock_history)
        return response

    def GetStockPredictions(self, request, context):
        response = stock_pb2.StockPredictions()
        response.predictions.extend(
            helper.get_stock_predictions(request.stock_symbol))
        return response


server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

stock_pb2_grpc.add_StockServicer_to_server(
    StockServicer(), server)


def start(port):
    print("Starting server. Listening on port {}.".format(port))
    server.add_insecure_port("[::]:{}".format(port))
    server.start()

    try:
        while True:
            time.sleep(86400)
    except KeyboardInterrupt:
        server.stop(0)
