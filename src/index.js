import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Custom Cursor JavaScript
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }
});

// Add custom cursor element to body
const cursorElement = document.createElement('div');
cursorElement.classList.add('custom-cursor');
document.body.appendChild(cursorElement);
