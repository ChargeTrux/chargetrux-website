
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Add Calendly widget scripts and styles
const calendlyStylesheet = document.createElement('link');
calendlyStylesheet.href = 'https://assets.calendly.com/assets/external/widget.css';
calendlyStylesheet.rel = 'stylesheet';
document.head.appendChild(calendlyStylesheet);

const calendlyScript = document.createElement('script');
calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
calendlyScript.async = true;
document.head.appendChild(calendlyScript);

calendlyScript.onload = function() {
  window.Calendly.initBadgeWidget({ 
    url: 'https://calendly.com/specialists-chargetrux/30min', 
    text: 'Schedule Now', 
    color: '#0069ff', 
    textColor: '#ffffff' 
  });
};

createRoot(document.getElementById("root")!).render(<App />);
