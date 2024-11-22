import React, { useState } from 'react';
import axios from 'axios';

const flowerImages = {
  setosa: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Iris_setosa_2.jpg',
  versicolor: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Blue_Flag%2C_Ottawa.jpg',
  virginica: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Iris_virginica.jpg',
};

function App() {
  const [inputData, setInputData] = useState([5.1, 3.5, 1.4, 0.2]);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (index, value) => {
    const newInputData = [...inputData];
    newInputData[index] = parseFloat(value);
    setInputData(newInputData);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/predict', {
        data: inputData,
      });
      setPrediction(response.data.prediction);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
      setPrediction('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Iris Flower Predictor</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Enter Features</h2>
        <div className="space-y-4">
          {['Sepal Length', 'Sepal Width', 'Petal Length', 'Petal Width'].map((label, index) => (
            <div key={index} className="flex flex-col">
              <label className="font-medium">{label}</label>
              <input
                type="number"
                value={inputData[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 p-2 border rounded"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Predict
        </button>
      </div>
      {prediction && (
        <div className="mt-6 bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Prediction: {prediction}</h2>
          <img
            src="https://media.licdn.com/dms/image/D4D12AQF5vivFTAdZjQ/article-cover_image-shrink_600_2000/0/1700911428185?e=2147483647&v=beta&t=RaJufpE5-ZMvIMZFVTy4dNtvnKHVgmThtTORx-_qu6Q"
            alt={prediction}
            className="mt-4 w-full rounded-lg"
          />
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default App;
