import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, X } from 'lucide-react';

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-display leading-[1.1]">
            Crafting Digital Excellence
          </h3>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              {/* Project Header */}
              <div className="space-y-6 max-w-4xl mb-12 mx-auto text-center flex flex-col items-center">
                <div className="flex items-center space-x-3 text-gray-500 font-mono text-sm tracking-[0.2em] uppercase">
                  <span>[{String(idx + 1).padStart(3, '0')}]</span>
                  <span>{project.company}</span>
                </div>
                
                <h4 className="text-[30px] font-bold text-white tracking-tight leading-tight">
                  {project.title}
                </h4>

                <div className="flex flex-row justify-center gap-2 md:gap-4 pt-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 md:flex-none px-4 md:px-8 h-12 md:h-14 bg-white/5 hover:bg-white/10 text-white text-[10px] md:text-sm font-bold uppercase tracking-widest rounded-full border border-white/10 transition-all whitespace-nowrap"
                  >
                    Case Study
                  </button>
                  <button className="flex-1 md:flex-none px-4 md:px-8 h-12 md:h-14 bg-transparent hover:bg-white/5 text-white text-[10px] md:text-sm font-bold uppercase tracking-widest rounded-full border border-white/10 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                    Visit <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Project Description */}
              <div className="max-w-3xl mb-12 mx-auto text-center">
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Project Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-6 border-y border-white/5">
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Time</span>
                  <p className="text-gray-300 text-base sm:text-lg">{project.time}</p>
                </div>
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Role</span>
                  <p className="text-gray-300 text-base sm:text-lg">{project.role}</p>
                </div>
                {project.featuredOn && (
                  <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Featured On</span>
                    <p className="text-gray-300 text-base sm:text-lg">{project.featuredOn}</p>
                  </div>
                )}
              </div>

              {/* Project Image */}
              <div 
                className="mt-3 relative group cursor-pointer overflow-hidden rounded-2xl aspect-video bg-gray-900 border border-white/5"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto"
          >
            {/* Modal Header / Controls */}
            <div className="sticky top-0 z-[110] flex justify-between items-center px-6 md:px-12 py-6 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Case Study</span>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/10"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
              {/* Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
                <div>
                  <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Role</span>
                    <p className="text-white text-sm font-medium">{selectedProject.role}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Timeline</span>
                    <p className="text-white text-sm font-medium">{selectedProject.time}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Company</span>
                    <p className="text-white text-sm font-medium">{selectedProject.company}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Featured</span>
                    <p className="text-white text-sm font-medium">{selectedProject.featuredOn || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-[40px] overflow-hidden mb-32 border border-white/10"
              >
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-8 font-display">Overview</h3>
                  <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    {selectedProject.caseStudy}
                  </p>
                </div>
                <div className="space-y-12">
                  {selectedProject.challenge && (
                    <div>
                      <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">The Challenge</h4>
                      <p className="text-gray-400 leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                  )}
                  {selectedProject.solution && (
                    <div>
                      <h4 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">The Solution</h4>
                      <p className="text-gray-400 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Process Section */}
              {selectedProject.process && (
                <div className="mb-32">
                  <h3 className="text-3xl font-bold text-white mb-16 font-display text-center">Design Process</h3>
                  <div className="space-y-32">
                    {selectedProject.process.map((step, index) => (
                      <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                        <div className="flex-1 space-y-6">
                          <span className="text-6xl font-bold text-white/5 font-display">0{index + 1}</span>
                          <h4 className="text-2xl font-bold text-white">{step.title}</h4>
                          <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                        </div>
                        <div className="flex-1 aspect-square md:aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                          {step.image && (
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                              referrerPolicy="no-referrer"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {selectedProject.results && (
                <div className="bg-white/5 rounded-[40px] p-12 md:p-24 border border-white/10 mb-32">
                  <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-white mb-12 font-display">Impact & Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="p-6 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-white font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Footer CTA */}
              <div className="text-center py-24 border-t border-white/10">
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-8">Next Project</p>
                <h4 className="text-4xl md:text-6xl font-bold text-white hover:text-blue-500 transition-colors cursor-pointer mb-12">
                  AI-Powered Health Assistant
                </h4>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
