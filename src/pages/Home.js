import React, { useEffect, useState } from 'react';
import '../App.css';
import photo from '../assets/images/SAFWAN.jpg'; // Adjust the path as necessary

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "I am a full-time student at UCR, majoring in Computer Science. I am interested in web development, edge computing, software engineering, and my hobbies include playing sports, remembering Allah, spending time with my family and friends, and learning new hobbies.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 20); // Set to 20 milliseconds for faster typing
  }, []);

  return (
    <section id="home" className="hero-section">
      <img src={photo} alt="Safwan Shahab" className="hero-photo" />
      <h1>Safwan Shahab</h1>
      <p>{text}</p>
    </section>
  );
};

export default Home;
