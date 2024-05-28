import React from 'react';
import '../App.css';

const ExtracurricularsInterests = () => {
  return (
    <section id="extracurriculars-interests" className="extracurriculars-interests">
      <h2>Extracurriculars & Interests</h2>
      <div className="interest">
        <h3>Artificial Intelligence (AI)</h3>
        <p>
          I am deeply fascinated by the field of Artificial Intelligence and its potential to transform various industries. My interest in AI began with a course on machine learning, where I learned about different algorithms and their applications. I have since delved into various AI projects, including developing predictive models and exploring natural language processing. I enjoy staying updated with the latest advancements in AI by reading research papers and participating in AI-focused webinars and conferences.
        </p>
      </div>
      <div className="interest">
        <h3>Edge Computing</h3>
        <p>
          Edge Computing is another area that captivates my interest due to its potential to bring computational power closer to data sources, reducing latency and improving efficiency. I recently completed a project in edge computing for one of my classes, where I designed and implemented a system that leverages edge devices for real-time data processing in a smart home environment. This project allowed me to apply my theoretical knowledge to a practical scenario, enhancing my understanding of distributed systems and the Internet of Things (IoT).
        </p>
      </div>
    </section>
  );
};

export default ExtracurricularsInterests;
