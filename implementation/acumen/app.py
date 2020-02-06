import grpc
import json
import os
import queue

from flask import Flask, jsonify, flash, request, redirect, url_for, send_file
from flask_cors import CORS
from google.protobuf.json_format import MessageToJson
from concurrent.futures import ThreadPoolExecutor, wait, as_completed

import yolo_client
import alpr_client
from services.stock.proto import stock_pb2, stock_pb2_grpc

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


initial = [{"name": "Machine 1 GPU 0", "port": 50053}, {
    "name": "Machine 1 GPU 1", "port": 50054}, {"name": "Machine 1 GPU All 4", "port": 50055}, {"name": "Machine 2 GPU 0", "port": 50056}, {"name": "Machine 2 GPU All 4", "port": 50057}]
yolo_services = queue.Queue()
for service in initial:
    yolo_services.put(service)


@app.route('/yolo_services/reset', methods=['GET'])
def reset_yolo_services():
    if request.method == 'GET':
        while not yolo_services.empty():
            yolo_services.get()
        for service in initial:
            yolo_services.put(service)
        return jsonify(initial)


@app.route('/yolo_services', methods=['GET', 'POST'])
def manage_yolo_services():
    if request.method == 'POST':
        services = request.json
        while not yolo_services.empty():
            yolo_services.get()
        for service in services:
            yolo_services.put(service)
        return jsonify(services)
    if request.method == 'GET':
        services = []
        while not yolo_services.empty():
            services.append(yolo_services.get())
        for service in services:
            yolo_services.put(service)
        return jsonify(services)


@app.route('/image', methods=['GET', 'POST'])
def image():
    return run_pipeline(yolo_services)


def run_pipeline(queue):
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
            # pool = ThreadPoolExecutor(5)
            # futures = []
            try:
                os.remove(predictionpath)
            except OSError:
                pass
            # for port in [available_yolo_services_separate_nodes.get()]:
            #     print("Starting at port " + str(port))
            #     futures.append(pool.submit(
            #         yolo_client.getYOLOResult, filepath, predictionpath, port, available_yolo_services_separate_nodes))
            # detections = [future.result() for future in wait(
            #     futures, return_when="FIRST_COMPLETED")[0]]
            service = queue.get()
            print("Starting at port " + str(service['port']))
            detections = yolo_client.getYOLOResult(
                filepath, predictionpath, service, queue)
            plates = []
            if "car" in detections[0]:
                plates = alpr_client.getALPRResult(filepath, predictionpath)
            return jsonify({"detections": detections, "plates": plates})
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], "prediction.jpg"), attachment_filename="prediction.jpg")


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
