import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import EducationSkills from './pages/EducationSkills';
import ExperienceProjects from './pages/ExperienceProjects';
import ExtracurricularsInterests from './pages/ExtracurricularsInterests';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ParticlesComponent from './components/particles';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesComponent id="particles" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/education-skills" element={<EducationSkills />} />
          <Route path="/experience-projects" element={<ExperienceProjects />} />
          <Route path="/extracurriculars-interests" element={<ExtracurricularsInterests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
