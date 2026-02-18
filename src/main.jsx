import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Helper function to hide the loader
const hideLoader = () => {
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.classList.add('loader-hidden');
    setTimeout(() => loader.remove(), 500);
  }
};

// Render the App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Call it immediately after the render starts
// This ensures the animation stops as soon as the JS is ready
hideLoader();