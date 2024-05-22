from flask import Flask, request, jsonify
from stock.sp500Info.public.python_code.dataload import dataInteract as di
from flask_cors import CORS
from stock.sp500Info.public.python_code.dataload import statMaker
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE"], "allow_headers": "*"}})

@app.route('/api/daily-prediction', methods=['GET'])
def get_prediction():
    inputDate = request.args.get('date', default=pd.Timestamp.today().normalize(), type=str)
    prediction = di.getDailyPrediction(inputDate)
    return jsonify(prediction)

@app.route('/api/daily-stock', methods=['GET'])
def get_price_graph():
    time_frame = request.args.get('timeFrame', default=5, type=int)
    graph_type = request.args.get('type', default='price', type=str)
    return jsonify(statMaker.getGraph(time_frame, graph_type))

@app.route('/api/daily-stats', methods=['GET'])
def get_stats():
    time_frame = request.args.get('timeFrame', default=5, type=int)
    stat_type = request.args.get('type', default='mean', type=str)
    stat = statMaker.getStat(time_frame, stat_type)
    return jsonify(stat.tolist())

@app.route('/api/daily-price', methods=['GET'])
def get_price():
    price, pred = di.getPredPrice()
    return jsonify(price)

@app.route('/api/daily-news', methods=['GET'])
def get_news():
    inputDate = request.args.get('date', default=pd.Timestamp.today().normalize(), type=str)
    price = di.getPredPrice(inputDate)
    return jsonify(price)


if __name__ == '__main__':
    app.run(debug=True)