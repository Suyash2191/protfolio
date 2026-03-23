import React, { useEffect } from 'react';
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
import AivoryStudioCaseStudy from './components/AivoryStudioCaseStudy';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#050505] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <WorkSection />
              <ProjectTabs />
              <Expertise />
              <Footer />
            </main>
          } />
          <Route path="/projects/balance-nutrition" element={<BalanceNutritionCaseStudy />} />
          <Route path="/projects/project-ai" element={<ProjectAICaseStudy />} />
          <Route path="/projects/aivory-studio" element={<AivoryStudioCaseStudy />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
