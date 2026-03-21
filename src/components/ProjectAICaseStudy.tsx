import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X, Search, BarChart2, MessageSquare, Clock, Shield, Users, Layout, Zap, Mic, FileText, Smartphone, Globe, Home, Github, Trello } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectAICaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Noise overlay style to avoid JSX escape issues
  const noiseOverlayStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-[#E8EAF0] font-sans selection:bg-[#6C63FF]/30 overflow-x-hidden">
      {/* NOISE OVERLAY */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1000] opacity-[0.04]" 
        style={noiseOverlayStyle}
      />

      {/* Hero Section with AI Orb */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">

        {/* Animated AI Orb (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.7, 
            scale: [1, 1.1, 1],
            y: [0, -40, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-[-15%] md:right-[-10%] z-10 w-[400px] md:w-[600px] h-auto pointer-events-none"
        >
          <img 
            src="/images/cs-orb-animated.png" 
            alt="AI Core" 
            className="w-full h-auto rounded-full" 
            style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.2)', mixBlendMode: 'screen' }}
          />
        </motion.div>

        {/* Animated Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#6C63FF] rounded-full blur-[120px] opacity-[0.08] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FF6584] rounded-full blur-[120px] opacity-[0.08] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl md:mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-wider text-[#6C63FF] font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full animate-ping" />
            UX / Product Design Case Study
          </div>

          <h1 className="text-[48px] md:text-[96px] font-bold leading-[1.15] tracking-tighter text-white mb-6">
            AI-Powered<br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">Team Command</span><br />
            Center
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-14">
            A complete product design journey — intelligent project management platform where AI handles your entire company pipeline. Tasks, teams, deadlines, attendance, and communication.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-8 border-t border-[#1E2030] pt-10">
            {[
              { label: 'Designer', value: 'Suyash Shirsat' },
              { label: 'Role', value: 'Senior and Lead\nProduct Designer' },
              { label: 'Domain', value: 'B2B SaaS · AI' },
              { label: 'Duration', value: '2025 to present' },
              { label: 'Platform', value: 'Web · Desktop' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase" style={{ color: '#7ecfef' }}>{item.label}</span>
                <span className="font-medium text-white text-[14px] leading-snug whitespace-pre-line">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>




      {/* 01 - PROBLEM STATEMENT */}
      <section id="problem" className="px-6 md:px-12 py-24 border-t border-[#1E2030]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

            {/* Row 1: Main Problem (8) + 40% Stat (4) = 12 */}
            {/* Widget 1: Main Problem Intro */}
            <motion.div 
              {...fadeIn}
              className="md:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#6C63FF]/10 blur-[100px] -z-10 group-hover:bg-[#6C63FF]/20 transition-all duration-700"></div>
              <h2 className="text-[28px] md:text-[52px] font-bold text-white mb-5 leading-[1.1] tracking-tighter relative z-10">
                Teams are drowning in <br /><span className="text-gray-500">management overhead</span>
              </h2>
              <p className="text-[14px] md:text-[17px] font-light text-gray-400 max-w-2xl leading-[1.7] tracking-tight relative z-10">
                Modern companies juggle 6–12 disconnected tools for project management, communication, attendance, and reporting. Managers spend 40% of their time on coordination — not actual work.
              </p>
            </motion.div>

            {/* Widget 2: 40% Stat */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500 min-h-[300px]"
            >
              <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#6C63FF" strokeWidth="6" 
                    strokeDasharray="282.7" strokeDashoffset="282.7" strokeLinecap="round"
                    whileInView={{ strokeDashoffset: 282.7 * (1 - 0.4) }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="drop-shadow-[0_0_8px_#6C63FF]"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white tracking-tighter">40%</span>
                </div>
              </div>
              <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest leading-tight">Time lost to <br />coordination</p>
            </motion.div>

            {/* Row 2: Tool Frag (4) + AI Not Integrated (5, row-span-2) + 6-12 Stat (3) = 12 */}
            {/* Widget 3: Tool Fragmentation */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6 hover:border-[#6C63FF]/30 transition-all duration-500 min-h-[400px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center border border-[#6C63FF]/20">
                  <Layout className="w-5 h-5 text-[#6C63FF]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Tool fragmentation</h3>
              </div>
              <p className="text-[14px] text-gray-400 leading-relaxed font-light">
                Teams use Jira, Slack, Notion, HR tools, and spreadsheets separately. Context is lost between every switch, creating friction and errors.
              </p>
              <div className="mt-auto grid grid-cols-4 gap-3 md:gap-4 pb-2">
                {[
                  { name: 'Monday', src: '/images/new-monday-logo.png' },
                  { name: 'Excel', src: '/images/new-excel-logo.png' },
                  { name: 'Linear', src: '/images/new-linear-logo.png' },
                  { name: 'GitHub', src: '/images/github-logo.svg' },
                  { name: 'Notion', src: '/images/new-notion-logo.png' },
                  { name: 'Google Drive', src: '/images/new-gdrive-logo.png' },
                  { name: 'ClickUp', src: '/images/new-clickup-logo.png' },
                  { name: 'Trello', src: '/images/new-trello-logo.png' }
                ].map((tool, i) => (
                  <div key={i} className="aspect-square rounded-[12px] bg-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden group hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/5 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={tool.src} 
                      alt={tool.name} 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10 group-hover:scale-110 group-hover:brightness-125 transition-all duration-300" 
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Widget 4: AI Not Integrated (spans rows 2 & 3 in middle) */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="md:col-span-5 md:row-span-2 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:border-[#FF6584]/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6584]/10 blur-[100px] -z-10 group-hover:bg-[#FF6584]/20 transition-all duration-700"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#FF6584]/10 flex items-center justify-center border border-[#FF6584]/20">
                  <Zap className="w-5 h-5 text-[#FF6584]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">AI not integrated</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed font-light mb-12">
                Existing PM tools bolt AI on top. It doesn’t understand your team structure, project context, or past decisions — making it useless in practice.
              </p>
              
              <div className="relative flex-1 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6584] to-transparent opacity-20 blur-3xl rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border border-[#FF6584]/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-10 border border-[#FF6584]/50 rounded-full animate-reverse-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#0a0a0a] border border-[#FF6584]/50 rounded-2xl flex items-center justify-center rotate-45 shadow-[0_0_30_rgba(255,101,132,0.3)]">
                      <Zap className="w-8 h-8 text-[#FF6584] -rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget 5: 6-12 Tools Stat */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-[#FF6584]/30 transition-all duration-500"
            >
              <div className="text-5xl font-black text-[#FF6584] tracking-tighter">6-12</div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 leading-tight">Tools managed <br />simultaneously</p>
            </motion.div>

            {/* Row 3: 2.5h Stat (3) + [AI cont. (5)] + No Voice (4) = 12 */}
            {/* Widget 6: Context Loss Stat */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-[#43E97B]/30 transition-all duration-500"
            >
              <div className="text-5xl font-black text-[#43E97B] tracking-tighter">2.5h</div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 leading-tight">Lost daily to <br />context switching</p>
            </motion.div>

            {/* Widget 7: No Voice Interface */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="md:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6 hover:border-[#43E97B]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#43E97B]/10 flex items-center justify-center border border-[#43E97B]/20">
                  <Mic className="w-5 h-5 text-[#43E97B]" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">No voice interface</h3>
              </div>
              <p className="text-[14px] text-gray-400 leading-relaxed font-light">
                Managers can’t query their team’s status, deadlines, or blockers hands-free. Everything requires clicking through dashboards and menus.
              </p>
              <div className="h-12 flex items-center gap-1.5 mt-auto">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [12, 32, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1.5 bg-[#43E97B]/40 rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* Row 4: 68% Stat — Full Width (12) */}
            {/* Widget 8: Unified Dashboard Stat */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.7 }}
              className="md:col-span-12 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group hover:border-[#F7971E]/30 transition-all duration-500"
            >
              <div className="absolute bottom-[-20%] right-[-5%] w-64 h-64 bg-[#F7971E]/10 blur-3xl rounded-full group-hover:bg-[#F7971E]/20 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="text-7xl md:text-8xl font-black text-[#F7971E] tracking-tighter mb-2">68%</div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 leading-tight">Managers want unified AI dashboards</p>
              </div>
              <p className="text-[14px] md:text-[16px] text-gray-500 font-light max-w-md leading-relaxed relative z-10 mt-6 md:mt-0">
                Across 180 surveyed managers, the overwhelming demand is for a single intelligent platform that brings tasks, attendance, communication, and AI insights together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELEVANT IMAGE CLIP - CHARTS */}
      <section className="px-6 md:px-12 py-12">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto rounded-[8px] overflow-hidden border border-[#1E2030] shadow-xl bg-[#0F1118]">
           <img src="/images/cs-charts-detailed.png" alt="Detailed Analytics" className="w-full h-auto opacity-90 transition-opacity hover:opacity-100 duration-700" />
        </motion.div>
      </section>

      {/* 02 - RESEARCH */}
      <section className="relative px-6 md:px-12 py-24 bg-[#0F1118]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            02 — Research
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
            What teams actually<br />need from their tools
          </h2>
          <p className="font-light text-[14px] md:text-[17px] text-gray-400 max-w-2xl mb-14 leading-[1.7] tracking-tight">
            We conducted 24 in-depth user interviews with CTOs, Team Leads, HR Managers, and Developers across tech companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

            {/* Row 1: Arjun (tall, left) + Priya (right) */}
            {/* Widget 1: Arjun Persona (col-span-5 row-span-2 — tall left pillar) */}
            <motion.div 
              {...fadeIn}
              className="md:col-span-5 md:row-span-2 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#6C63FF]/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center border border-[#6C63FF]/20 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-white tracking-tight">Arjun, 34</h4>
                  <p className="text-[10px] font-medium text-[#6C63FF] uppercase tracking-widest leading-none mt-1">Engineering manager</p>
                </div>
              </div>
              
              <blockquote className="text-[15px] md:text-[17px] font-light text-gray-300 leading-relaxed italic mb-10 relative z-10">
                "I need to know who's blocked, what's behind, and what's shipping — without opening 4 different tools every morning."
              </blockquote>

              <div className="mt-auto relative z-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#6C63FF]"></div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Core pain point</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Cross-tool visibility is the biggest bottleneck in the current workflow.</p>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: Priya Persona (col-span-7 — wide top right) */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-[#FF6584]/30 transition-all duration-500"
            >
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6584]/10 flex items-center justify-center border border-[#FF6584]/20">
                    <Layout className="w-5 h-5 text-[#FF6584]" />
                  </div>
                  <div>
                    <h4 className="text-[15px] md:text-[17px] font-bold text-white tracking-tight">Priya, 28</h4>
                    <p className="text-[10px] font-medium text-[#FF6584] uppercase tracking-widest leading-none mt-1">Design team lead</p>
                  </div>
                </div>
                <blockquote className="text-[14px] md:text-[15px] text-gray-300 font-light leading-relaxed italic">
                  "Sharing Figma links, feedback, and file versions across chat and email wastes hours. I need a central place my AI can access everything."
                </blockquote>
              </div>
              <div className="w-full md:w-36 aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6584]/10 to-transparent"></div>
                <div className="relative text-[#FF6584]/40 group-hover:text-[#FF6584]/60 transition-colors font-black text-4xl italic px-4 text-center leading-none">FIGMA DATA</div>
              </div>
            </motion.div>

            {/* Widget 3: Rohan Persona (col-span-7 — wide bottom right, fills Arjun's second row) */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col group hover:border-[#43E97B]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#43E97B]/10 flex items-center justify-center border border-[#43E97B]/20">
                  <Zap className="w-5 h-5 text-[#43E97B]" />
                </div>
                <div>
                  <h4 className="text-[15px] md:text-[17px] font-bold text-white tracking-tight">Rohan, 26</h4>
                  <p className="text-[10px] font-medium text-[#43E97B] uppercase tracking-widest leading-none mt-1">Backend developer</p>
                </div>
              </div>
              <blockquote className="text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed italic mb-6">
                "When I report a bug or code issue, it takes 3 days to reach the right person. I want to just describe it to an AI and have it routed instantly."
              </blockquote>
              <div className="mt-auto p-3 rounded-xl bg-[#43E97B]/5 border border-[#43E97B]/10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#43E97B] animate-pulse"></div>
                <span className="text-[10px] font-bold text-[#43E97B] uppercase tracking-widest">Intelligent Routing Required</span>
              </div>
            </motion.div>

            {/* Row 3: Survey Data (col-span-4) + Key Insights (col-span-8) */}
            {/* Widget 4: Survey Data */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group hover:border-[#F7971E]/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#F7971E]/10 flex items-center justify-center border border-[#F7971E]/20">
                  <BarChart2 className="w-5 h-5 text-[#F7971E]" />
                </div>
                <span className="text-[10px] font-bold text-[#F7971E] uppercase tracking-widest">N=180</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-black text-white tracking-tighter">82%</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">History</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#F7971E]" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '82%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-black text-white tracking-tighter">91%</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Attendance</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#F7971E]" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '91%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                91% need attendance/leave visible alongside task boards. 86% want to send files directly through AI.
              </p>
            </motion.div>

            {/* Widget 5: Key Insights (col-span-8 — wide right) */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="md:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500"
            >
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#6C63FF]/10 blur-3xl rounded-full group-hover:bg-[#6C63FF]/20 transition-all duration-700"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center border border-[#6C63FF]/20">
                  <Search className="w-5 h-5 text-[#6C63FF]" />
                </div>
                <h4 className="text-[15px] md:text-[17px] font-bold text-white tracking-tight leading-none">Qualitative Insights</h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[12px] md:text-[13px] text-gray-400 font-light">
                {[
                  'Real-time status without micromanaging',
                  'Report bugs through one interface',
                  'HR + Projects in same view',
                  'Voice queries > Dashboards',
                  'AI must understand Figma/GitHub links',
                  'Proactive risk surfacing'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/li">
                    <Check className="w-4 h-4 text-[#6C63FF] flex-shrink-0 mt-0.5 group-hover/li:scale-125 transition-transform" />
                    <span className="group-hover/li:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 03 - COMPETITIVE */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            03 — Competitive analysis
          </div>
          <h2 className="text-[30px] md:text-[56px] font-bold text-white mb-10 leading-[1.05] tracking-tighter">Where existing tools fall short</h2>
          
          <div className="overflow-hidden rounded-[8px] border border-[#1E2030] bg-[#0F1118]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#1E2030]">
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">Tool</th>
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">AI Assistant</th>
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">Voice</th>
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">HR + PM</th>
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">File Intel</th>
                    <th className="px-8 py-8 text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">Unified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E2030]">
                  {[
                    { name: 'Jira', ai: 'Partial', voice: '✗', hr: '✗', file: 'Basic', unified: '◐' },
                    { name: 'Notion', ai: 'Add-on', voice: '✗', hr: '✗', file: 'Basic', unified: '◐' },
                    { name: 'Monday', ai: 'Limited', voice: '✗', hr: '◐', file: '✗', unified: '✓' },
                    { name: 'Linear', ai: 'Growing', voice: '✗', hr: '✗', file: 'Code', unified: '◐' },
                    { name: 'ProjectAI', ai: 'Deep AI', voice: '✓', hr: '✓', file: 'Full', unified: '✓', isUnique: true }
                  ].map((row, i) => (
                    <tr key={i} className={`hover:bg-[#161822] transition-colors group ${row.isUnique ? 'bg-[#6C63FF]/5' : ''}`}>
                      <td className={`px-8 py-8 font-bold transition-all duration-300 ${row.isUnique ? 'text-[#6C63FF] text-xl group-hover:pl-12 tracking-tight' : 'text-white'}`}>
                        {row.isUnique ? '✦ ' : ''}{row.name}
                      </td>
                      <td className="px-8 py-8 text-sm text-[#6B7280]">{row.ai}</td>
                      <td className={`px-8 py-8 ${row.voice === '✓' ? 'text-[#43E97B]' : 'text-[#FF6584]'}`}>{row.voice}</td>
                      <td className={`px-8 py-8 ${row.hr === '✓' ? 'text-[#43E97B]' : (row.hr === '✗' ? 'text-[#FF6584]' : 'text-[#F7971E]')}`}>{row.hr}</td>
                      <td className={`px-8 py-8 ${row.file === 'Full' ? 'text-[#43E97B]' : 'text-[#6B7280]'}`}>{row.file}</td>
                      <td className={`px-8 py-8 ${row.unified === '✓' ? 'text-[#43E97B]' : 'text-[#6B7280]'}`}>{row.unified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - SUCCESS METRICS */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            04 — Success metrics
          </div>
          <h2 className="text-[30px] md:text-[56px] font-bold text-white mb-4 leading-[1.05] tracking-tighter">What success looks like</h2>
          <p className="font-light text-[14px] md:text-[17px] text-gray-400 mb-14 leading-[1.7] tracking-tight max-w-2xl">
            Clear business goals paired with measurable UX metrics to track every phase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Metric 1: Completion Rate */}
            <motion.div
              {...fadeIn}
              className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden group hover:border-[#43E97B]/30 transition-all duration-500"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#43E97B]/5 rounded-full blur-3xl group-hover:bg-[#43E97B]/15 transition-all duration-700"></div>
              {/* Decorative icon cluster */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg ${i === 4 ? 'bg-[#43E97B]' : 'bg-white/10'} border border-white/5`}></div>
                ))}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#43E97B]/10 flex items-center justify-center border border-[#43E97B]/20 mb-8">
                  <Check className="w-6 h-6 text-[#43E97B]" />
                </div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3" style={{ color: '#43E97B' }}>+35%</div>
                <p className="text-[14px] font-semibold text-white/60 tracking-wide">Completion rate</p>
                <p className="text-[12px] text-gray-500 font-light mt-1.5 leading-relaxed">Task completion across all teams post-launch</p>
              </div>
            </motion.div>

            {/* Metric 2: Time Saved */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#6C63FF]/5 rounded-full blur-3xl group-hover:bg-[#6C63FF]/15 transition-all duration-700"></div>
              {/* Decorative icon cluster */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg ${i === 0 || i === 8 ? 'bg-[#6C63FF]' : 'bg-white/10'} border border-white/5`}></div>
                ))}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center border border-[#6C63FF]/20 mb-8">
                  <Zap className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3" style={{ color: '#6C63FF' }}>8 hrs</div>
                <p className="text-[14px] font-semibold text-white/60 tracking-wide">Time saved / week</p>
                <p className="text-[12px] text-gray-500 font-light mt-1.5 leading-relaxed">Per team member, per week on average</p>
              </div>
            </motion.div>

            {/* Metric 3: Feature Adoption */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden group hover:border-[#FF6584]/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6584]/5 rounded-full blur-3xl group-hover:bg-[#FF6584]/15 transition-all duration-700"></div>
              {/* Decorative icon cluster */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg ${i === 2 || i === 6 ? 'bg-[#FF6584]' : 'bg-white/10'} border border-white/5`}></div>
                ))}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6584]/10 flex items-center justify-center border border-[#FF6584]/20 mb-8">
                  <Layout className="w-6 h-6 text-[#FF6584]" />
                </div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3" style={{ color: '#FF6584' }}>70%+</div>
                <p className="text-[14px] font-semibold text-white/60 tracking-wide">Feature adoption</p>
                <p className="text-[12px] text-gray-500 font-light mt-1.5 leading-relaxed">Key AI features used within first 2 weeks</p>
              </div>
            </motion.div>

            {/* Metric 4: User Sat Score */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden group hover:border-[#F7971E]/30 transition-all duration-500"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F7971E]/5 rounded-full blur-3xl group-hover:bg-[#F7971E]/15 transition-all duration-700"></div>
              {/* Decorative icon cluster */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 || i === 7 ? 'bg-[#F7971E]' : 'bg-white/10'} border border-white/5`}></div>
                ))}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#F7971E]/10 flex items-center justify-center border border-[#F7971E]/20 mb-8">
                  <BarChart2 className="w-6 h-6 text-[#F7971E]" />
                </div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3" style={{ color: '#F7971E' }}>4.5+</div>
                <p className="text-[14px] font-semibold text-white/60 tracking-wide">User sat score</p>
                <p className="text-[12px] text-gray-500 font-light mt-1.5 leading-relaxed">NPS and satisfaction out of 5.0 target</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 05 - SOLUTION */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#7ecfef' }}>05 — The solution</div>
            <h2 className="text-[30px] md:text-[58px] font-bold text-white mb-4 leading-[1.05] tracking-tighter">One platform that<br />thinks with your team</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

            {/* Row 1: 3 small cards */}
            {/* Card 1 - AI Voice Assistant (col-span-4) */}
            <motion.div
              {...fadeIn}
              className="md:col-span-4 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-8 overflow-hidden group hover:border-[#6C63FF]/40 transition-all duration-500 min-h-[180px] md:min-h-[220px] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6C63FF]/20 blur-[60px] rounded-full group-hover:bg-[#6C63FF]/40 transition-all duration-700"></div>
              {/* Glowing icon */}
              <div className="relative w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#6C63FF] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center shadow-lg">
                  <Mic className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-[15px] md:text-[18px] font-semibold text-white mb-1.5 tracking-tight leading-tight">AI Voice assistant</h3>
              <p className="text-[12px] md:text-[13px] text-gray-500 font-light leading-relaxed mt-auto">Ask about team history, capacity, or deadlines using voice naturally.</p>
            </motion.div>

            {/* Card 2 - Unified Dashboard (col-span-4) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-8 overflow-hidden group hover:border-[#43E97B]/40 transition-all duration-500 min-h-[180px] md:min-h-[220px] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#43E97B]/15 blur-[60px] rounded-full group-hover:bg-[#43E97B]/30 transition-all duration-700"></div>
              <div className="relative w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#43E97B] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#43E97B] to-[#2dd4bf] flex items-center justify-center shadow-lg">
                  <Layout className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-[15px] md:text-[18px] font-semibold text-white mb-1.5 tracking-tight leading-tight">Unified dashboard</h3>
              <p className="text-[12px] md:text-[13px] text-gray-500 font-light leading-relaxed mt-auto">See statuses, tasks, and leave in a single real-time company view.</p>
            </motion.div>

            {/* Card 3 - Universal File Intel (col-span-4) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-8 overflow-hidden group hover:border-[#FF6584]/40 transition-all duration-500 min-h-[180px] md:min-h-[220px] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6584]/15 blur-[60px] rounded-full group-hover:bg-[#FF6584]/30 transition-all duration-700"></div>
              <div className="relative w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FF6584] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FF6584] to-[#f43f5e] flex items-center justify-center shadow-lg">
                  <FileText className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-[15px] md:text-[18px] font-semibold text-white mb-1.5 tracking-tight leading-tight">Universal file intel</h3>
              <p className="text-[12px] md:text-[13px] text-gray-500 font-light leading-relaxed mt-auto">AI reads and understands Figma files, code bugs, and design links.</p>
            </motion.div>

            {/* Row 2: Wide card + 2 small cards */}
            {/* Card 4 - Attendance Tracker (wide, col-span-7) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-10 overflow-hidden group hover:border-[#F7971E]/40 transition-all duration-500 min-h-[180px] md:min-h-[260px] flex flex-col"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7971E]/10 blur-[80px] rounded-full group-hover:bg-[#F7971E]/25 transition-all duration-700"></div>
              {/* Large decorative glowing orb */}
              <div className="absolute bottom-6 right-8 w-32 h-32 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F7971E]/30 to-transparent blur-xl"></div>
              </div>
              <div className="relative w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#F7971E] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#F7971E] to-[#f59e0b] flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl font-bold text-white mb-2 tracking-tight leading-tight">Attendance tracker</h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 font-light leading-relaxed max-w-sm">WFH, WFO, and leave tracked automatically. Proactive HR flagging.</p>
            </motion.div>

            {/* Card 5 - Smart Task Engine (col-span-5) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="md:col-span-5 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-8 overflow-hidden group hover:border-[#6C63FF]/40 transition-all duration-500 min-h-[180px] md:min-h-[260px] flex flex-col"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#6C63FF]/15 blur-[60px] rounded-full group-hover:bg-[#6C63FF]/30 transition-all duration-700"></div>
              <div className="relative w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#6C63FF] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8B5CF6] flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-[16px] md:text-[20px] font-bold text-white mb-2 tracking-tight leading-tight">Smart task engine</h3>
              <p className="text-[12px] md:text-[13px] text-gray-500 font-light leading-relaxed">Assigned based on capacity, velocity, and individual skill sets.</p>
            </motion.div>

            {/* Card 6 - Team Chat + Context (full width) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="md:col-span-12 relative bg-[#111118] border border-white/8 rounded-[2rem] p-5 md:p-12 overflow-hidden group hover:border-[#43E97B]/40 transition-all duration-500 flex flex-col md:flex-row items-center md:gap-10 gap-4"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#43E97B]/10 blur-[100px] rounded-full group-hover:bg-[#43E97B]/20 transition-all duration-700"></div>
              {/* Integration glow bubbles */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-4">
                {['#43E97B', '#6C63FF', '#FF6584', '#F7971E'].map((col, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"
                    style={{ background: `${col}20`, boxShadow: `0 0 20px ${col}30` }}
                  >
                    <div className="w-5 h-5 rounded-full" style={{ background: col, opacity: 0.8 }}></div>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <div className="relative w-10 h-10 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#43E97B] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#43E97B] to-[#2dd4bf] flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-[16px] md:text-3xl font-bold text-white mb-2 tracking-tight leading-tight">Team chat + context</h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed max-w-md">@AI participant to summarize threads and create tasks inline.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 06 - USER FLOW */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            06 — User flow
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-16 leading-[1.05] tracking-tighter">The core AI interaction loop</h2>

          {/* Node diagram */}
          <div className="relative">
            {/* Dotted background grid */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, #6C63FF 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            {/* Mobile: vertical node flow diagram */}
            <div className="flex flex-col md:hidden">
              {[
                { icon: Shield, name: 'Login', desc: 'SSO or email login', col: '#6C63FF', tag: 'Auth', num: '01' },
                { icon: Zap, name: 'AI Briefing', desc: 'Morning team summary', col: '#F7971E', tag: 'Automated', num: '02' },
                { icon: Mic, name: 'Voice/Chat', desc: 'Ask naturally', col: '#43E97B', tag: 'Input', num: '03' },
                { icon: FileText, name: 'Send Files', desc: 'Attach Figma, code', col: '#FF6584', tag: 'Context', num: '04' },
                { icon: Zap, name: 'AI Action', desc: 'Tasks created', col: '#6C63FF', tag: 'Processing', num: '05' },
                { icon: Layout, name: 'Dashboard', desc: 'Review real-time', col: '#43E97B', tag: 'Output', num: '06' },
              ].map((step, i, arr) => {
                const Icon = step.icon;
                const isLast = i === arr.length - 1;
                return (
                  <div key={i} className="flex gap-4">
                    {/* Left: step line + circle */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        {...fadeIn}
                        transition={{ delay: i * 0.1 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                        style={{ background: `${step.col}20`, border: `1.5px solid ${step.col}60`, boxShadow: `0 0 16px ${step.col}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.col }} />
                      </motion.div>
                      {!isLast && (
                        <div className="w-px flex-1 my-1" style={{ borderLeft: '2px dashed rgba(255,255,255,0.08)', minHeight: '28px' }}></div>
                      )}
                    </div>

                    {/* Right: card */}
                    <motion.div
                      {...fadeIn}
                      transition={{ delay: i * 0.1 + 0.05 }}
                      className={`flex-1 bg-[#111118] border rounded-[1.5rem] p-4 ${isLast ? 'mb-0' : 'mb-2'}`}
                      style={{ borderColor: `${step.col}30` }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-[13px] font-bold text-white tracking-tight">{step.name}</div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${step.col}15`, color: step.col }}>{step.tag}</span>
                      </div>
                      <div className="text-[11px] text-gray-500 font-light">{step.desc}</div>
                      <div className="text-[10px] text-white/20 font-bold mt-2 tracking-widest">{step.num}</div>
                    </motion.div>
                  </div>
                );
              })}
            </div>


            {/* Desktop: node diagram */}
            <div className="hidden md:block relative min-h-[600px]">

              {/* Central node: AI Briefing (top center) */}
              <motion.div {...fadeIn} className="absolute left-1/2 top-0 -translate-x-1/2 w-[260px]">
                <div className="bg-[#111118] border border-[#6C63FF]/30 rounded-[1.5rem] p-5 shadow-[0_0_30px_rgba(108,99,255,0.15)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse"></div>
                    <span className="text-[11px] font-bold text-[#6C63FF] uppercase tracking-widest">Start</span>
                  </div>
                  <div className="text-[13px] font-semibold text-white mb-1">Login</div>
                  <div className="text-[11px] text-gray-500">SSO or email login</div>
                  <div className="flex gap-1.5 mt-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E2030] text-gray-400 border border-white/5">SSO</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E2030] text-gray-400 border border-white/5">Email</span>
                  </div>
                </div>
              </motion.div>

              {/* Connector: vertical down from Login */}
              <div className="absolute left-1/2 top-[120px] -translate-x-1/2 w-px h-12 border-l-2 border-dashed border-[#6C63FF]/30"></div>

              {/* AI Briefing - center */}
              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="absolute left-1/2 top-[170px] -translate-x-1/2 w-[280px]">
                <div className="bg-[#111118] border border-white/10 rounded-[1.5rem] p-5">
                  <div className="text-[13px] font-semibold text-white mb-1">AI Briefing</div>
                  <div className="text-[11px] text-gray-500 mb-3">Morning team summary</div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F7971E]/15 text-[#F7971E] border border-[#F7971E]/20">Automated</span>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-[#1E2030] border border-white/10 -ml-1.5 overflow-hidden flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full" style={{ background: ['#6C63FF','#43E97B','#FF6584'][i] }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Horizontal connectors */}
              <div className="absolute left-[calc(50%-140px)] top-[230px] w-[120px] h-px border-t-2 border-dashed border-white/10 -translate-x-full flex items-center justify-end">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF]"></div>
              </div>
              <div className="absolute left-[calc(50%+130px)] top-[230px] w-[100px] h-px border-t-2 border-dashed border-white/10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#43E97B]"></div>
              </div>

              {/* Left branch: Voice/Chat */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="absolute left-[6%] top-[160px] w-[220px]">
                <div className="bg-[#111118] border border-white/10 rounded-[1.5rem] p-5">
                  <div className="text-[13px] font-semibold text-white mb-1">Voice/Chat</div>
                  <div className="text-[11px] text-gray-500 mb-3">Ask naturally</div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#43E97B]/15 text-[#43E97B] border border-[#43E97B]/20">Input</span>
                  </div>
                </div>
              </motion.div>

              {/* Left lower branch: Send Files */}
              <div className="absolute left-[calc(6%+110px)] top-[290px] w-px h-[100px] border-l-2 border-dashed border-white/10"></div>
              <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="absolute left-[6%] top-[380px] w-[220px]">
                <div className="bg-[#111118] border border-white/10 rounded-[1.5rem] p-5">
                  <div className="text-[13px] font-semibold text-white mb-1">Send Files</div>
                  <div className="text-[11px] text-gray-500 mb-3">Attach Figma, code</div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6584]/15 text-[#FF6584] border border-[#FF6584]/20">Context</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E2030] text-gray-400 border border-white/5">Figma</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1E2030] text-gray-400 border border-white/5">Code</span>
                  </div>
                </div>
              </motion.div>

              {/* Right branch: Assigned Roles label */}
              <div className="absolute right-[6%] top-[260px] w-[210px]">
                <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-widest mb-3">Assigned Roles</div>
                
                {/* AI Action */}
                <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-[#111118] border border-white/10 rounded-[1.5rem] p-5 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#6C63FF]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white leading-none">AI Action</div>
                      <div className="text-[11px] text-gray-500 leading-none mt-0.5">Tasks created</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#6C63FF]/15 text-[#6C63FF] border border-[#6C63FF]/20">Processing</span>
                  </div>
                </motion.div>

                {/* Dashboard */}
                <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="bg-[#111118] border border-[#43E97B]/30 rounded-[1.5rem] p-5 shadow-[0_0_20px_rgba(67,233,123,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#43E97B]/20 border border-[#43E97B]/30 flex items-center justify-center">
                      <Layout className="w-4 h-4 text-[#43E97B]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white leading-none">Dashboard</div>
                      <div className="text-[11px] text-gray-500 leading-none mt-0.5">Review real-time</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#43E97B]/15 text-[#43E97B] border border-[#43E97B]/20">Output</span>
                  </div>
                </motion.div>
              </div>

              {/* Right connector from AI Briefing */}
              <div className="absolute right-[calc(6%+210px)] top-[310px] w-[80px] h-px border-t-2 border-dashed border-white/10"></div>

              {/* Bottom center connector */}
              <div className="absolute left-1/2 top-[310px] -translate-x-1/2 w-px h-14 border-l-2 border-dashed border-white/10"></div>
            </div>
          </div>
        </div>
      </section>


      {/* 07 - UI DESIGN SHOWCASE */}
      <section className="px-6 md:px-12 py-32 border-t border-[#1E2030]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            07 — UI design
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-16 leading-[1.05] tracking-tighter">Visual Showcase</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="md:col-span-2 rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-ai-assistant-full.png" alt="AI Assistant Full Dashboard" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-ai-assistant-orb.png" alt="AI Assistant Interface" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-ai-orb-center.png" alt="AI Assistant Orb" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-4.png" alt="Board view dark theme" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-5.png" alt="Problem analysis detail" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-6.png" alt="Data visualization charts" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-7.png" alt="Dashboard context view" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.7 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-8.png" alt="Project overview layout" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 - DESIGN SYSTEM */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            08 — Design system
          </div>
          <h2 className="text-[36px] md:text-[80px] font-bold text-white mb-4 leading-[1.05] tracking-tighter">Density &amp; Clarity</h2>
          <p className="font-light text-[16px] md:text-[20px] text-gray-400 max-w-2xl mb-16 leading-[1.6] tracking-tight">
            A dark, data-dense visual system designed for long work sessions. High contrast, calm palette, and AI-first interaction patterns.
          </p>

          {/* Row 1: 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* Card 1 - Data density */}
            <motion.div {...fadeIn} className="bg-[#111118] border border-white/8 rounded-[2rem] overflow-hidden group hover:border-[#6C63FF]/30 transition-all duration-500">
              {/* Visual preview area */}
              <div className="relative h-52 md:h-64 bg-[#0d0d14] overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 to-transparent"></div>
                {/* Dashboard data density mockup */}
                <div className="absolute top-4 left-4 right-4 bottom-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#43E97B]"></div>
                    <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                  </div>
                  {[80, 55, 90, 40, 70].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-12 h-1.5 bg-white/10 rounded-full flex-shrink-0"></div>
                      <div className="h-1.5 rounded-full bg-[#6C63FF]/40 transition-all duration-700 group-hover:bg-[#6C63FF]/70" style={{ width: `${w}%` }}></div>
                      <div className="w-6 h-1.5 bg-white/10 rounded-full flex-shrink-0 ml-auto"></div>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-2">
                    {['Tasks', 'HR', 'Voice', 'Files'].map((tag, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-2 tracking-tight">Data density</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">Show maximum information without overwhelming user.</p>
              </div>
            </motion.div>

            {/* Card 2 - AI-first UI */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-[#111118] border border-white/8 rounded-[2rem] overflow-hidden group hover:border-[#43E97B]/30 transition-all duration-500">
              {/* Visual preview area - chat/voice UI mockup */}
              <div className="relative h-52 md:h-64 bg-[#0d0d14] overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#43E97B]/5 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 flex flex-col gap-2.5">
                  {/* Chat-style messages */}
                  {[
                    { text: 'Show me blocked tasks this week', right: false },
                    { text: '3 tasks blocked — Arjun, Priya, Rohan', right: true },
                    { text: 'Schedule a standup for tomorrow 9am', right: false },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.right ? 'justify-end' : 'justify-start'}`}>
                      <div className={`text-[10px] px-3 py-1.5 rounded-2xl max-w-[70%] leading-relaxed ${msg.right ? 'bg-[#43E97B]/20 text-[#43E97B]' : 'bg-white/8 text-white/60'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className="mt-auto flex items-center gap-2 border border-white/10 rounded-xl px-3 py-2">
                    <Mic className="w-3.5 h-3.5 text-[#43E97B]" />
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div animate={{ width: ['20%', '60%', '40%', '80%', '20%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-[#43E97B]/50 rounded-full"></motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-2 tracking-tight">AI-first UI</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">Chat and voice are primary navigation patterns.</p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* Card 3 - Calm palette */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-[#111118] border border-white/8 rounded-[2rem] overflow-hidden group hover:border-[#FF6584]/30 transition-all duration-500">
              {/* Color palette mockup */}
              <div className="relative h-52 md:h-64 bg-[#0d0d14] overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6584]/5 to-transparent"></div>
                <div className="absolute top-5 left-5 right-5 bottom-5">
                  {/* Color swatches */}
                  <div className="flex gap-3 mb-4">
                    {['#0a0a0a', '#111118', '#1E2030', '#6C63FF', '#43E97B', '#FF6584', '#F7971E'].map((col, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-xl border border-white/10" style={{ background: col }}></div>
                        <div className="w-8 h-1 bg-white/10 rounded-full hidden md:block"></div>
                      </div>
                    ))}
                  </div>
                  {/* Typography scale */}
                  <div className="flex flex-col gap-1.5">
                    <div className="text-white font-bold text-xl leading-none tracking-tighter">Aa</div>
                    <div className="text-white/40 font-medium text-sm tracking-tight">Aa</div>
                    <div className="text-white/20 font-light text-xs">Aa</div>
                    <div className="flex gap-2 mt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-[#6C63FF] via-[#43E97B] to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-2 tracking-tight">Calm palette</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">Dark background with strict color use for hierarchy.</p>
              </div>
            </motion.div>

            {/* Card 4 - Role aware */}
            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-[#111118] border border-white/8 rounded-[2rem] overflow-hidden group hover:border-[#F7971E]/30 transition-all duration-500">
              {/* Role adaptation mockup */}
              <div className="relative h-52 md:h-64 bg-[#0d0d14] overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7971E]/5 to-transparent"></div>
                <div className="absolute top-5 left-5 right-5 bottom-5 flex flex-col gap-3">
                  {[
                    { role: 'CEO', col: '#6C63FF', view: 'Revenue · Capacity · Risk', icon: BarChart2 },
                    { role: 'Manager', col: '#F7971E', view: 'Blocked · Calendar · Alerts', icon: Layout },
                    { role: 'Developer', col: '#43E97B', view: 'Tasks · Bugs · PRs', icon: Zap },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-xl border transition-all duration-500 ${i === 1 ? 'border-white/15 bg-white/5' : 'border-white/5'}`}>
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: item.col }} />
                        <span className="text-[11px] font-bold" style={{ color: item.col }}>{item.role}</span>
                        <span className="text-[10px] text-white/30 ml-auto">{item.view}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[16px] md:text-[18px] font-semibold text-white mb-2 tracking-tight">Role aware</h4>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">UI adapts instantly based on CEO, Manager, or Dev role.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BACK TO HOME CTA (Bottom) */}
      <section className="px-6 md:px-12 py-24 border-t border-[#1E2030] bg-[#0F1118]/50 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6C63FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-[30px] md:text-[48px] font-bold text-white mb-8 tracking-tight">Ready to see more work?</h2>
          <p className="text-gray-400 font-light mb-12 text-base md:text-lg max-w-xl mx-auto">Explore other case studies and projects or get in touch for potential collaborations.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-4 px-12 h-16 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
            >
              <span>Back to home page</span>
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-24 border-t border-[#1E2030] bg-[#07080C] font-bold">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <div className="text-4xl font-extrabold text-white mb-4">
              Project<span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">AI</span>
            </div>
            <p className="text-sm font-light text-gray-400">Redefining enterprise management through AI intelligence.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6 text-white/80">
            <div className="flex items-center gap-8 font-bold">
               <Link to="/" className="text-xs uppercase tracking-[0.2em] hover:text-[#6C63FF] transition-all">Home</Link>
               <Link to="/" className="text-xs uppercase tracking-[0.2em] hover:text-[#FF6584] transition-all">Next Project</Link>
            </div>
            <div className="text-[10px] text-[#6B7280] uppercase tracking-widest font-medium">
              © 2024 · Portfolio of Suyash Shirsat · Montserrat Typography
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectAICaseStudy;
