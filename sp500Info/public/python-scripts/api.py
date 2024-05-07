from flask import Flask, request, jsonify
import dataInteract as di
from flask_cors import CORS
import statMaker

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "methods": ["GET", "POST", "PUT", "DELETE"], "allow_headers": "*"}})

@app.route('/api/daily-prediction', methods=['GET'])
def get_prediction():
    prediction = di.getDailyPrediction()
    return jsonify(prediction)

@app.route('/api/daily-stock', methods=['GET'])
def get_price_graph():
    time_frame = request.args.get('timeFrame', default=5, type=int)
    graphType = request.args.get('type', default='price', type=str)
    return jsonify(statMaker.getGraph(time_frame, graphType))

if __name__ == '__main__':
    app.run(debug=True)