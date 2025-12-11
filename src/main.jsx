import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

const rootElement = document.getElementById('root');
const loaderElement = document.getElementById('initial-loader');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Artificial delay for branded loading experience - ONLY ON FIRST VISIT
if (loaderElement) {
  const hasLoaded = sessionStorage.getItem('hasLoaded');

  if (hasLoaded) {
    // If already loaded in this session, remove immediately
    loaderElement.style.display = 'none';
    loaderElement.remove();
  } else {
    // Mark as loaded for this session
    sessionStorage.setItem('hasLoaded', 'true');

    // Wait for 0.8 seconds to let the animation breathe (reduced from 1.5s for better LCP)
    setTimeout(() => {
      loaderElement.classList.add('fade-out');
      // Remove from DOM after transition matches CSS (0.5s)
      setTimeout(() => {
        loaderElement.remove();
      }, 500);
    }, 800);
  }
}
