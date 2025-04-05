import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the prediction result type
export interface KLGradeConfidence {
  grade: number;
  confidence: number;
}

export interface PredictionResult {
  grade: number;
  confidence: number;
  klGradeConfidence: KLGradeConfidence[];
  error?: string;
}

// Create the context
interface PredictionContextType {
  predictionResult: PredictionResult | null;
  setPredictionResult: (result: PredictionResult | null) => void;
  uploadedImage: string | null;
  setUploadedImage: (image: string | null) => void;
}

const PredictionContext = createContext<PredictionContextType | undefined>(undefined);

// Create a provider component
export const PredictionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  return (
    <PredictionContext.Provider 
      value={{ 
        predictionResult, 
        setPredictionResult, 
        uploadedImage, 
        setUploadedImage 
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
};

// Create a hook to use the prediction context
export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (context === undefined) {
    throw new Error('usePrediction must be used within a PredictionProvider');
  }
  return context;
};

// API functions
const API_BASE_URL = 'http://localhost:5000/api';

export const predictImage = async (file: File): Promise<PredictionResult> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to analyze image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error predicting image:', error);
    return {
      grade: 0,
      confidence: 0,
      klGradeConfidence: [],
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
};

// For testing without the backend
export const getTestPrediction = async (): Promise<PredictionResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/test`);
    
    if (!response.ok) {
      throw new Error('Failed to get test prediction');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting test prediction:', error);
    return {
      grade: 3,
      confidence: 93,
      klGradeConfidence: [
        { grade: 0, confidence: 7 },
        { grade: 3, confidence: 93 },
        { grade: 4, confidence: 0 },
      ]
    };
  }
};
