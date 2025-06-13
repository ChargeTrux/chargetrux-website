
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
  // Create a custom button that redirects to contact page instead of opening Calendly widget
  const customButton = document.createElement('div');
  customButton.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background: #0069ff;
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0, 105, 255, 0.4);
      transition: all 0.3s ease;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onclick="window.location.href='/contact'">
      Schedule a Demo
    </div>
  `;
  document.body.appendChild(customButton);
};

createRoot(document.getElementById("root")!).render(<App />);
