# Basic, with no weighting. Works okay
from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from builtins import input

app = Flask(__name__)

print("Hello World")

df = pd.read_csv("../PantsIndexData - Sheet1.csv")
temp = df.iloc[:,[0,1]]

pantsData = []
for i in range(len(df)):
    r1 = df.iloc[i]['Rise']
    t1 = df.iloc[i]['Thigh']
    l1 = df.iloc[i]['Leg Opening']
    vec = [r1, t1, l1]
    pantsData.append(vec)


pants_data = np.array(pantsData)

n_neighbors = len(pants_data)

# Create the KNN model
knn = NearestNeighbors(n_neighbors=n_neighbors, metric='euclidean')

# Fit the model
knn.fit(pants_data)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    # Get user input from the AJAX request
    input_data = request.json
    query_pants = np.array([[float(input_data['rise']), float(input_data['thigh']), float(input_data['leg_opening'])]])

    # Find the distances and indices of all the neighbors
    distances, indices = knn.kneighbors(query_pants)

    # Prepare the output
    output = []
    for i in np.nditer(indices):
        output.append(temp.iloc[i][0] + " " + temp.iloc[i][1])

    return jsonify(output)  # Return the results as JSON

if __name__ == '__main__':
    app.run(debug=True, port=5001)

#to test run app.py and go to http://127.0.0.1:5001
