import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X, Search, BarChart2, MessageSquare, Clock, Shield, Users, Layout, Zap, Mic, FileText, Smartphone, Globe, Home } from 'lucide-react';
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

      {/* Hero Section with Back Button */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        {/* Back to Home Button (Top Left) */}
        <div className="absolute top-[3.2rem] left-6 md:left-12 z-50">
          <Link 
            to="/" 
            className="group flex items-center gap-3 px-6 py-3 bg-[#1E2030]/50 backdrop-blur-xl border border-white/10 rounded-full text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to home page</span>
          </Link>
        </div>

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

      {/* FEATURED IMAGE 1 - KEY VISUAL */}
      <section className="px-6 md:px-12 py-10">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto rounded-[8px] overflow-hidden border border-[#1E2030] shadow-2xl bg-[#0F1118]">
          <img src="/images/cs-dashboard-full.png" alt="Status Overview" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </section>

      {/* 01 - PROBLEM STATEMENT */}
      <section id="problem" className="px-6 md:px-12 py-24 border-t border-[#1E2030]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            01 — Problem statement
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">
            Teams are drowning<br />in management overhead
          </h2>
          <p className="text-[16px] md:text-[20px] font-light text-gray-300 max-w-2xl mb-16 leading-[1.6] tracking-tight">
            Modern companies juggle 6–12 disconnected tools for project management, communication, attendance, and reporting. Managers spend 40% of their time on coordination — not actual work.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[#1E2030] rounded-[8px] overflow-hidden border border-[#1E2030] mb-16">
            {[
              { id: '01', title: 'Tool fragmentation', desc: 'Teams use Jira, Slack, Notion, HR tools, and spreadsheets separately. Context is lost between every switch, creating friction and errors.' },
              { id: '02', title: 'AI not integrated', desc: 'Existing PM tools bolt AI on top. It doesn’t understand your team structure, project context, or past decisions — making it useless in practice.' },
              { id: '03', title: 'No voice interface', desc: 'Managers can’t query their team’s status, deadlines, or blockers hands-free. Everything requires clicking through dashboards and menus.' }
            ].map((card, i) => (
              <div key={i} className="bg-[#0F1118] p-3 group hover:bg-[#161822] transition-all duration-500">
                <div className="text-5xl font-extrabold text-[#1E2030] mb-6 group-hover:text-[#6C63FF]/20 transition-colors uppercase tracking-tighter">{card.id}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '40%', label: 'Of work time spent on coordination tasks', color: '#6C63FF' },
              { num: '6-12', label: 'Tools the average team manages simultaneously', color: '#FF6584' },
              { num: '2.5h', label: 'Daily time lost to context switching per employee', color: '#43E97B' },
              { num: '68%', label: 'Managers want a single AI-powered dashboard', color: '#F7971E' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0F1118] border border-[#1E2030] rounded-[8px] p-3 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: stat.color }} />
                <div className="text-[18px] font-medium text-white mb-2 group-hover:scale-105 transition-transform duration-500 tracking-tighter leading-none">{stat.num}</div>
                <div className="text-[14px] text-[#6B7280] font-normal leading-tight">{stat.label}</div>
              </div>
            ))}
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
          <p className="font-light text-[16px] md:text-[20px] text-gray-300 max-w-2xl mb-16 leading-[1.6] tracking-tight">
            We conducted 24 in-depth user interviews with CTOs, Team Leads, HR Managers, and Developers across tech companies.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Users, name: 'Arjun, 34', role: 'Engineering manager', quote: 'I need to know who’s blocked, what’s behind, and what’s shipping — without opening 4 different tools every morning.', bg: 'rgba(108,99,255,0.1)' },
              { icon: Layout, name: 'Priya, 28', role: 'Design team lead', quote: 'Sharing Figma links, feedback, and file versions across chat and email wastes hours. I need a central place my AI can access everything.', bg: 'rgba(255,101,132,0.1)' },
              { icon: Zap, name: 'Rohan, 26', role: 'Backend developer', quote: 'When I report a bug or code issue, it takes 3 days to reach the right person. I want to just describe it to an AI and have it routed instantly.', bg: 'rgba(67,233,123,0.1)' }
            ].map((persona, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#0F1118] border border-[#1E2030] rounded-[8px] p-3 relative group hover:border-[#6C63FF]/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center border border-white/50 flex-shrink-0">
                    <persona.icon className="w-[14px] h-[14px] text-white" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-normal text-white leading-none mb-1">{persona.name}</h4>
                    <div className="text-[14px] text-[#6C63FF] font-normal capitalize leading-none">{persona.role}</div>
                  </div>
                </div>
                <p className="text-[#E8EAF0] leading-relaxed text-[14px] font-normal border-t border-[#1E2030] pt-4 group-hover:text-white transition-colors duration-500">
                  "{persona.quote}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="bg-[#0F1118] border border-[#1E2030] rounded-[8px] p-3">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-[18px] font-medium text-white flex items-center gap-4 leading-none">
                   <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center border border-white/50"><Search className="w-[14px] h-[14px] text-white" /></div>
                   Key insights
                </h4>
                <span className="px-3 py-1 bg-[#6C63FF]/10 text-[#6C63FF] rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">Qualitative</span>
              </div>
              <ul className="space-y-4">
                {[
                  'Managers want real-time status of every employee without micromanaging',
                  'Developers want to report bugs and escalate issues through one interface',
                  'HR teams need WFH/WFO/Leave in the same view as project tasks',
                  'Voice queries are more natural than clicking through deep dashboards',
                  'AI must understand file types: Figma, GitHub, Drive, Zeplin links',
                  'Teams want AI to proactively surface risks, not just answer questions'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[14px] text-gray-400 leading-relaxed group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-[#0F1118] border border-[#1E2030] rounded-[8px] p-3">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-[18px] font-medium text-white flex items-center gap-4 leading-none">
                  <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center border border-white/50"><BarChart2 className="w-[14px] h-[14px] text-white" /></div>
                  Survey data
                </h4>
                <span className="px-3 py-1 bg-[#43E97B]/10 text-[#43E97B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">n=180</span>
              </div>
              <ul className="space-y-4">
                {[
                  '82% want AI that understands their team’s project history',
                  '74% would use voice commands if they worked reliably',
                  '91% need attendance/leave visible alongside task boards',
                  '77% want AI to assign tasks based on current workload',
                  '86% want to send files directly through AI chat interface',
                  '69% would pay more for AI that reduces meeting time by 50%'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[14px] text-gray-400 leading-relaxed group">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

       {/* RELEVANT IMAGE CLIP - DASHBOARD TEAM */}
       <section className="px-6 md:px-12 py-12">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto rounded-[8px] overflow-hidden border border-[#1E2030] shadow-xl bg-[#0F1118]">
           <img src="/images/cs-dashboard-team.png" alt="Team Dashboard" className="w-full h-auto opacity-90 transition-opacity hover:opacity-100 duration-700" />
        </motion.div>
      </section>

      {/* 03 - COMPETITIVE */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            03 — Competitive analysis
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-12 leading-[1.05] tracking-tighter">Where existing tools fall short</h2>
          
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
      <section className="px-6 md:px-12 py-32 bg-[#0F1118]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
                04 — Success metrics
              </div>
              <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">What success looks like</h2>
              <p className="font-light text-[16px] md:text-[20px] text-gray-300 mb-12 leading-[1.6] tracking-tight">Clear business goals paired with measurable UX metrics to track every phase.</p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { label: 'Completion rate', val: '+35%', color: '#43E97B' },
                  { label: 'Time saved / week', val: '8 hrs', color: '#6C63FF' },
                  { label: 'Feature adoption', val: '70%+', color: '#FF6584' },
                  { label: 'User sat score', val: '4.5+', color: '#F7971E' }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#0F1118] border border-[#1E2030] p-3 rounded-[8px] group hover:border-white/20 transition-all duration-500">
                    <div className="text-[18px] font-medium text-white mb-2 group-hover:scale-110 transition-transform duration-500 tracking-tighter leading-none" style={{ color: stat.color }}>{stat.val}</div>
                    <div className="text-[14px] text-[#6B7280] font-normal leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div {...fadeIn} className="relative max-w-lg mx-auto lg:mx-0 rounded-[8px] overflow-hidden border border-[#1E2030] shadow-2xl bg-[#0F1118] p-3 group">
              <img src="/images/cs-zoom-meeting.png" alt="Zoom AI Integration" className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 - SOLUTION */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <div className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#7ecfef' }}>05 — The solution</div>
             <h2 className="text-[36px] md:text-[80px] font-bold text-white mb-8 leading-[1.05] tracking-tighter">One platform that<br />thinks with your team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: 'AI Voice assistant', desc: 'Ask about team history, capacity, or deadlines using voice naturally.', icon: Mic, col: '#6C63FF' },
              { title: 'Unified dashboard', desc: 'See statuses, tasks, and leave in a single real-time company view.', icon: Layout, col: '#43E97B' },
              { title: 'Universal file intel', desc: 'AI reads and understands Figma files, code bugs, and design links.', icon: FileText, col: '#FF6584' },
              { title: 'Attendance tracker', desc: 'WFH, WFO, and leave tracked automatically. Proactive HR flagging.', icon: Clock, col: '#F7971E' },
              { title: 'Smart task engine', desc: 'Assigned based on capacity, velocity, and individual skill sets.', icon: Zap, col: '#6C63FF' },
              { title: 'Team chat + context', desc: '@AI participant to summarize threads and create tasks inline.', icon: MessageSquare, col: '#43E97B' }
            ].map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-[#0F1118] border border-[#1E2030] p-3 rounded-[8px] group hover:bg-[#161822] hover:-translate-y-2 transition-all duration-700">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-5 h-5 rounded-[4px] flex items-center justify-center border border-white/50 text-white flex-shrink-0">
                      <Icon className="w-[14px] h-[14px]" />
                    </div>
                    <h3 className="text-[18px] font-medium text-white leading-none tracking-tight">{sol.title}</h3>
                  </div>
                  <p className="text-[14px] font-normal text-[#6B7280] leading-relaxed">{sol.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeIn} className="rounded-[8px] overflow-hidden border border-[#1E2030] shadow-2xl bg-[#0F1118]">
            <img src="/images/cs-chat-ui.png" alt="AI Chat Interface" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* 06 - USER FLOW */}
      <section className="px-6 md:px-12 py-32 bg-[#0F1118]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            06 — User flow
          </div>
          <h2 className="text-[36px] md:text-[72px] font-bold text-white mb-16 leading-[1.05] tracking-tighter">The core AI interaction loop</h2>
          
          <div className="flex items-center gap-0 overflow-x-auto pb-16 no-scrollbar scrollbar-hide">
            {[
              { icon: Shield, name: 'Login', desc: 'SSO or email login' },
              { icon: Zap, name: 'AI Briefing', desc: 'Morning team summary' },
              { icon: Mic, name: 'Voice/Chat', desc: 'Ask naturally' },
              { icon: FileText, name: 'Send Files', desc: 'Attach Figma, code' },
              { icon: Zap, name: 'AI Action', desc: 'Tasks created' },
              { icon: Layout, name: 'Dashboard', desc: 'Review real-time' }
            ].map((step, i, arr) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center min-w-[180px] group text-center">
                    <div className="w-16 h-16 rounded-full border border-[#1E2030] bg-[#0F1118] flex items-center justify-center text-xl mb-6 group-hover:border-[#6C63FF] group-hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] transition-all duration-500">
                      <Icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-white' : 'text-[#6C63FF]'}`} />
                    </div>
                    <div className="font-medium text-[20px] text-white mb-2 tracking-tight">{step.name}</div>
                    <div className="text-[14px] text-gray-400 max-w-[140px] leading-relaxed font-normal">{step.desc}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex-shrink-0 px-2 text-[#1E2030] pb-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <motion.div {...fadeIn} className="max-w-4xl mx-auto rounded-[8px] overflow-hidden border border-[#1E2030] shadow-xl bg-[#0F1118]">
            <img src="/images/cs-greeting.png" alt="AI Greeting" className="w-full h-auto" />
          </motion.div>
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
              <img src="/images/cs-showcase-1.png" alt="High Fidelity Dashboard" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-2.png" alt="Task management interface" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="rounded-[8px] overflow-hidden border border-[#1E2030] bg-[#0F1118] group">
              <img src="/images/cs-showcase-3.png" alt="Board view light theme" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
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
      <section className="px-6 md:px-12 py-32 bg-[#0F1118]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] mb-6" style={{ color: '#7ecfef' }}>
            08 — Design system
          </div>
          <h2 className="text-[36px] md:text-[80px] font-bold text-white mb-6 leading-[1.05] tracking-tighter">Density & Clarity</h2>
          <p className="font-light text-[16px] md:text-[20px] text-gray-300 max-w-2xl mb-24 leading-[1.6] tracking-tight">
            A dark, data-dense visual system designed for long work sessions. High contrast, calm palette, and AI-first interaction patterns.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
             {[
               { id: '01', title: 'Data density', desc: 'Show maximum information without overwhelming user.' },
               { id: '02', title: 'AI-first UI', desc: 'Chat and voice are primary navigation patterns.' },
               { id: '03', title: 'Calm palette', desc: 'Dark background with strict color use for hierarchy.' },
               { id: '04', title: 'Role aware', desc: 'UI adapts instantly based on CEO, Manager, or Dev role.' }
             ].map((prin, i) => (
                <div key={i} className="bg-[#0F1118] border border-[#1E2030] rounded-[8px] p-3 relative overflow-hidden pt-12 hover:border-white/10 transition-colors group">
                  <span className="absolute top-4 right-4 text-4xl font-extrabold text-[#1E2030]/50 group-hover:text-[#6C63FF]/10 transition-colors tracking-tighter uppercase">{prin.id}</span>
                  <h4 className="font-medium text-white text-[18px] mb-3 tracking-tight leading-none">{prin.title}</h4>
                  <p className="text-[14px] font-normal text-gray-400 leading-relaxed">{prin.desc}</p>
                </div>
             ))}
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
