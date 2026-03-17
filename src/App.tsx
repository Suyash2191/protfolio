import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ProjectTabs from './components/ProjectTabs';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';

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
    <div className="bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      <Navbar onOpenResume={() => setShowResume(true)} />
      <main>
        <Hero />
        <WorkSection />
        <ProjectTabs />
        <Expertise />
      </main>
      <Footer onOpenResume={() => setShowResume(true)} />
      
      <ResumeView 
        isOpen={showResume} 
        onClose={() => setShowResume(false)} 
      />
    </div>
  );
}
