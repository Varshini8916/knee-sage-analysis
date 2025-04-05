#!/usr/bin/env python3
"""
Test script for the Knee Osteoarthritis Detection API server.
This script sends a test image to the server and prints the prediction results.
"""

import argparse
import json
import os
import sys

# Check for required packages and install if missing
try:
    import requests
    from PIL import Image
except ImportError:
    print("Installing required packages...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "pillow"])
    import requests
    from PIL import Image

def test_health(base_url):
    """Test the health check endpoint"""
    url = f"{base_url}/health"
    try:
        response = requests.get(url)
        response.raise_for_status()
        print(f"Health check response: {response.json()}")
        return True
    except Exception as e:
        print(f"Health check failed: {e}")
        return False

def test_prediction(base_url, image_path):
    """Test the prediction endpoint with an image"""
    url = f"{base_url}/predict"
    
    if not os.path.exists(image_path):
        print(f"Error: Image file not found at {image_path}")
        return
    
    try:
        # Open and verify the image
        img = Image.open(image_path)
        img.verify()  # Verify it's a valid image
        
        # Send the image to the server
        with open(image_path, 'rb') as f:
            files = {'file': (os.path.basename(image_path), f, 'image/jpeg')}
            response = requests.post(url, files=files)
        
        response.raise_for_status()
        result = response.json()
        
        # Pretty print the result
        print("\nPrediction Result:")
        print(json.dumps(result, indent=2))
        
        # Print a summary
        if 'grade' in result:
            print(f"\nDetected Grade: {result['grade']} with {result['confidence']}% confidence")
            print("\nConfidence by Grade:")
            for grade_conf in result.get('klGradeConfidence', []):
                print(f"  Grade {grade_conf['grade']}: {grade_conf['confidence']}%")
        else:
            print(f"Error in prediction: {result.get('error', 'Unknown error')}")
            
    except Exception as e:
        print(f"Prediction test failed: {e}")

def test_sample_endpoint(base_url):
    """Test the sample endpoint that returns test data"""
    url = f"{base_url}/test"
    try:
        response = requests.get(url)
        response.raise_for_status()
        print(f"Sample endpoint response: {json.dumps(response.json(), indent=2)}")
        return True
    except Exception as e:
        print(f"Sample endpoint test failed: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Test the Knee Osteoarthritis Detection API server')
    parser.add_argument('--url', default='http://localhost:5000/api', help='Base URL of the API server')
    parser.add_argument('--image', default='xray knee.jpg', help='Path to a test image')
    parser.add_argument('--test-only', action='store_true', help='Only test the sample endpoint (no image required)')
    
    args = parser.parse_args()
    
    print(f"Testing server at {args.url}")
    
    # Test health endpoint
    if not test_health(args.url):
        print("Server health check failed. Make sure the server is running.")
        return
    
    # Test sample endpoint
    if args.test_only:
        test_sample_endpoint(args.url)
        return
    
    # Test prediction with image
    test_prediction(args.url, args.image)

if __name__ == "__main__":
    main()
