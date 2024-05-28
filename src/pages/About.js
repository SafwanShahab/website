import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I developed an interest in computer science during high school, back when I took my first programming class, AP Computer Science A, in my senior year. This led me to major in computer science and sparked my interest in various fields within the discipline.
      </p>
      <p>
        I am particularly interested in edge computing and artificial intelligence. My interest in edge computing grew after taking a class on it (CS 131), which sparked my fascination with the topic. Additionally, the rise of AI in recent years has fueled my curiosity about its potential applications and impact.
      </p>
      <p>
        My career goal is to find employment in the fields of edge computing and artificial intelligence. I aim to work in these areas for at least five years, after which I hope to start my own business and create my own software company.
      </p>
      <a href="/safwanresume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
};

export default About;
