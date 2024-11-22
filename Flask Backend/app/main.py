from flask import Flask, request, jsonify
import joblib

# Initialize Flask application
app = Flask(__name__)

# Load the trained machine learning model
model = joblib.load('../model/iris_model.joblib')

@app.route('/')
def hello():
    return "my first app"

# Define the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the request
        input_data = request.json['data']

        # Check if the input data has exactly 4 features
        if len(input_data) != 4:
            return jsonify({'error': 'Input data must contain 4 values (sepal length, sepal width, petal length, petal width)'}), 400

        # Make predictions using the loaded model
        prediction = model.predict([input_data])[0]

        # Map the prediction to the Iris species name
        species_map = {0: 'Setosa', 1: 'Versicolor', 2: 'Virginica'}
        species = species_map.get(prediction, 'Unknown')

        # Return the prediction as a JSON response
        return jsonify({'prediction': species}), 200

    except Exception as e:
        # Handle any errors
        return jsonify({'error': str(e)}), 500

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
