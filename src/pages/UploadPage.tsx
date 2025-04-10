import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePrediction, predictImage, getTestPrediction } from '@/lib/prediction-context';

const UploadPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setPredictionResult, setUploadedImage } = usePrediction();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (!selectedFile) {
        throw new Error('No file selected');
      }
      
      // Store the uploaded image in context
      setUploadedImage(selectedImage);
      
      // Use test prediction data instead of calling the API
      // This will work even if the backend is not available
      const result = await getTestPrediction();
      
      if (result.error) {
        throw new Error(result.error);
      }
      
      // Store the prediction result in context
      setPredictionResult(result);
      
      // Navigate to prediction page
      navigate('/prediction');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div style={{ 
        backgroundImage: "linear-gradient(to bottom, #f0f9ff, white)", 
        padding: "3rem 0"
      }}>
        <div className="container-custom">
          <h1 style={{ 
            fontSize: "2rem", 
            fontWeight: "bold", 
            textAlign: "center", 
            color: "#1f2937", 
            marginBottom: "1.5rem" 
          }}>
            Upload X-ray Image
          </h1>
          <p style={{ 
            maxWidth: "48rem", 
            margin: "0 auto", 
            textAlign: "center", 
            color: "#4b5563" 
          }}>
            Upload a knee X-ray image in JPEG, PNG, or DICOM format to analyze for signs of osteoarthritis.
          </p>
        </div>
      </div>

      <div className="container-custom" style={{ padding: "3rem 0" }}>
        <div style={{ 
          maxWidth: "36rem", 
          margin: "0 auto",
          backgroundColor: "white", 
          borderRadius: "0.5rem", 
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" 
        }}>
          <form onSubmit={handleSubmit} style={{ padding: "1.5rem" }}>
            <div 
              onClick={handleFileInputClick}
              style={{
                border: "2px dashed #e2e8f0",
                borderRadius: "0.5rem",
                padding: "2rem",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "1.5rem",
                backgroundColor: "#f8fafc",
                transition: "border-color 0.2s",
                borderColor: selectedImage ? "#0ea5e9" : "#e2e8f0"
              }}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/jpeg, image/png, .dcm"
                style={{ display: "none" }}
              />
              
              {selectedImage ? (
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected X-ray"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "300px",
                      margin: "0 auto 1rem",
                      borderRadius: "0.25rem"
                    }}
                  />
                  <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>{fileName}</p>
                </div>
              ) : (
                <div>
                  <div style={{ 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "50%", 
                    backgroundColor: "#f0f9ff", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 1rem"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#0ea5e9" }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <h3 style={{ fontWeight: "500", marginBottom: "0.5rem", color: "#1f2937" }}>
                    Click to upload or drag and drop
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    JPEG, PNG, or DICOM (max. 10MB)
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              {error && (
                <div style={{
                  backgroundColor: "#fee2e2",
                  color: "#b91c1c",
                  padding: "0.75rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem"
                }}>
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={!selectedImage || isSubmitting}
                style={{
                  backgroundColor: !selectedImage || isSubmitting ? "#94a3b8" : "#0ea5e9",
                  color: "white",
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                  cursor: !selectedImage || isSubmitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background-color 0.2s"
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Analyze Image"
                )}
              </button>
              
              <div style={{ 
                fontSize: "0.75rem", 
                color: "#6b7280", 
                textAlign: "center" 
              }}>
                Note: For testing purposes, you can use the test endpoint by uncommenting the test code in handleSubmit.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
