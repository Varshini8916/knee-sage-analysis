import React from "react";
import PerformanceHeatmap from "../components/PerformanceHeatmap";

const ImplementationPage = () => {
  
  return (
    <div className="animate-fade-in full-width">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-medical-50 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Implementation & Technology
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            The technical details behind our knee osteoarthritis detection system
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* AI Model section */}
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
            
            {/* Performance section */}
            <section className="mb-12">
              <h2 className="section-subtitle">Performance</h2>
              <p className="text-gray-600 mb-4">
                The model demonstrates state-of-the-art performance in detecting and classifying knee osteoarthritis from standard X-ray images. 
                Our evaluation metrics are based on a held-out test set of 2,000 images that were not used during training.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-3">Accuracy Metrics</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Overall accuracy:</span>
                      <span className="font-bold text-medical-600">91.2%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Sensitivity:</span>
                      <span className="font-bold text-medical-600">89.7%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Specificity:</span>
                      <span className="font-bold text-medical-600">92.8%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">F1 score:</span>
                      <span className="font-bold text-medical-600">90.5%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-3">Grade-Specific Performance</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Grade 0 (Normal):</span>
                      <span className="font-bold text-medical-600">94.3%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Grade 3 (Moderate OA):</span>
                      <span className="font-bold text-medical-600">88.9%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-600">Grade 4 (Severe OA):</span>
                      <span className="font-bold text-medical-600">90.5%</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Add the new heatmap component here */}
              <PerformanceHeatmap />
              
            </section>
            
            {/* System architecture section */}
            <section>
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
      </div>
    </div>
  );
};

export default ImplementationPage;
