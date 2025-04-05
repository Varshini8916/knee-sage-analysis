import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link, Navigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { usePrediction } from "@/lib/prediction-context";
import { useEffect } from "react";

// Sample data for the confusion matrix - in a real app, this would come from the backend
const confusionMatrixData = [
  { name: "Grade 0", "True Positive": 95, "False Positive": 5 },
  { name: "Grade 3", "True Positive": 93, "False Positive": 7 },
  { name: "Grade 4", "True Positive": 97, "False Positive": 3 },
];

const PredictionPage = () => {
  const { predictionResult, uploadedImage } = usePrediction();
  
  // Redirect to upload page if no prediction result is available
  if (!predictionResult) {
    return <Navigate to="/upload" />;
  }
  
  const getGradeDescription = (grade: number) => {
    switch (grade) {
      case 0:
        return "No signs of osteoarthritis";
      case 3:
        return "Moderate multiple osteophytes, definite joint space narrowing";
      case 4:
        return "Large osteophytes, marked joint space narrowing, severe sclerosis";
      default:
        return "Unknown";
    }
  };
  
  const getSeverityColor = (grade: number) => {
    switch (grade) {
      case 0:
        return "bg-green-500";
      case 3:
        return "bg-orange-500";
      case 4:
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  
  const getGradeName = (grade: number) => {
    switch (grade) {
      case 0:
        return "Normal";
      case 3:
        return "Moderate";
      case 4:
        return "Severe";
      default:
        return "Unknown";
    }
  };
  
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-b from-medical-50 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Knee Osteoarthritis Analysis
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Results and predictions from our AI analysis system
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="flex items-center mb-8">
          <Link to="/upload">
            <Button variant="ghost" className="flex items-center text-gray-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Upload
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Image and Prediction */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Analysis Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    {uploadedImage ? (
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded X-ray" 
                        className="h-64 w-64 object-contain rounded-md"
                      />
                    ) : (
                      <div className="h-64 w-64 bg-gray-100 rounded-md flex items-center justify-center">
                        <p className="text-gray-400">(X-ray Image)</p>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
                
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">Prediction</h3>
                      <span className="text-sm text-gray-500">Confidence: {predictionResult.confidence}%</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`h-12 w-12 rounded-full ${getSeverityColor(predictionResult.grade)} flex items-center justify-center text-white font-bold text-xl`}>
                        {predictionResult.grade}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Grade {predictionResult.grade} - {getGradeName(predictionResult.grade)}</h4>
                        <p className="text-sm text-gray-600">{getGradeDescription(predictionResult.grade)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">Classification Confidence</h3>
                    {predictionResult.klGradeConfidence.map((item) => (
                      <div key={item.grade} className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Grade {item.grade}</span>
                          <span className="text-sm font-medium text-gray-800">{item.confidence}%</span>
                        </div>
                        <Progress value={item.confidence} className={`h-2 ${getSeverityColor(item.grade)}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Findings and Recommendations</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Observed Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Moderate narrowing of the medial joint space</li>
                    <li>Multiple osteophytes visible on the medial and lateral compartments</li>
                    <li>Some subchondral sclerosis present</li>
                    <li>Early signs of deformity in the femoral condyles</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Recommendations</h3>
                  <div className="bg-medical-50 border border-medical-100 rounded-md p-4 text-gray-700">
                    <p className="mb-4">
                      Based on the AI analysis, this image shows <strong>Grade 3 (Moderate)</strong> knee osteoarthritis. 
                      Please consult with a healthcare professional for proper diagnosis and treatment options. 
                      Possible management approaches for this stage include:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Physical therapy for strengthening exercises</li>
                      <li>Weight management if applicable</li>
                      <li>Pain management medications</li>
                      <li>Activity modifications to reduce joint stress</li>
                      <li>Consider consultation with an orthopedic specialist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Confusion Matrix and Additional Info */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Confusion Matrix</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={confusionMatrixData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Bar dataKey="True Positive" stackId="a" fill="#22c55e">
                        {confusionMatrixData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 3 ? "#f97316" : "#22c55e"} />
                        ))}
                      </Bar>
                      <Bar dataKey="False Positive" stackId="a" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Model performance visualization across different KL grades
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">About This Analysis</h2>
                <div className="text-sm text-gray-600 space-y-3">
                  <p>
                    This analysis was performed using our deep learning model trained on thousands of radiologist-labeled
                    knee X-ray images. The model identifies features associated with different stages of knee osteoarthritis
                    according to the Kellgren-Lawrence grading system.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-yellow-800">
                    <strong>Important:</strong> This AI analysis is intended to assist healthcare professionals and
                    should not replace clinical judgment. Always consult with a qualified healthcare provider for
                    proper diagnosis and treatment recommendations.
                  </div>
                  <p>
                    For more information about our methodology and the AI model, please visit the
                    <Link to="/implementation" className="text-medical-600 hover:text-medical-700 ml-1">
                      Implementation
                    </Link> page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
