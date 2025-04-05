
import React from "react";
import "../styles/team.css";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Jane Doe",
      title: "Lead AI Researcher",
      bio: "Expert in medical imaging AI with 8+ years of experience in developing computer vision algorithms for healthcare applications.",
      avatar: "JD",
    },
    {
      name: "John Smith",
      title: "Orthopedic Consultant",
      bio: "Board-certified orthopedic surgeon specializing in knee disorders with 15+ years of clinical experience in diagnosing and treating osteoarthritis.",
      avatar: "JS",
    },
    {
      name: "Alex Park",
      title: "Full Stack Developer",
      bio: "Software engineer with expertise in medical applications and building user-friendly interfaces for healthcare professionals.",
      avatar: "AP",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="team-hero">
        <div className="container-custom">
          <h1 className="section-title">Our Team</h1>
          <div className="team-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <p className="team-description">
            Meet the experts behind KOA Detect, combining expertise in AI research, orthopedic medicine, and software development
          </p>
        </div>
      </div>

      <div className="container-custom page-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-header">
                <div className="team-avatar">
                  <span className="team-avatar-text">{member.avatar}</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-bio">{member.bio}</p>
                
                <div className="team-contact">
                  <h4 className="team-contact-title">Contact</h4>
                  <a 
                    href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@koadetect.com`}
                    className="team-email"
                  >
                    {member.name.toLowerCase().replace(" ", ".")}@koadetect.com
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team-card">
          <h2 className="join-team-title">Join Our Team</h2>
          <p className="join-team-description">
            We're always looking for talented individuals who are passionate about improving healthcare 
            through innovative technology. If you're interested in joining our mission, reach out to us.
          </p>
          <div className="join-team-actions">
            <a href="mailto:careers@koadetect.com" className="contact-link">
              Contact Us
            </a>
            <a href="#" className="positions-link">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
