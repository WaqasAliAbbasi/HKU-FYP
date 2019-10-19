from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'Acumen'

@app.route('/stock/<stock_symbol>')
def show_stock_data(stock_symbol):
    df = pd.read_csv("../data/KaggleNYStockExchange/prices-split-adjusted.csv")
    stock_data = df[df.symbol == stock_symbol].sort_values("date")
    return jsonify(stock_data.to_dict(orient="records"))