# Knee Osteoarthritis Detection Application

This application uses deep learning to analyze knee X-ray images and detect signs of osteoarthritis, classifying them according to the Kellgren-Lawrence grading system.

## Project Structure

The project consists of two main parts:
1. **Frontend**: A React application built with TypeScript, Tailwind CSS, and shadcn/ui
2. **Backend**: A Flask API server that handles image processing and prediction using a TensorFlow model

## Frontend Setup

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ef236076-81da-43b7-bb6b-c6330232749d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technologies Used

### Frontend
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- TanStack Query

### Backend
- Flask
- TensorFlow
- NumPy
- Pillow (PIL)

## Running the Application

### Backend Server

1. Make sure you have Python 3.8-3.11 installed (required for TensorFlow 2.17.0)
2. Run the start script:
   ```bash
   ./start_server.sh
   ```
   This will:
   - Install Flask and other dependencies
   - Start the Flask server on http://localhost:5000

Alternatively, you can run the server manually:
```bash
pip install flask flask-cors
pip install -r requirements.txt
python app.py
```

**Note on TensorFlow Dependencies**: You may see dependency conflict warnings related to TensorFlow. These warnings are generally safe to ignore as long as the server starts successfully. If you encounter issues, consider using a virtual environment to isolate the dependencies.

### Testing the Backend

You can test the backend server using the provided test script:
```bash
./test_server.py --image "xray knee.jpg"
```

For more options:
```bash
./test_server.py --help
```

### Frontend Development Server

1. Make sure you have Node.js and npm installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## API Endpoints

The Flask backend provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `POST /api/predict` - Upload an image for analysis
- `GET /api/test` - Get sample prediction data (for testing)

See `server_README.md` for more details on the API.

## Deployment

For production deployment:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the Flask backend to a server of your choice (AWS, Heroku, etc.)

3. Update the API base URL in `src/lib/prediction-context.tsx` to point to your deployed backend
