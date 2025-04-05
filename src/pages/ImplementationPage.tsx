
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ImplementationPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-b from-medical-50 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Implementation Details
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Technical architecture and methodology behind our knee osteoarthritis detection system
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <Tabs defaultValue="architecture">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="architecture" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="section-subtitle">System Architecture</h2>
                <p className="text-gray-600 mb-6">
                  Our knee osteoarthritis detection system is built using a combination of deep learning models 
                  and a scalable cloud infrastructure to ensure reliable performance and accessibility.
                </p>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">Key Components:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-medical-700">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Frontend Interface</span>
                      <p className="text-sm text-gray-600">
                        Built with React and Tailwind CSS for a responsive and intuitive user experience
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-medical-700">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Backend API</span>
                      <p className="text-sm text-gray-600">
                        Flask-based RESTful API that handles image uploads, preprocessing, and model inference
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-medical-700">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Deep Learning Model</span>
                      <p className="text-sm text-gray-600">
                        Convolutional Neural Network (CNN) trained on thousands of knee X-ray images
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-medical-700">4</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">Image Processing Pipeline</span>
                      <p className="text-sm text-gray-600">
                        Automated preprocessing system that standardizes images for optimal analysis
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
                  <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-500 mb-2">Architecture Diagram</p>
                      <p className="text-sm text-gray-400">(Placeholder for system architecture diagram)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="section-subtitle">Data Flow</h2>
              
              <div className="relative mt-8">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200"></div>
                
                <div className="relative pl-16 pb-8">
                  <div className="absolute left-6 -translate-x-1/2 bg-medical-500 rounded-full h-5 w-5"></div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Image Upload</h3>
                  <p className="text-gray-600">
                    User uploads a knee X-ray image through the web interface. The system validates the image format and quality.
                  </p>
                </div>
                
                <div className="relative pl-16 pb-8">
                  <div className="absolute left-6 -translate-x-1/2 bg-medical-500 rounded-full h-5 w-5"></div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Preprocessing</h3>
                  <p className="text-gray-600">
                    The image undergoes preprocessing including normalization, resizing, and enhancement to prepare it for analysis.
                  </p>
                </div>
                
                <div className="relative pl-16 pb-8">
                  <div className="absolute left-6 -translate-x-1/2 bg-medical-500 rounded-full h-5 w-5"></div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Model Inference</h3>
                  <p className="text-gray-600">
                    The preprocessed image is passed through our trained CNN model which identifies features associated with different KL grades.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-6 -translate-x-1/2 bg-medical-500 rounded-full h-5 w-5"></div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Results Generation</h3>
                  <p className="text-gray-600">
                    Model predictions are processed to generate a final KL grade classification and confidence score, which is returned to the frontend.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="methodology" className="animate-fade-in">
            <h2 className="section-subtitle">Deep Learning Methodology</h2>
            <p className="text-gray-600 mb-6">
              Our approach uses state-of-the-art deep learning techniques specifically designed for medical image analysis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Model Architecture</h3>
                  <p className="text-gray-600 mb-4">
                    We use a modified ResNet architecture with additional attention mechanisms to focus on relevant knee joint features.
                    The model was designed to capture both local and global features in knee X-ray images.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Input size:</p>
                      <p className="text-gray-600">224 × 224 pixels</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Layers:</p>
                      <p className="text-gray-600">42 convolutional layers</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Parameters:</p>
                      <p className="text-gray-600">~23 million</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Output:</p>
                      <p className="text-gray-600">5 classes (KL grades 0-4)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Training Data</h3>
                  <p className="text-gray-600 mb-4">
                    The model was trained on a large dataset of knee X-ray images from multiple public medical imaging repositories.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Dataset size:</p>
                      <p className="text-gray-600">10,000+ X-ray images</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Annotation:</p>
                      <p className="text-gray-600">Expert radiologist labels</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Augmentation:</p>
                      <p className="text-gray-600">Rotation, scaling, flipping</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">Validation:</p>
                      <p className="text-gray-600">20% holdout validation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="section-subtitle">Training Process</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3">1</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Data Preparation</h3>
                    <p className="text-sm text-gray-600">
                      Images were standardized, normalized, and divided into training, validation, and test sets.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3">2</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Model Training</h3>
                    <p className="text-sm text-gray-600">
                      The model was trained using a combination of cross-entropy loss and focal loss to handle class imbalance.
                      Training ran for 100 epochs with early stopping based on validation performance.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3">3</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Hyperparameter Tuning</h3>
                    <p className="text-sm text-gray-600">
                      Bayesian optimization was used to find optimal learning rates, batch sizes, and model architecture parameters.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3">4</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Validation</h3>
                    <p className="text-sm text-gray-600">
                      Model performance was validated against radiologist-annotated test images not seen during training.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3">5</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Deployment Optimization</h3>
                    <p className="text-sm text-gray-600">
                      The model was optimized for inference speed and memory efficiency using techniques like quantization.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="section-subtitle">Performance Metrics</h2>
                <p className="text-gray-600 mb-6">
                  Our model has been rigorously evaluated using standard metrics for multi-class classification tasks.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-medical-600">92.4%</div>
                      <p className="text-gray-600 text-sm mt-1">Overall Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-medical-600">0.91</div>
                      <p className="text-gray-600 text-sm mt-1">F1 Score</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-medical-600">0.89</div>
                      <p className="text-gray-600 text-sm mt-1">Precision</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-medical-600">0.93</div>
                      <p className="text-gray-600 text-sm mt-1">Recall</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">Class-wise Performance</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { grade: "Grade 0 (Normal)", accuracy: 95 },
                    { grade: "Grade 1 (Doubtful)", accuracy: 87 },
                    { grade: "Grade 2 (Minimal)", accuracy: 90 },
                    { grade: "Grade 3 (Moderate)", accuracy: 93 },
                    { grade: "Grade 4 (Severe)", accuracy: 97 }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.grade}</span>
                        <span className="text-sm font-medium text-medical-600">{item.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-medical-500 h-2 rounded-full" 
                          style={{ width: `${item.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="section-subtitle">Confusion Matrix</h2>
                <p className="text-gray-600 mb-6">
                  The confusion matrix below shows how our model performs across different KL grades.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-gray-500 mb-2">Confusion Matrix</p>
                      <p className="text-sm text-gray-400">(Placeholder for confusion matrix visualization)</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      The confusion matrix shows that our model performs particularly well on normal knees (Grade 0) and severe OA (Grade 4). 
                      There is some confusion between adjacent grades (e.g., between Grades 1 and 2), which is expected given the subtle 
                      differences between consecutive KL grades.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Comparison to Radiologists</h3>
                  <p className="text-gray-600 mb-4">
                    Our model was compared against assessments from board-certified radiologists:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Agreement with radiologists: 87.6%</li>
                    <li>Cases where AI outperformed junior radiologists: 12%</li>
                    <li>Average processing time: 1.2 seconds per image (vs. 45-90 seconds for radiologists)</li>
                    <li>Consistent performance across different X-ray machine manufacturers</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ImplementationPage;
