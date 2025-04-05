import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import utils

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configuration
MODEL_PATH = os.path.join('model', 'efficientnet_raw.keras')
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'dcm'}

# Create upload folder if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size

# Load the model at startup
model = utils.load_model(MODEL_PATH)

def allowed_file(filename):
    """Check if the file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "model_loaded": model is not None})

@app.route('/api/predict', methods=['POST'])
def predict():
    """
    API endpoint for making predictions
    
    Expects a file upload with key 'file'
    Returns prediction results as JSON
    """
    # Check if a file was uploaded
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    
    # Check if the file is empty
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    # Check if the file type is allowed
    if not allowed_file(file.filename):
        return jsonify({"error": f"File type not allowed. Allowed types: {', '.join(ALLOWED_EXTENSIONS)}"}), 400
    
    try:
        # Save the file temporarily
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Make prediction
        if model is None:
            return jsonify({"error": "Model not loaded"}), 500
        
        result = utils.predict(model, filepath)
        
        # Clean up the temporary file
        os.remove(filepath)
        
        # Return the prediction results
        return jsonify(result)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/test', methods=['GET'])
def test_prediction():
    """
    Test endpoint that returns sample prediction data
    Useful for frontend development without running the model
    """
    sample_result = {
        "grade": 3,
        "confidence": 93,
        "klGradeConfidence": [
            {"grade": 0, "confidence": 7},
            {"grade": 3, "confidence": 93},
            {"grade": 4, "confidence": 0}
        ]
    }
    return jsonify(sample_result)

if __name__ == '__main__':
    # Check if model is loaded
    if model is None:
        print("WARNING: Model could not be loaded. The API will return errors for prediction requests.")
    
    # Run the Flask app
    app.run(host='0.0.0.0', port=5000, debug=True)
