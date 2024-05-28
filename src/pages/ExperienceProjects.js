import React from 'react';
import '../App.css';

const ExperienceProjects = () => {
  return (
    <section id="experience-projects" className="experience-projects">
      <h2>Experience & Projects</h2>
      <div className="experience">
        <h3>Data Analyst - Transcon Financial Services</h3>
        <p>Freelance Jun 2020 - Jul 2020</p>
        <p>Responsibilities included data analysis and reporting using various tools and software...</p>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <p>
          <strong>Jetson NANO Security Camera Project:</strong> Created a security camera system that detects intruders and differentiates them from household members. 
          <a href="https://docs.google.com/presentation/d/1c7fqQEcY6OkbsiMdSjKvUyInKnggqoH2fZgZ7PE-EDE/edit#slide=id.p" target="_blank" rel="noopener noreferrer">More Information</a>
        </p>
      </div>
    </section>
  );
};

export default ExperienceProjects;
