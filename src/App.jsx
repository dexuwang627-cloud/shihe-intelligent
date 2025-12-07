
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import SmartCare from './pages/SmartCare';
import ErrorBoundary from './components/common/ErrorBoundary';

// Service Sub-pages
import GreenEnergy from './pages/services/GreenEnergy';
import MEPEngineering from './pages/services/MEPEngineering';
import EMS from './pages/services/EMS';
import Consulting from './pages/services/Consulting';
import SmartAgriculture from './pages/services/SmartAgriculture';
import SmartEducation from './pages/services/SmartEducation';

function AppContent() {
  const location = useLocation();

  return (
    <Layout>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/green-energy" element={<GreenEnergy />} />
            <Route path="/services/mep-engineering" element={<MEPEngineering />} />
            <Route path="/services/ems" element={<EMS />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/smart-agriculture" element={<SmartAgriculture />} />
            <Route path="/services/smart-education" element={<SmartEducation />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/smart-care" element={<SmartCare />} />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
