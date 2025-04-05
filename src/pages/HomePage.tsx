
import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                Knee Osteoarthritis <span className="hero-title-highlight">Detection</span>
              </h1>
              <p className="hero-description">
                Advanced AI-powered system for accurate detection and classification of knee osteoarthritis from X-ray images.
              </p>
              <div className="hero-actions">
                <Link to="/upload" className="btn btn-primary">
                  Try it now
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <div className="hero-image-blob"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Knee X-ray Illustration" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="page-section">
        <div className="container-custom">
          <h2 className="section-title text-center">Overview of Knee Osteoarthritis</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3 className="section-subtitle">What is Knee Osteoarthritis?</h3>
              <p>
                Knee osteoarthritis (KOA) is a degenerative joint disease that occurs when the protective cartilage 
                that cushions the ends of bones wears down over time. It's one of the most common forms of arthritis, 
                affecting millions worldwide, particularly those over 50.
              </p>
              <p style={{ marginTop: "1rem" }}>
                The condition progressively worsens over time, causing pain, stiffness, and decreased mobility. 
                Early detection is crucial for effective management and treatment planning.
              </p>
            </div>
            
            <div className="overview-card">
              <h3 className="section-subtitle">Why AI Detection Matters</h3>
              <p>
                Traditional diagnosis of KOA relies on radiologists' expertise to interpret X-rays, which can be 
                subjective and time-consuming. Our AI-powered solution offers:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Faster analysis of knee X-ray images</li>
                <li>Consistent and objective assessment</li>
                <li>Early detection of subtle cartilage changes</li>
                <li>Classification of KOA severity using the Kellgren-Lawrence scale</li>
                <li>Support for healthcare professionals in diagnosis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section page-section">
        <div className="container-custom">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="how-it-works-card">
              <div className="step-number">
                <span className="step-number-text">1</span>
              </div>
              <h3 className="step-title">Upload</h3>
              <p className="step-description">
                Upload a knee X-ray image through our simple interface.
              </p>
            </div>
            
            <div className="how-it-works-card">
              <div className="step-number">
                <span className="step-number-text">2</span>
              </div>
              <h3 className="step-title">Analysis</h3>
              <p className="step-description">
                Our advanced AI model analyzes the image for signs of osteoarthritis.
              </p>
            </div>
            
            <div className="how-it-works-card">
              <div className="step-number">
                <span className="step-number-text">3</span>
              </div>
              <h3 className="step-title">Results</h3>
              <p className="step-description">
                Receive detailed analysis with severity classification and visual feedback.
              </p>
            </div>
          </div>
          
          <div className="cta-section">
            <Link to="/upload" className="btn btn-primary">
              Try the detection tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
