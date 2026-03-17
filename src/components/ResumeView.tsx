import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Download, Share2, Printer } from 'lucide-react';

interface ResumeViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#050505]/80 backdrop-blur-xl border-bottom border-white/5 px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <button 
                onClick={onClose}
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
            <div className="bg-white text-black p-12 md:p-20 rounded-3xl shadow-2xl min-h-[1100px]">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b-2 border-gray-100 pb-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight mb-2">SUYASH SHIRSAT</h1>
                  <p className="text-xl text-blue-600 font-medium">Senior Product Designer</p>
                </div>
                <div className="mt-4 md:mt-0 text-right text-gray-500 text-sm space-y-1">
                  <p>Mumbai, India</p>
                  <p>suyashshirsat21@gmail.com</p>
                  <p>+91 9167575889</p>
                </div>
              </div>

              {/* Summary */}
              <section className="mb-10">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Innovative Product Designer with 5+ years of experience in creating user-centric digital experiences. 
                  Specialized in building scalable design systems, complex data visualizations, and high-conversion 
                  e-commerce platforms. Passionate about bridging the gap between design and technology.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-10">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Experience</h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold">Senior Product Designer</h3>
                      <span className="text-sm text-gray-400">2022 — Present</span>
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-3">HealthTech Solutions</p>
                    <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-2">
                      <li>Led the redesign of the core health tracking application, resulting in a 45% increase in user retention.</li>
                      <li>Developed a comprehensive design system used across mobile and web platforms, reducing design-to-dev handoff time by 30%.</li>
                      <li>Collaborated with data scientists to create intuitive visualizations for complex biometric data.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold">UX/UI Designer</h3>
                      <span className="text-sm text-gray-400">2020 — 2022</span>
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-3">Creative Agency X</p>
                    <ul className="list-disc list-outside ml-4 text-gray-600 text-sm space-y-2">
                      <li>Designed high-fidelity prototypes for 15+ clients in the e-commerce and fintech sectors.</li>
                      <li>Conducted user research and usability testing sessions to inform iterative design improvements.</li>
                      <li>Increased mobile conversion rates for a major fashion retailer by 50% through targeted UX optimizations.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Design Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Product Design', 'UI/UX', 'Design Systems', 'Prototyping', 'User Research', 'Visual Design', 'Interaction Design'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Tools</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe Creative Suite', 'Framer', 'Webflow', 'React', 'Tailwind CSS', 'Git'].map(tool => (
                      <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Education */}
              <section className="mt-10">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</h2>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold">Bachelor of Design</h3>
                    <span className="text-sm text-gray-400">2016 — 2020</span>
                  </div>
                  <p className="text-gray-600 text-sm">National Institute of Design, India</p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="max-w-4xl mx-auto px-6 pb-24 text-center">
            <p className="text-gray-500 mb-6">Interested in working together?</p>
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeView;
