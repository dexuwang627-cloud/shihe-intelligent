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

    // Wait for 1.5 seconds to let the animation breathe
    setTimeout(() => {
      loaderElement.classList.add('fade-out');
      // Remove from DOM after transition matches CSS (1.5s)
      setTimeout(() => {
        loaderElement.remove();
      }, 1500);
    }, 1500);
  }
}
