from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Train a model (Random Forest Classifier)
model = RandomForestClassifier()
model.fit(X, y)

# Save the trained model using joblib
joblib.dump(model, '../model/iris_model.joblib')

print("Model has been trained and saved to ../models/iris_model.joblib")
