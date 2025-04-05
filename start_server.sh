#!/bin/bash

# Start the Flask server for Knee Osteoarthritis Detection API

# Install Flask first to ensure it's available
echo "Installing Flask..."
pip install flask flask-cors

# Install other dependencies
echo "Installing other dependencies..."
pip install -r requirements.txt

# Create uploads directory if it doesn't exist
mkdir -p uploads

# Start the server
echo "Starting Flask server..."
python app.py
