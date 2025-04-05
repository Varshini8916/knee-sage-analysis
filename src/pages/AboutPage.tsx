
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-b from-medical-50 to-white py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            About Knee Osteoarthritis
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Understanding knee osteoarthritis and its impact on millions of patients worldwide
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="section-subtitle">What is Knee Osteoarthritis?</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Knee osteoarthritis is a degenerative joint disease characterized by the breakdown of cartilage in the knee joint. 
                  This cartilage serves as a cushion between the bones, allowing for smooth movement. As the cartilage wears away, 
                  bones begin to rub against each other, causing pain, stiffness, and reduced mobility.
                </p>
                <p className="text-gray-600 mb-4">
                  It is the most common form of arthritis, affecting millions of people worldwide, especially those over 50 years of age. 
                  The condition progressively worsens over time, and early diagnosis is essential for effective management.
                </p>
                <p className="text-gray-600">
                  Risk factors include age, obesity, previous joint injuries, repeated stress on the joint, bone deformities, and genetic 
                  factors. Women are more likely to develop knee osteoarthritis, especially after age 50.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="section-subtitle">The Modified Kellgren-Lawrence Classification System</h2>
              <p className="text-gray-600 mb-4">
                Our simplified Kellgren-Lawrence (KL) scale classifies the severity of knee osteoarthritis on a scale from 0 to 4, focusing on the most clinically relevant grades:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    grade: "Grade 0",
                    description: "Normal knee with no features of osteoarthritis",
                    features: "No radiographic features of OA are present"
                  },
                  {
                    grade: "Grade 3",
                    description: "Moderate multiple osteophytes",
                    features: "Moderate multiple osteophytes, definite narrowing of the joint space, and some sclerosis"
                  },
                  {
                    grade: "Grade 4",
                    description: "Severe osteoarthritis",
                    features: "Large osteophytes, marked narrowing of the joint space, severe sclerosis, and definite deformity"
                  }
                ].map((item, index) => (
                  <Card key={index} className={`${index === 2 ? 'border-red-300' : index === 0 ? 'border-green-300' : 'border-orange-300'}`}>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-medical-700">{item.grade}</h3>
                      <p className="text-gray-700 text-sm font-medium">{item.description}</p>
                      <p className="text-gray-600 text-sm mt-2">{item.features}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="section-subtitle">Challenges in KOA Diagnosis</h2>
              <p className="text-gray-600 mb-4">
                Traditional diagnosis of knee osteoarthritis involves clinical assessment and radiographic evaluation. However, there are several challenges:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Subjectivity in radiographic interpretation among radiologists</li>
                <li>Early-stage osteoarthritis may be difficult to detect on standard X-rays</li>
                <li>Time-consuming manual assessment process</li>
                <li>Limited access to specialist radiologists in some regions</li>
                <li>Inconsistency in grading across different healthcare settings</li>
              </ul>
              <p className="text-gray-600">
                Our AI-based detection system addresses these challenges by providing objective, consistent, and rapid assessment of knee X-rays
                for osteoarthritis classification according to our modified Kellgren-Lawrence scale.
              </p>
            </section>
            
            <section>
              <h2 className="section-subtitle">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-medical-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-medical-600">JD</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Dr. Jane Doe</h3>
                  <p className="text-medical-600 text-sm mb-2">Lead AI Researcher</p>
                  <p className="text-gray-600 text-sm">
                    Expert in medical imaging AI with 8+ years of experience in developing 
                    computer vision algorithms for healthcare applications.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-medical-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-medical-600">JS</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">John Smith</h3>
                  <p className="text-medical-600 text-sm mb-2">Orthopedic Consultant</p>
                  <p className="text-gray-600 text-sm">
                    Board-certified orthopedic surgeon specializing in knee disorders with 
                    15+ years of clinical experience in diagnosing and treating osteoarthritis.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-medical-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-medical-600">AP</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">Alex Park</h3>
                  <p className="text-medical-600 text-sm mb-2">Full Stack Developer</p>
                  <p className="text-gray-600 text-sm">
                    Software engineer with expertise in medical applications and 
                    building user-friendly interfaces for healthcare professionals.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Quick Facts</h3>
              <ul className="space-y-4">
                {[
                  "Affects over 250 million people worldwide",
                  "Most common in adults over age 50",
                  "Women have higher prevalence than men",
                  "Obesity increases risk by 4-5 times",
                  "Early detection can slow progression",
                  "10-15% of adults over 60 have symptomatic KOA",
                  "Leading cause of chronic disability in older adults"
                ].map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-medical-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-medical-700">{index + 1}</span>
                    </div>
                    <span className="text-gray-600">{fact}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-medical-50 rounded-lg">
                <h4 className="font-medium text-medical-700 mb-2">Contact Our Team</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about our system or interested in collaborating?
                </p>
                <a 
                  href="mailto:team@koadetect.com" 
                  className="text-sm text-medical-600 font-medium hover:text-medical-700"
                >
                  team@koadetect.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
