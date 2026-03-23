import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Layout, Zap, Mic, FileText, Smartphone, Globe, Home, User, Settings, Layers, MousePointer2, Image as ImageIcon, Sparkles, LogIn, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AivoryStudioCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const noiseOverlayStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-[#E8EAF0] font-sans selection:bg-[#7c3aed]/30 overflow-x-hidden uppercase-headings text-smoothing-antialiased">
      {/* NOISE OVERLAY */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.04]" 
        style={noiseOverlayStyle}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        {/* Animated Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#7c3aed] rounded-full blur-[120px] opacity-[0.08] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#a78bfa] rounded-full blur-[120px] opacity-[0.08] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl md:mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-wider text-[#a78bfa] font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full animate-ping" />
            UI Design Case Study
          </div>

          <h1 className="text-[40px] md:text-[86px] font-bold leading-[1.1] tracking-tighter text-white mb-6">
            Aivory Studio <br />
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">AI Photo Editing</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-14">
            End-to-end UI design for a web-based AI photo editing software — covering landing pages, editor interface, onboarding, and feature screens.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-8 border-t border-white/5 pt-10">
            {[
              { label: 'Role', value: 'UI Designer' },
              { label: 'Project Type', value: 'Client Project' },
              { label: 'Platform', value: 'Web (Desktop)' },
              { label: 'Scope', value: 'UI Design Only' },
              { label: 'Tool', value: 'Figma' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#a78bfa]">{item.label}</span>
                <span className="font-medium text-white text-[14px] leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">01 Overview</div>
              <h2 className="text-[32px] md:text-5xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">What is Aivory Studio?</h2>
              <p className="text-gray-400 font-light leading-relaxed text-[16px] md:text-lg">
                Aivory Studio is an AI-powered photo editing platform designed for creators, photographers, and marketing professionals. The client needed a complete, production-ready UI for a complex product — one that felt modern, clean, and powerful without overwhelming the user. I was brought in as the UI Designer to design every screen of the product from scratch.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/10 blur-3xl rounded-full group-hover:bg-[#7c3aed]/20 transition-all"></div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight font-body">Project Goal</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Transform complex AI operations into a seamless, intuitive professional workspace that competes with industry giants while maintaining a unique, modern aesthetic.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Modern UX', 'AI-First', 'Pro-Tools', 'Clean UI'].map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="px-6 md:px-12 py-24 bg-[#0F1118]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16 md:mb-20">
            <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">02 The Challenge</div>
            <h2 className="text-[32px] md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1] text-left">Problem to solve</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              {...fadeIn}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 hover:border-[#7c3aed]/30 transition-all duration-500 group text-left"
            >
              <div className="flex flex-row items-center md:flex-col md:items-start gap-5 mb-6 md:mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#7c3aed]/10 flex items-center justify-center border border-[#7c3aed]/20 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Layers className="w-6 h-6 text-[#7c3aed]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Complex feature set</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-[15px] md:text-lg">
                The product had many AI tools — Enhance, Upscale, Magic Eraser, Background Removal, Face Retouch, and more. Fitting all of this into one clean interface without clutter was the core challenge.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 hover:border-[#a78bfa]/30 transition-all duration-500 group text-left"
            >
              <div className="flex flex-row items-center md:flex-col md:items-start gap-5 mb-6 md:mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#a78bfa]/10 flex items-center justify-center border border-[#a78bfa]/20 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Professional yet approachable</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-[15px] md:text-lg">
                The product needed to feel powerful enough for professionals, but simple enough that new users could get started without any tutorial or onboarding friction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USER FLOW */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-[#050505] relative overflow-hidden">
        {/* Subtle Background Glow for Diagram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7c3aed]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-start text-left mb-16 md:mb-20">
            <div className="text-[11px] font-bold tracking-[0.3em] mb-4 text-[#a78bfa] uppercase">03 User Flow</div>
            <h2 className="text-[32px] md:text-7xl font-bold text-white mb-6 tracking-tighter max-w-4xl leading-[1.1]">
              Your workflows,<br />always in motion.
            </h2>
            <p className="text-gray-500 font-light text-[15px] md:text-lg max-w-2xl leading-relaxed">
              The core AI interaction loop — designed to flex with user decisions in real-time.
            </p>
          </div>

          <div className="relative mt-8 md:mt-12 md:min-h-[800px]">
            {/* SVG CONNECTION PATHS (Desktop) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 800" fill="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.path d="M 250 120 C 350 120, 350 250, 450 250" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
              <motion.path d="M 550 250 C 650 250, 650 120, 750 120" stroke="url(#flowGradient)" strokeWidth="2" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
              <motion.path d="M 850 120 C 950 120, 950 450, 850 450" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }} />
              <motion.path d="M 750 450 C 650 450, 650 580, 550 580" stroke="url(#flowGradient)" strokeWidth="2" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1.5 }} />
              <motion.path d="M 450 580 C 350 580, 350 450, 250 450" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="5,5" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 2 }} />
            </svg>

            {/* SVG CONNECTION PATHS (Mobile) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden" preserveAspectRatio="none" fill="none">
               <motion.path 
                d="M 60 100 Q 120 180, 250 240 T 100 450 T 250 680 T 100 950 T 250 1250" 
                stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
              />
            </svg>

            <div className="relative z-10 flex flex-col md:block gap-12 md:gap-6">
              {/* Step 1: Start */}
              <motion.div 
                {...fadeIn} 
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[50px] md:top-[60px] w-[85%] md:w-[240px] self-start"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Start</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Lands on Landing Page</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Marketing homepage — sees hero, PXGEN & social proof.</p>
                </div>
              </motion.div>

              {/* Step 2: Signs Up */}
              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[450px] md:top-[190px] w-[85%] md:w-[240px] self-end"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-[#a78bfa]/20 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4">
                    <LogIn className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span className="text-[10px] font-bold text-[#a78bfa] uppercase tracking-widest leading-none">Condition</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Signs Up / Logs In</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Split-screen auth — form on left, AI visual on right.</p>
                </div>
              </motion.div>

              {/* Step 3: Onboarding */}
              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[750px] md:top-[60px] w-[85%] md:w-[240px] self-start"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                   <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Onboarding</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Onboarding Splash</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Full-screen welcome overlay inside the editor space.</p>
                </div>
              </motion.div>

              {/* Step 4: Editor */}
              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[750px] md:top-[390px] w-[85%] md:w-[240px] self-end"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Layout className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Editor</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Enters the Editor</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Toolbar (left), Layers (right), and AI prompt bar (bottom).</p>
                </div>
              </motion.div>

              {/* Step 5: AI Tools */}
              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.8 }}
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[450px] md:top-[520px] w-[85%] md:w-[240px] self-start"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-[#a78bfa]/20 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span className="text-[10px] font-bold text-[#a78bfa] uppercase tracking-widest leading-none">Core Action</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Uses AI Tools to Edit</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Choose tool, AI processes, and results appear on the canvas.</p>
                </div>
              </motion.div>

              {/* Step 6: Export */}
              <motion.div 
                {...fadeIn} 
                transition={{ delay: 1.0 }}
                whileTap={{ scale: 0.98 }}
                className="md:absolute md:left-[50px] md:top-[390px] w-[85%] md:w-[240px] self-end"
              >
                <div className="bg-[#111118]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl group hover:border-[#a78bfa]/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">End</span>
                  </div>
                  <h4 className="text-lg md:text-base font-bold text-white mb-2 tracking-tight">Exports Final Image</h4>
                  <p className="text-[13px] md:text-[12px] text-gray-400 font-light leading-relaxed">Export downloads the result and auto-saves to cloud.</p>
                </div>
              </motion.div>
            </div>

            {/* Background Dashboard Mockup (Faded) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-[4/3] bg-[#111118] border border-white/5 rounded-[2.5rem] -z-10 opacity-30 overflow-hidden hidden md:block">
              <div className="p-8 border-b border-white/5 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-red-400/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                <div className="w-3 h-3 rounded-full bg-green-400/20" />
              </div>
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-2 border-r border-white/5 p-4 space-y-4">
                  {[...Array(6)].map((_, i) => <div key={i} className="h-2 bg-white/5 rounded w-full" />)}
                </div>
                <div className="col-span-10 p-8">
                  <div className="w-full h-full bg-white/[0.02] rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16 md:mb-20">
            <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">04 Interface Modules</div>
            <h2 className="text-[32px] md:text-7xl font-bold text-white mb-6 tracking-tighter leading-[1.1] text-left">Production-Ready<br />Interface Modules</h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              { title: 'AI Enhance', desc: 'Before/after slider UI showing AI-enhanced photo quality with one click.', icon: Sparkles, image: '/images/aivory-hero-ui.png' },
              { title: 'Upscale Image', desc: 'Resolution upscaling tool UI with visual comparison of original vs upscaled output.', icon: MousePointer2, image: '/images/aivory-upscale-ui.png' },
              { title: 'Magic Eraser', desc: 'Select and erase any element — AI recreates the background behind it seamlessly.', icon: X, image: '/images/aivory-magiceraser-ui.png' },
              { title: 'Background Removal', desc: 'One-click BG removal UI with transparent checkerboard preview state.', icon: Layers, image: '/images/aivory-bgremoval-ui.png' },
              { title: 'Face Retouch', desc: '"Rebuilding Facial Details" AI processing state with loading overlay design.', icon: User, image: '/images/aivory-faceretouch-ui.png' },
              { title: 'PXGEN Generation', desc: 'Theme-based AI photo generation with prompt input, upload, and magic-in-image flow.', icon: Zap, image: '/images/aivory-pxgen-ui.png' },
              { title: 'AI Prompt Bar', desc: 'Bottom-of-canvas prompt input with image thumbnail, Select Subject & Remove BG actions.', icon: Mic, image: '/images/aivory-promptbar-ui.png' },
              { title: 'AI Tools Panel', desc: 'Slide-in left panel with tool cards, thumbnails, and scrollable feature list.', icon: Settings, image: '/images/aivory-toolspanel-ui.png' },
              { title: 'Layers Panel', desc: 'Right-side layers stack with visibility toggle, layer name, and lock icons.', icon: Settings, image: '/images/aivory-layerspanel-ui.png' },
              { title: 'New File Modal', desc: 'Frame size picker with 6 preset options and custom pixel inputs.', icon: Layout, image: '/images/aivory-newfilemodal-ui.png' },
              { title: 'Auth Flows', desc: 'Split-screen layout — AI visual on right, form on left with social OAuth.', icon: LogIn, image: '/images/aivory-authflows-ui.png' },
              { title: 'Landing Page', desc: 'Full-width hero, AI features showcase, and creators social proof.', icon: Globe, image: '/images/aivory-landingpage-ui.png' }
            ].map((feature: any, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="group flex flex-col md:flex-row bg-[#080808] border border-white/5 rounded-[14px] overflow-hidden hover:border-[#a78bfa]/30 transition-all duration-500 min-h-[400px]"
              >
                <div className="w-full md:w-[60%] aspect-video md:aspect-auto overflow-hidden bg-black">
                  <div className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {feature.image ? (
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover object-top scale-[1.02] group-hover:scale-[1.05] transition-transform duration-700"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full w-full bg-[#080808]">
                        <ImageIcon className="w-8 h-8 text-gray-800 mb-2" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">UI Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center text-left">
                  <div className="flex flex-row items-center md:flex-col md:items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#a78bfa]/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <h4 className="text-[18px] md:text-[22px] font-bold text-white tracking-tight">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 font-light text-[15px] md:text-[18px] leading-[1.6]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOTYPE SECTION */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16">
            <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">Interactive Experience</div>
            <h2 className="text-[32px] md:text-7xl font-bold text-white mb-6 tracking-tighter text-left">Live Prototype</h2>
          </div>

          <motion.div 
            {...fadeIn}
            className="relative group rounded-[2rem] overflow-hidden bg-[#050505] border border-white/10 p-4 md:p-8"
          >
            <div className="aspect-[16/9] rounded-[1.5rem] overflow-hidden bg-[#080808] relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              <img 
                src="/images/aivory-hero-ui.png" 
                alt="Prototype Mockup" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <a 
                  href="https://www.figma.com/proto/nB5i7h59v2G3bN6OsqM5Vb/Aivory-Studio?page-id=0%3A1&node-id=1-2&viewport=216%2C382%2C0.1&scaling=min-zoom&starting-point-node-id=1%3A2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-[#7c3aed] text-white font-bold text-base hover:bg-[#a78bfa] transition-all flex items-center gap-3 shadow-2xl shadow-purple-500/20"
                >
                  View Prototype <ArrowLeft className="rotate-180 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 px-2 md:px-6">
              <div className="max-w-2xl flex flex-col justify-center text-left">
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-6">Experience the Workflow</h4>
                <p className="text-gray-400 text-lg md:text-2xl font-light leading-[1.6]">
                  Interact with the high-fidelity screens, explore the tool panels, and see the AI processing states in action through the official Figma prototype.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-48">
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-[#a78bfa] mb-1">12+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Screens</span>
                </div>
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-[#a78bfa] mb-1">40+</span>
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Hotspots</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="px-6 md:px-12 py-24 bg-[#0F1118]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16 md:mb-20">
            <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">05 Design Decisions</div>
            <h2 className="text-[32px] md:text-6xl font-bold text-white mb-6 tracking-tighter text-left leading-[1.1]">Strategic UI Choices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Dark-first theme', desc: 'A near-black canvas keeps the focus on the user\'s image without competing with the content being edited.' },
              { title: 'Left sidebar for tools', desc: 'Standard tool placement keeps the workflow familiar to users of Photoshop or Lightroom.' },
              { title: 'AI Tool panel slide-in', desc: 'AI features in a collapsible panel — accessible without permanently consuming screen space.' },
              { title: 'Prompt bar at bottom', desc: 'AI prompt bar at the bottom of canvas — inspired by chat interfaces, feels natural for generative AI.' },
              { title: 'Purple CTA system', desc: 'Consistent purple CTAs across Sign Up, Get Started, and Pro version for strong brand identity.' },
              { title: 'Layers panel on right', desc: 'Right-side layers stack — standard placement, immediately recognizable to the target audience.' }
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="p-8 rounded-[14px] bg-[#0a0a0a] border border-white/10 hover:border-[#a78bfa]/20 transition-all group text-left">
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#a78bfa] transition-colors">{item.title}</h4>
                <p className="text-gray-400 font-light text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & STACK */}
      <section className="px-6 md:px-12 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <div className="text-[11px] font-bold tracking-[0.2em] mb-8 text-[#a78bfa] uppercase">Tools & Stack</div>
          <div className="flex flex-wrap justify-start gap-4">
            {['Figma', 'Auto Layout', 'Component system', 'Dark theme', 'Desktop web', 'UI Design only'].map(tool => (
              <span key={tool} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/30 hover:text-[#a78bfa] transition-all cursor-default uppercase tracking-widest text-[10px]">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="px-6 md:px-12 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="md:col-span-2 text-left">
              <div className="text-[11px] font-bold tracking-[0.2em] mb-4 text-[#a78bfa] uppercase">06 Outcome</div>
              <h2 className="text-[32px] md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.1] text-left">Handoff-ready ecosystem</h2>
              <p className="text-gray-400 font-light leading-relaxed text-[16px] md:text-xl max-w-2xl mb-12">
                This project delivered a comprehensive design system and a suite of high-fidelity screens, ready for the development team to implement the next generation of AI photo editing.
              </p>
              
              <div className="p-8 border-l-2 border-[#7c3aed] bg-[#7c3aed]/5 rounded-r-2xl text-left">
                <p className="text-gray-400 font-light leading-relaxed text-[16px] md:text-lg">
                  "This project was a UI-only engagement. I did not work on wireframes, user research, or development. My deliverable was a complete, handoff-ready UI covering every screen and feature of the Aivory Studio product."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Screens designed', val: '9+' },
                { label: 'Features with UI', val: '12+' },
                { label: 'Design System', val: '1' }
              ].map(stat => (
                <div key={stat.label} className="bg-[#0a0a0a] border border-white/10 rounded-[14px] p-8 flex flex-col justify-center items-start text-left">
                  <span className="text-[40px] md:text-[56px] font-bold text-[#a78bfa] leading-none mb-2">{stat.val}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 md:px-12 py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          <Link to="/" className="group flex items-center gap-4 self-start md:self-auto">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors">Back to Portfolio</span>
          </Link>
          
          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">Next Case Study</span>
            <Link to="/projects/balance-nutrition" className="text-xl md:text-2xl font-bold text-white hover:text-[#7c3aed] transition-colors tracking-tighter">Balance Nutrition &rarr;</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AivoryStudioCaseStudy;
