import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

// Lazy Load Pages for Performance Code Splitting
const Home = lazy(() => import('./pages/Home'));
const Venues = lazy(() => import('./pages/Venues'));
const VenueDetail = lazy(() => import('./pages/VenueDetail'));

// Elegant Loading Fallback
const LoadingScreen = () => (
  <div className="h-screen w-screen flex flex-col items-center justify-center bg-cream text-burgundy">
    <div className="w-12 h-12 border-2 border-burgundy/20 border-t-burgundy rounded-full animate-spin mb-4"></div>
    <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 animate-pulse">Loading Zyvara</span>
  </div>
);

// Helper component to access location for AnimatePresence
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venues/:slug" element={<VenueDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="h-[100dvh] w-screen overflow-hidden flex flex-col bg-cream">
        <Navbar />
        <main className="flex-grow h-full w-full">
          <Suspense fallback={<LoadingScreen />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;