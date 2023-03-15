import datetime
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
  time_date = datetime.datetime.now()
  return render_template("numeri.html", dt=time_date)

@app.route('/template', methods=['GET'])
def template():
  return render_template('sitoTemplate/index.html')

@app.route('/winner', methods=["GET"])
def winner():
  return render_template("winner.html")

@app.route('/loser', methods=["GET"])
def loser():
  return render_template("loser.html")

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)