import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const TechScene = lazy(() => import('./components/three/TechScene'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const SmartCare = lazy(() => import('./pages/SmartCare'));

// Lazy Load Service Sub-pages
const GreenEnergy = lazy(() => import('./pages/services/GreenEnergy'));
const MEPEngineering = lazy(() => import('./pages/services/MEPEngineering'));
const EMS = lazy(() => import('./pages/services/EMS'));
const Consulting = lazy(() => import('./pages/services/Consulting'));
const SmartAgriculture = lazy(() => import('./pages/services/SmartAgriculture'));
const SmartEducation = lazy(() => import('./pages/services/SmartEducation'));

function AppContent() {
  const location = useLocation();

  return (
    <Layout>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </ErrorBoundary>
    </Layout>
  );
}

import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <ParallaxProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </ParallaxProvider>
    </HelmetProvider>
  );
}

export default App;
