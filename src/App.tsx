import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ProjectTabs from './components/ProjectTabs';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';
import BalanceNutritionCaseStudy from './components/BalanceNutritionCaseStudy';
import ProjectAICaseStudy from './components/ProjectAICaseStudy';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = ({ onOpenResume }: { onOpenResume: () => void }) => (
  <main>
    <Hero />
    <WorkSection />
    <ProjectTabs />
    <Expertise />
  </main>
);

export default function App() {
  const [showResume, setShowResume] = useState(false);

  // Lock scroll when resume is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showResume]);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#050505] text-white selection:bg-blue-500 selection:text-white min-h-screen">
        <Navbar onOpenResume={() => setShowResume(true)} />
        
        <Routes>
          <Route path="/" element={<Home onOpenResume={() => setShowResume(true)} />} />
          <Route path="/projects/balance-nutrition" element={<BalanceNutritionCaseStudy />} />
          <Route path="/projects/project-ai" element={<ProjectAICaseStudy />} />
        </Routes>

        <Footer onOpenResume={() => setShowResume(true)} />
        
        <ResumeView 
          isOpen={showResume} 
          onClose={() => setShowResume(false)} 
        />
      </div>
    </Router>
  );
}
