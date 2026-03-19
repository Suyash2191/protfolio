import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ProjectTabs from './components/ProjectTabs';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import ResumePage from './pages/ResumePage';
import BalanceNutritionCaseStudy from './components/BalanceNutritionCaseStudy';
import ProjectAICaseStudy from './components/ProjectAICaseStudy';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <main>
    <Hero />
    <WorkSection />
    <ProjectTabs />
    <Expertise />
  </main>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#050505] text-white selection:bg-blue-500 selection:text-white min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/balance-nutrition" element={<BalanceNutritionCaseStudy />} />
          <Route path="/projects/project-ai" element={<ProjectAICaseStudy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
