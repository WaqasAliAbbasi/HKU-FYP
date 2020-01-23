from flask import Flask, jsonify, flash, request, redirect, url_for, send_file
from flask_cors import CORS

import grpc
import json
from services.stock.proto import stock_pb2, stock_pb2_grpc
from google.protobuf.json_format import MessageToJson

import os
import yolo_client

UPLOAD_FOLDER = '/tmp'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

stock_service_channel = grpc.insecure_channel('localhost:50051')
stock_service_stub = stock_pb2_grpc.StockStub(stock_service_channel)

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
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


@app.route('/stock/<stock_symbol>/predict')
def predict(stock_symbol):
    stock_symbol_input = stock_pb2.StockSymbol(stock_symbol=stock_symbol)
    response = stock_service_stub.GetStockPredictions(stock_symbol_input)
    response_serialized = MessageToJson(response)
    return jsonify(json.loads(response_serialized)["predictions"])


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    predictionpath = os.path.join(
        app.config['UPLOAD_FOLDER'], "prediction.jpg")
    if request.method == 'POST':
        if '0' not in request.files:
            return 'No file part'
        file = request.files['0']
        if file.filename == '':
            return 'No selected file'
        if file and allowed_file(file.filename):
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], "predict.jpg")
            file.save(filepath)
            yolo_client.getYOLOResult(filepath, predictionpath)
            return "OK"
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], "prediction.jpg"), attachment_filename="prediction.jpg")


if __name__ == '__main__':
    app.run()
