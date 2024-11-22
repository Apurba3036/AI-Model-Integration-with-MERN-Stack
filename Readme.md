# AI Model Integration with MERN and Flask Microservice

This project demonstrates the integration of a machine learning model (Iris classification model using Scikit-learn) deployed as a Flask microservice, and a MERN (MongoDB, Express, React, Node.js) stack frontend that interacts with the Flask service.

## Overview

The goal of this project is to:
- Create a Flask microservice to serve a machine learning model.
- Use a Node.js backend to send requests to the Flask service.
- Develop a React frontend to interact with the Node.js server and display the predictions.

### Technologies Used

- **Flask** - Python web framework used to create the microservice.
- **Scikit-learn** - A machine learning library used to train the Iris classification model.
- **Node.js** - JavaScript runtime to handle backend requests and communicate with Flask.
- **Express** - Web framework for Node.js to create an API.
- **React** - JavaScript library for building the frontend user interface.
- **Axios** - HTTP client used in Node.js to make requests to the Flask service.
- **MongoDB** - A NoSQL database to store any necessary data.

## Project Setup

### Flask Microservice Setup

1. Install dependencies:
   ```bash
   pip install flask scikit-learn joblib
