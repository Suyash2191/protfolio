import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, Share2, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white pb-24"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Printer className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white text-black p-8 md:p-20 rounded-3xl shadow-2xl min-h-[1100px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b-2 border-gray-100 pb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase">SUYASH SHIRSAT</h1>
              <p className="text-xl text-blue-600 font-medium font-poppins">Senior Product Designer</p>
            </div>
            <div className="mt-4 md:mt-0 text-right text-gray-500 text-sm space-y-1 font-mono">
              <p>Mumbai, India</p>
              <p>suyashshirsat21@gmail.com</p>
              <p>+91 9167575889</p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I find UX in everything around me and a visual story in everything I build. 
              From scratch to shipped, 3+ years of <span className="font-bold text-black border-b-2 border-blue-500/30">Product Designer</span> turning ideas into products 
              Build <span className="font-bold text-black border-b-2 border-blue-500/30">AI Ecosystem</span> in starups actually feel.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Senior Product Designer</h3>
                  <span className="text-sm text-gray-400 font-mono">2022 — Present</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-3">HealthTech & AI Solutions</p>
                <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-2">
                  <li>Building AI Ecosystems for startups, focusing on seamless human-AI interaction and scalable design patterns.</li>
                  <li>Led the redesign of core health tracking and diagnostic platforms, resulting in improved user engagement and retention.</li>
                  <li>Developing comprehensive design systems that bridge the gap between complex backend logic and intuitive frontend experiences.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">UX/UI Designer</h3>
                  <span className="text-sm text-gray-400 font-mono">2020 — 2022</span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-3">Creative Product Lab</p>
                <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-2">
                  <li>Designed high-fidelity prototypes and visual stories for diverse digital products from scratch to shipping.</li>
                  <li>Conducted user research to identify real-world UX patterns and translate them into functional design solutions.</li>
                  <li>Collaborated closely with engineering teams to ensure design fidelity during transition from Figma to production.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mt-10 pt-10 border-t border-gray-100">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</h2>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold">Bachelor of Design</h3>
                <span className="text-sm text-gray-400 font-mono">2016 — 2020</span>
              </div>
              <p className="text-gray-600 text-sm">National Institute of Design, India</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-500 mb-6 font-poppins">Interested in working together?</p>
        <button 
          onClick={() => navigate('/#contact')}
          className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
        >
          Get in Touch
        </button>
      </div>
    </motion.div>
  );
};

export default ResumePage;
