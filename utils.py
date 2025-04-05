import os
import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO

# Define the KL grades we're predicting
KL_GRADES = [0, 3, 4]  # Based on the frontend code

def load_model(model_path):
    """
    Load the Keras model from the specified path
    """
    try:
        model = tf.keras.models.load_model(model_path)
        print(f"Model loaded successfully from {model_path}")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

def preprocess_image(image_data, target_size=(224, 224)):
    """
    Preprocess the image data for the model
    
    Args:
        image_data: Image data as bytes or file path
        target_size: Target size for the model input
        
    Returns:
        Preprocessed image as numpy array
    """
    try:
        # Check if image_data is a file path or bytes
        if isinstance(image_data, str):
            # It's a file path
            img = Image.open(image_data).convert('RGB')
        else:
            # It's bytes data
            img = Image.open(BytesIO(image_data)).convert('RGB')
        
        # Resize the image
        img = img.resize(target_size)
        
        # Convert to numpy array and normalize
        img_array = np.array(img) / 255.0
        
        # Add batch dimension
        img_array = np.expand_dims(img_array, axis=0)
        
        return img_array
    
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        return None

def predict(model, image_data):
    """
    Make a prediction using the model
    
    Args:
        model: Loaded Keras model
        image_data: Image data to predict on
        
    Returns:
        Dictionary with prediction results
    """
    try:
        # Preprocess the image
        processed_image = preprocess_image(image_data)
        
        if processed_image is None:
            return {"error": "Failed to process image"}
        
        # Make prediction
        predictions = model.predict(processed_image)[0]
        
        # Get the predicted class (index of max probability)
        predicted_class_index = np.argmax(predictions)
        predicted_grade = KL_GRADES[predicted_class_index]
        
        # Get the confidence for the predicted class
        confidence = int(predictions[predicted_class_index] * 100)
        
        # Format the results as expected by the frontend
        kl_grade_confidence = []
        for i, grade in enumerate(KL_GRADES):
            kl_grade_confidence.append({
                "grade": grade,
                "confidence": int(predictions[i] * 100)
            })
        
        return {
            "grade": predicted_grade,
            "confidence": confidence,
            "klGradeConfidence": kl_grade_confidence
        }
    
    except Exception as e:
        print(f"Error making prediction: {e}")
        return {"error": f"Prediction failed: {str(e)}"}
