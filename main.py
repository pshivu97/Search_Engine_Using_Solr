from flask import Flask, request, render_template, make_response, jsonify
from flask_cors import CORS
import solrquery

app = Flask(__name__)
CORS(app)


@app.route('/', methods=["GET", "POST"])
def home():
    if request.method == "GET":
        return render_template("home.html")


@app.route('/get_chart', methods=["GET", "POST"])
def get_chart():
    if request.method == "GET":
        return render_template("chart1.html")


@app.route('/get_tweets', methods=["GET", "POST"])
def get_tweets():
    if request.method == "GET":
        output = {
            "tweets" : solrquery.server_call(request.values)
        }
        return make_response(output, 200)


if __name__ == '__main__':
    app.run()
