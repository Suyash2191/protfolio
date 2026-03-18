import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Award, CheckCircle2, Target, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BalanceNutritionCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest">Back to Portfolio</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">
              <span>[001]</span>
              <span className="w-12 h-px bg-blue-500/30"></span>
              <span>Case Study</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl">
              Balance Nutrition <br />
              <span className="text-white/40 italic font-light">Product Design</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              A complete digital transformation for a leading weight loss platform, introducing Clara AI to personalize the nutrition journey for thousands of users.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-white/5">
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Role</span>
                <p className="text-sm md:text-base text-gray-300 uppercase">Lead Product Designer</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Time</span>
                <p className="text-sm md:text-base text-gray-300 uppercase">2023 — Present</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Context</span>
                <p className="text-sm md:text-base text-gray-300 uppercase">Mobile App & Web</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Featured</span>
                <p className="text-sm md:text-base text-gray-300 uppercase">Wix Studio, Dribbble</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-gray-900 border border-white/5"
        >
          <img 
            src="/images/clara.png" 
            alt="Balance Nutrition Interface" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white text-black rounded-[3rem] md:rounded-[5rem] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">01. The Challenge</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Bridging the gap in <span className="italic">personal nutrition.</span>
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Despite having access to countless diet plans, users struggled to maintain consistency due to a lack of personalization and real-time guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Generic Plans", 
                  desc: "Diet plans that don't match the user's body type or specific food preferences.",
                  icon: <AlertCircle className="w-5 h-5 text-red-500" />
                },
                { 
                  title: "Unreliable Info", 
                  desc: "Confusion caused by conflicting and unverified nutrition information online.",
                  icon: <AlertCircle className="w-5 h-5 text-red-500" />
                },
                { 
                  title: "Lack of Motivation", 
                  desc: "Difficulty staying motivated without human or intelligent expert intervention.",
                  icon: <AlertCircle className="w-5 h-5 text-red-500" />
                },
                { 
                  title: "Static Tracking", 
                  desc: "Existing tracking tools felt manual, tedious, and lacked actionable feedback.",
                  icon: <AlertCircle className="w-5 h-5 text-red-500" />
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col gap-4">
                  {item.icon}
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">02. The Vision</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight transition-all">
                Defining <span className="text-blue-500">Success.</span>
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light max-w-xl">
                Our objective was clear: transform the platform from a directory of static plans into a dynamic, AI-driven health companion.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  "Personalized diet plans that adapt based on user feedback.",
                  "Real-time access to certified health mentors.",
                  "Intelligent tracking to ensure a 5-7kg weight loss in 3 months.",
                  "A unified design system for seamless web and mobile experiences."
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-300 font-light">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12 flex items-center justify-center">
                <Target className="w-48 h-48 text-blue-500/20 absolute" />
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-2 border-dashed border-blue-500/30 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">03. The Design System</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
                Consistency <br />at Scale
              </h3>
            </div>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light bg-white/5 p-6 rounded-2xl border border-white/5">
              A robust design system ensuring a trustworthy, clean, and user-friendly experience across all touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[4/5] bg-white text-black p-12 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden relative">
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Typography</span>
                <h4 className="text-4xl font-bold font-serif italic">Display Serif</h4>
                <p className="text-gray-500">For elegance and credibility.</p>
              </div>
              <div className="text-9xl font-bold opacity-[0.03] absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700">Aa</div>
            </div>
            
            <div className="aspect-[4/5] bg-blue-600 text-white p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Color Palette</span>
                <h4 className="text-4xl font-bold font-mono">Trust Blue</h4>
                <p className="text-white/70">Reflecting reliability and health.</p>
              </div>
              <div className="w-64 h-64 bg-white/10 rounded-full absolute -right-24 -bottom-24 blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            </div>

            <div className="aspect-[4/5] bg-[#151515] text-white p-12 rounded-[2.5rem] border border-white/5 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Components</span>
                <h4 className="text-4xl font-bold uppercase tracking-tighter">Modular <br />Grid</h4>
                <p className="text-gray-400">Scalable across all resolutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Conclusion Section */}
      <section className="py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Designed for <br />
            <span className="text-white/40 font-light italic uppercase">Real Impact.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Through the introduction of Clara AI and a complete UI overhaul, Balance Nutrition transitioned into a market leader in personalized health technology.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => navigate('/')}
              className="px-10 py-5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-widest font-mono">
          &copy; 2024 Suyash Shirsat &bull; All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default BalanceNutritionCaseStudy;
