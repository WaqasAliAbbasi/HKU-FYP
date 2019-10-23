from flask import Flask, jsonify
from flask_cors import CORS

from stock import Stock

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Acumen'

@app.route('/stock/<stock_symbol>')
def show_stock_data(stock_symbol):
    stock = Stock(stock_symbol)
    return jsonify(stock.get_history_dict())

@app.route('/stock/<stock_symbol>/predict')
def predict(stock_symbol):
    stock = Stock(stock_symbol)
    return jsonify(stock.predict())

if __name__ == '__main__':
    app.run()