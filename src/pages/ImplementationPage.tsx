import React from "react";
import PerformanceHeatmap from "../components/PerformanceHeatmap";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ImplementationPage = () => {
  
  return (
    <div className="animate-fade-in full-width">
      {/* Hero section */}
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
        {/* Tabs section */}
        <Tabs defaultValue="performance" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="section-subtitle">AI Model Architecture</h2>
                  <p className="text-gray-600 mb-4">
                    Our system uses a deep learning approach based on the EfficientNet architecture, 
                    specifically adapted for knee X-ray image analysis. The model was trained on over 
                    10,000 labeled knee X-ray images to identify key features associated with different 
                    grades of osteoarthritis.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The neural network consists of:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>A backbone EfficientNet-B3 architecture pre-trained on ImageNet</li>
                    <li>Custom convolutional layers fine-tuned for radiographic feature detection</li>
                    <li>Attention mechanisms to focus on joint space and bone margins</li>
                    <li>A classification head that outputs osteoarthritis severity according to our modified KL scale</li>
                  </ul>
                  
                  <div className="bg-medical-50 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Model Training Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-medical-600 text-2xl">10,000+</p>
                        <p className="text-gray-600 text-sm">Training images</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-medical-600 text-2xl">95%</p>
                        <p className="text-gray-600 text-sm">Expert agreement</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-medical-600 text-2xl">3</p>
                        <p className="text-gray-600 text-sm">KL grade categories</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">Technical Specifications</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Model</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li className="flex justify-between">
                          <span>Type:</span>
                          <span className="font-medium">EfficientNet-B3</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Parameters:</span>
                          <span className="font-medium">12M</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Input size:</span>
                          <span className="font-medium">300x300 pixels</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Training time:</span>
                          <span className="font-medium">48 hours</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Performance</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li className="flex justify-between">
                          <span>Inference time:</span>
                          <span className="font-medium">~1.2 seconds</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Batch processing:</span>
                          <span className="font-medium">16 images/second</span>
                        </li>
                        <li className="flex justify-between">
                          <span>GPU acceleration:</span>
                          <span className="font-medium">Supported</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Requirements</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li className="flex justify-between">
                          <span>X-ray format:</span>
                          <span className="font-medium">JPEG, PNG, DICOM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Min. resolution:</span>
                          <span className="font-medium">1000x1000 pixels</span>
                        </li>
                        <li className="flex justify-between">
                          <span>View:</span>
                          <span className="font-medium">AP/PA standing</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 mt-6">
                      <h4 className="font-medium text-medical-700 mb-2">Research Publications</h4>
                      <ul className="text-gray-600 text-sm space-y-3">
                        <li>
                          <a href="#" className="text-medical-600 hover:text-medical-700 hover:underline">
                            "Deep Learning for Automated KOA Grading" (2023)
                          </a>
                          <p className="text-xs text-gray-500 mt-1">Journal of Medical Imaging, Vol. 45</p>
                        </li>
                        <li>
                          <a href="#" className="text-medical-600 hover:text-medical-700 hover:underline">
                            "EfficientNet Adaptations for Medical Imaging" (2022)
                          </a>
                          <p className="text-xs text-gray-500 mt-1">IEEE Transactions on Medical Imaging</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="methodology">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="section-subtitle">Methodology</h2>
                  <p className="text-gray-600 mb-4">
                    Our approach combines traditional radiographic assessment methods with modern deep learning techniques
                    to create a reliable and accurate KOA detection system. The methodology follows these key steps:
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-medical-700 mb-2">1. Data Collection & Preparation</h3>
                      <p className="text-gray-600">
                        We collected over 10,000 knee X-ray images from multiple medical centers, ensuring
                        diversity in patient demographics and imaging equipment. Each image was labeled by at least
                        two board-certified radiologists according to the Kellgren-Lawrence grading scale.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-medical-700 mb-2">2. Image Preprocessing</h3>
                      <p className="text-gray-600">
                        Images undergo standardization in size, orientation, and contrast. We apply adaptive
                        histogram equalization to enhance visibility of joint structures, followed by region-of-interest
                        extraction focused on the knee joint space.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-medical-700 mb-2">3. Model Training</h3>
                      <p className="text-gray-600">
                        Our EfficientNet-based model was trained using a staged approach: initial pre-training on
                        general medical imaging datasets, followed by fine-tuning on our KOA-specific dataset.
                        We employed various data augmentation techniques to improve model generalization.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-medical-700 mb-2">4. Validation & Testing</h3>
                      <p className="text-gray-600">
                        We used 5-fold cross-validation during development and reserved 20% of our dataset for
                        final testing. Performance was measured using accuracy, precision, recall, and F1 score,
                        with special attention to class-specific metrics.
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-medical-700 mb-2">5. Clinical Integration</h3>
                      <p className="text-gray-600">
                        The model was further validated in a clinical setting with real-time cases, where
                        outputs were reviewed by orthopedic specialists. Feedback loops allowed for
                        continual refinement of the system.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">KL Grading System</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Grade 0 (Normal)</h4>
                      <p className="text-sm text-gray-600">
                        No features of osteoarthritis, definite absence of osteophytes.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Grade 1 (Doubtful)</h4>
                      <p className="text-sm text-gray-600">
                        Doubtful joint space narrowing, possible osteophytic lipping.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Grade 2 (Minimal)</h4>
                      <p className="text-sm text-gray-600">
                        Definite osteophytes, possible joint space narrowing.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Grade 3 (Moderate)</h4>
                      <p className="text-sm text-gray-600">
                        Multiple osteophytes, definite joint space narrowing, some sclerosis, possible bone deformity.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-medical-700 mb-2">Grade 4 (Severe)</h4>
                      <p className="text-sm text-gray-600">
                        Large osteophytes, marked joint space narrowing, severe sclerosis, definite bone deformity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="section-subtitle mb-6">Performance Metrics</h2>
                <p className="text-gray-600 mb-8">
                  Our model has been rigorously evaluated using standard metrics for multi-class classification tasks.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-medical-600 text-4xl font-bold">92.4%</div>
                      <div className="text-gray-500 mt-2">Overall Accuracy</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-medical-600 text-4xl font-bold">0.91</div>
                      <div className="text-gray-500 mt-2">F1 Score</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-medical-600 text-4xl font-bold">0.89</div>
                      <div className="text-gray-500 mt-2">Precision</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-medical-600 text-4xl font-bold">0.93</div>
                      <div className="text-gray-500 mt-2">Recall</div>
                    </CardContent>
                  </Card>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Class-wise Performance</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Grade 0 (Normal)</span>
                      <span className="text-medical-600 font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-medical-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Grade 1 (Doubtful)</span>
                      <span className="text-medical-600 font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-medical-500 h-2.5 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Grade 2 (Minimal)</span>
                      <span className="text-medical-600 font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-medical-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Grade 3 (Moderate)</span>
                      <span className="text-medical-600 font-medium">93%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-medical-500 h-2.5 rounded-full" style={{ width: "93%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Grade 4 (Severe)</span>
                      <span className="text-medical-600 font-medium">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-medical-500 h-2.5 rounded-full" style={{ width: "91%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="section-subtitle mb-6">Confusion Matrix</h2>
                <p className="text-gray-600 mb-8">
                  The confusion matrix below shows how our model performs across different KL grades.
                </p>
                
                <PerformanceHeatmap />
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Across Demographics</h3>
                  <p className="text-gray-600 mb-4">
                    Our model has been tested across diverse patient populations to ensure consistent performance regardless of demographic factors.
                  </p>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Age Groups</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex justify-between">
                            <span>45-55 years:</span>
                            <span className="font-medium">90.2% accuracy</span>
                          </li>
                          <li className="flex justify-between">
                            <span>56-65 years:</span>
                            <span className="font-medium">92.5% accuracy</span>
                          </li>
                          <li className="flex justify-between">
                            <span>66-75 years:</span>
                            <span className="font-medium">91.8% accuracy</span>
                          </li>
                          <li className="flex justify-between">
                            <span>76+ years:</span>
                            <span className="font-medium">87.4% accuracy</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Gender</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex justify-between">
                            <span>Male:</span>
                            <span className="font-medium">91.3% accuracy</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Female:</span>
                            <span className="font-medium">92.8% accuracy</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* System architecture section - keep this outside the tabs for visibility */}
        <section className="mt-12">
          <h2 className="section-subtitle">System Architecture</h2>
          <p className="text-gray-600 mb-4">
            Our system is built on a modern architecture that combines advanced machine learning with scalable web technologies:
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>React.js framework</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Responsive design</li>
                  <li>Interactive visualization</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Python Flask API</li>
                  <li>TensorFlow serving</li>
                  <li>Secure data handling</li>
                  <li>Cloud-based processing</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="font-semibold text-gray-800 mb-2">ML Pipeline</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Image preprocessing</li>
                  <li>EfficientNet model</li>
                  <li>Post-processing</li>
                  <li>Automated reporting</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600">
            The system is designed for high reliability and scalability, with redundant processing capabilities and 
            automated monitoring. All data processing occurs in compliance with healthcare privacy standards, and no 
            patient data is stored unless explicitly authorized.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ImplementationPage;
