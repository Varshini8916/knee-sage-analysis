# Knee Osteoarthritis Detection API

This is a Flask-based API server for the Knee Osteoarthritis Detection application. It provides endpoints for analyzing knee X-ray images and predicting osteoarthritis severity using a deep learning model.

## Setup

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### System Requirements

- **Memory**: At least 4GB RAM (8GB+ recommended for TensorFlow)
- **Disk Space**: ~2GB for TensorFlow and dependencies
- **Python Version**: 3.8 - 3.11 (TensorFlow 2.17.0 compatibility)

### Installation

Install the required dependencies:
```bash
pip install -r requirements.txt
```

Note: While virtual environments are recommended for Python projects, the setup script does not create one to simplify the process. If you prefer to use a virtual environment, you can create one manually before running the installation commands.

## Running the Server

Start the Flask server with:

```bash
python app.py
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Health Check

- **URL**: `/api/health`
- **Method**: `GET`
- **Description**: Check if the server is running and the model is loaded
- **Response**: 
  ```json
  {
    "status": "healthy",
    "model_loaded": true
  }
  ```

### Predict

- **URL**: `/api/predict`
- **Method**: `POST`
- **Description**: Upload an X-ray image for analysis
- **Request**: Form data with a file upload (key: `file`)
- **Response**: 
  ```json
  {
    "grade": 3,
    "confidence": 93,
    "klGradeConfidence": [
      {"grade": 0, "confidence": 7},
      {"grade": 3, "confidence": 93},
      {"grade": 4, "confidence": 0}
    ]
  }
  ```

### Test Endpoint

- **URL**: `/api/test`
- **Method**: `GET`
- **Description**: Returns sample prediction data (for testing frontend without running the model)
- **Response**: Same format as the predict endpoint

## Integration with Frontend

To connect the React frontend with this API:

1. Make sure the Flask server is running on port 5000
2. Update the frontend API calls to point to `http://localhost:5000/api/predict`
3. Ensure the file upload form uses the key `file` for the image upload

## Troubleshooting

- If you encounter CORS issues, make sure the Flask server is properly configured to allow requests from your frontend origin
- If the model fails to load, check that the path to the model file is correct in `app.py`
- For large image uploads, you may need to adjust the `MAX_CONTENT_LENGTH` in `app.py`
