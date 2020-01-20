from flask import Flask, jsonify
from flask_cors import CORS

import grpc
import json
from services.stock.proto import stock_pb2, stock_pb2_grpc
from google.protobuf.json_format import MessageToJson

stock_service_channel = grpc.insecure_channel('localhost:50051')
stock_service_stub = stock_pb2_grpc.StockStub(stock_service_channel)

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'Acumen'


@app.route('/stock/<stock_symbol>')
def show_stock_data(stock_symbol):
    stock_symbol_input = stock_pb2.StockSymbol(stock_symbol=stock_symbol)
    response = stock_service_stub.GetStockHistory(stock_symbol_input)
    response_serialized = MessageToJson(response)
    return jsonify(json.loads(response_serialized)["stockHistory"])


# @app.route('/stock/<stock_symbol>/predict')
# def predict(stock_symbol):
#     stock = Stock(stock_symbol)
#     return jsonify(stock.predict())


if __name__ == '__main__':
    app.run()
