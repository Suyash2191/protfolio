import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Award, CheckCircle2, Target, AlertCircle, Users, Zap, Activity, Globe, TrendingUp, TrendingDown, LayoutGrid, Search, MessageSquare, ListChecks, ShoppingCart, ClipboardCheck, Star, Salad, MessageCircle, BarChart3, Rocket, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BalanceNutritionCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-[30px] md:pt-48 md:pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">
              <span>[001]</span>
              <span>Case Study</span>
            </div>
            
            <h1 className="text-[34px] md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] md:leading-[1.05]">
              <span className="block">Balance Nutrition</span>
              <span className="text-gray-500 font-light italic block md:inline">Product Design</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mt-6">
              A holistic ecosystem combining expert human counseling, <br className="hidden md:block" />
              AI-driven support, and personalized data tracking.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Designer</p>
                <p className="text-sm font-medium">Suyash Shirsat</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Role</p>
                <p className="text-sm font-medium">Lead Product Designer</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Platform</p>
                <p className="text-sm font-medium">Web · App · AI</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Duration</p>
                <p className="text-sm font-medium">10 Weeks</p>
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
          className="relative aspect-[16/10] md:aspect-[21/9] rounded-[12px] md:rounded-[24px] overflow-hidden bg-gray-900 border border-white/5"
        >
          <img 
            src="/images/clara.png" 
            alt="Balance Nutrition Interface" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* 01. The Journey (How It Works) */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">01. The Journey</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              The Balance Nutrition <span className="italic">Experience.</span>
            </h3>
            <p className="text-base md:text-xl text-white/60 leading-relaxed font-light max-w-3xl">
              From first contact to a personalized diet plan — here's how every client moves through the platform, guided by nutritionists and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-[10px]">
            {[
              { num: "01", title: "Counsellor Connects", desc: "A trained counsellor reaches out, explains all services, programs, and pricing.", icon: <MessageSquare /> },
              { num: "02", title: "Client Purchases", desc: "Client selects a 30, 60, or 90-day program — weight loss, PCOS, and more.", icon: <ShoppingCart /> },
              { num: "03", title: "Assessment Form", desc: "Client fills details like lifestyle, diet preference, and health history.", icon: <ClipboardCheck /> },
              { num: "04", title: "Health Score", desc: "A personalised health score is generated based on the assessment.", icon: <Star /> },
              { num: "05", title: "Diet Plan Delivered", desc: "Nutritionist creates and continuously updates the personalised diet plan.", icon: <Salad /> }
            ].map((step, i) => (
              <div key={i} className="p-[18px] bg-white/5 rounded-[14px] border border-white/10 flex flex-col gap-4 group hover:border-blue-500/50 transition-colors">
                <div className="text-blue-500 bg-blue-500/10 rounded-full w-10 h-10 flex items-center justify-center border border-blue-500/20">
                  {React.cloneElement(step.icon, { className: 'w-5 h-5' })}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">{step.title}</h4>
                  </div>
                  <p className="text-[14px] md:text-lg text-white/60 leading-relaxed font-light relative z-10 text-left">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. Programs & Pricing */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">02. Programs & Pricing</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              Three Tiers for <span className="italic">Every Client.</span>
            </h3>
            <p className="text-base md:text-xl text-white/60 leading-relaxed font-light max-w-3xl">
              Balance Nutrition offers standard programs for everyday clients and an exclusive Platinum plan for personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
             {[
              { 
                tier: "Standard", 
                title: "Normal Program", 
                desc: "Handled by 40+ nutritionists. Ideal for structured, personalised guidance.",
                features: ["30/60/90-day options", "Weight loss / gain", "PCOS / Thyroid support", "Weekly check-ins", "Clara AI support"],
                color: "border-white/10"
              },
              { 
                tier: "Premium", 
                title: "Advanced Program", 
                desc: "For complex health conditions requiring Senior Nutritionist attention.",
                features: ["Priority nutritionist", "Composition analysis", "Supplement meal plans", "Fortnightly reviews", "BN Life features"],
                color: "border-blue-500/30 bg-blue-500/5"
              },
              { 
                tier: "Platinum", 
                title: "Platinum Program", 
                desc: "Exclusive (₹1L+). Personally managed by Khyati Rupani, Head Nutritionist.",
                features: ["1-on-1 with Head", "Unlimited consultations", "Lifestyle overhaul", "Health concierge", "In-depth assessments"],
                color: "border-yellow-500/30 bg-yellow-500/5"
              }
            ].map((item, i) => (
              <div key={i} className={`p-[24px] rounded-[14px] border flex flex-col gap-6 ${item.color}`}>
                <div className="space-y-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border inline-block ${i === 2 ? 'border-yellow-500/40 text-yellow-500' : 'border-white/10 text-white/40'}`}>
                    {item.tier}
                  </span>
                  <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">{item.title}</h4>
                  <p className="text-[14px] md:text-lg text-white/60 leading-relaxed font-light relative z-10 text-left">{item.desc}</p>
                </div>
                <div className="space-y-3">
                  {item.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-[13px] text-white/60">
                      <CheckCircle2 className={`w-4 h-4 ${i === 2 ? 'text-yellow-500' : 'text-blue-500'}`} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-6 text-left max-w-4xl">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">03. The Challenge</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              Bridging the gap in <span className="italic">personal nutrition.</span>
            </h3>
            <p className="text-base md:text-xl text-white/60 leading-relaxed font-light mt-6 max-w-2xl">
              Despite having access to countless diet plans, users struggled to maintain consistency due to a lack of personalization and real-time guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                title: "Experience Gaps", 
                desc: "Confusing onboarding flow and health scores that felt like just a number.",
                color: "from-blue-500/10 to-transparent",
                type: "score"
              },
              { 
                title: "Workflow Issues", 
                desc: "Nutritionists lacked a central dashboard to see all active clients at a glance.",
                color: "from-purple-500/10 to-transparent",
                type: "dashboard"
              },
              { 
                title: "AI Missing", 
                desc: "Clara AI existed but wasn't surfaced properly in the user's daily journey.",
                color: "from-sky-400/10 to-transparent",
                type: "ai"
              },
              { 
                title: "Approachability", 
                desc: "UI wasn't warm or approachable for the primary audience of women 25-45.",
                color: "from-rose-500/10 to-transparent",
                type: "warmth"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0c0c0c] border border-white/5 rounded-[32px] p-4 md:p-8 flex flex-col items-center text-left gap-12 group items-start hover:border-white/10 transition-all duration-700 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">{item.title}</h4>
                
                {/* Topic-Related Visual Element */}
                <div className="relative w-48 h-40 flex items-center justify-center z-10">
                  {item.type === "score" && (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
                        <motion.circle 
                          cx="50" cy="50" r="40" fill="none" stroke="url(#blue-grad)" strokeWidth="6" 
                          strokeDasharray="251.2" strokeDashoffset="100" strokeLinecap="round"
                          animate={{ strokeDashoffset: [100, 150, 100] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <defs>
                          <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-white">68</span>
                        <span className="text-[8px] uppercase tracking-widest text-white/40">Score</span>
                      </div>
                      <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "dashboard" && (
                    <div className="grid grid-cols-2 gap-2 relative">
                      {[1, 2, 3, 4].map(n => (
                        <div key={n} className={`w-10 h-10 rounded-lg border border-white/10 ${n === 1 ? 'bg-purple-500/20 border-purple-500/40' : 'bg-white/5'}`}>
                           {n === 1 && <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-purple-400 m-1.5" />}
                        </div>
                      ))}
                      <div className="absolute -inset-4 bg-purple-500/10 blur-2xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "ai" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-24 h-24 rounded-full border border-sky-400/20 animate-pulse"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px] rotate-45 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                        <div className="w-full h-full bg-[#0c0c0c] rounded-2xl flex items-center justify-center overflow-hidden relative">
                           <motion.div 
                             animate={{ y: [-20, 20, -20] }}
                             transition={{ duration: 3, repeat: Infinity }}
                             className="w-full h-4 bg-sky-400/20 blur-sm absolute top-0"
                           />
                           <div className="w-6 h-6 rounded-full bg-sky-400 blur-md opacity-60"></div>
                        </div>
                      </div>
                      <div className="absolute -inset-x-12 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
                    </div>
                  )}

                  {item.type === "warmth" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg className="w-32 h-16 overflow-visible" viewBox="0 0 100 40">
                        <motion.path
                          d="M0,20 Q10,20 15,10 T25,20 T35,30 T45,20 T55,10 T65,20 T75,30 T85,20 L100,20"
                          fill="none"
                          stroke="#fb7185"
                          strokeWidth="2"
                          strokeDasharray="100 100"
                          animate={{ strokeDashoffset: [200, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                      <div className="absolute w-24 h-24 bg-rose-500/20 blur-3xl -z-10 rounded-full"></div>
                      <div className="absolute w-12 h-12 rounded-full border border-rose-500/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-rose-400 animate-ping opacity-20"></div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-[14px] md:text-lg text-white/60 leading-relaxed font-light relative z-10 text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left max-w-4xl">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">04. The Solution</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              A holistic ecosystem <span className="italic">expert human counseling</span> and <span className="italic">AI-driven support.</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Health Dashboard", 
                desc: "Visual score card showing exactly where clients stand with progress trends.",
                type: "grid"
              },
              { 
                title: "Clara AI Integration", 
                desc: "Persistent chat button on every screen for 24/7 instant support.",
                type: "message"
              },
              { 
                title: "Check-in Timeline", 
                desc: "Visible countdown to next nutritionist check-in motivates compliance.",
                type: "timeline"
              },
              { 
                title: "Seamless Care Flow", 
                desc: "Solving critical UX gaps by ensuring zero-lapse support during busy transitions.",
                type: "sync"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-[#0a1212] border border-white/10 rounded-[14px] md:rounded-[40px] p-4 md:p-8 flex flex-col gap-10 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden min-h-[420px]">
                {/* Glassmorphic Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">{item.title}</h4>
                
                {/* Topic-Related Iconography */}
                <div className="relative flex-1 flex items-center justify-center z-10">
                  {item.type === "grid" && (
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3].map(n => (
                          <div key={n} className="w-12 h-8 rounded-md bg-white/5 border border-white/10"></div>
                        ))}
                        <div className="w-12 h-16 rounded-md bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-end p-1.5 row-span-2">
                           <div className="w-full h-1/2 bg-white/20 rounded-sm"></div>
                        </div>
                        <div className="w-12 h-6 rounded-md bg-white/5 border border-white/10"></div>
                      </div>
                      <div className="absolute -inset-8 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "message" && (
                    <div className="relative flex flex-col gap-3">
                      <div className="w-24 h-12 rounded-2xl bg-white/5 border border-white/10 self-start"></div>
                      <div className="w-32 h-14 rounded-2xl bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] self-end flex items-center justify-center">
                         <div className="w-12 h-2 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="absolute -inset-10 bg-emerald-500/10 blur-3xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "timeline" && (
                    <div className="relative w-32 h-32">
                       <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                         <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                         <motion.path 
                           d="M 50,5 A 45,45 0 0 1 95,50" 
                           fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
                           animate={{ pathLength: [0, 1, 0] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                         />
                         <circle cx="95" cy="50" r="3" fill="#10b981" className="shadow-[0_0_15px_#10b981]" />
                       </svg>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></div>
                       </div>
                    </div>
                  )}

                  {item.type === "sync" && (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                       <div className="absolute w-full h-px bg-emerald-500/20"></div>
                       <div className="absolute h-full w-px bg-emerald-500/20"></div>
                       <div className="w-16 h-16 rounded-full border border-emerald-500 overflow-hidden flex items-center justify-center">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-full h-full p-2">
                             <div className="w-full h-full rounded-full border-t-2 border-emerald-400"></div>
                          </motion.div>
                       </div>
                       <div className="absolute w-20 h-20 rounded-full bg-emerald-500/20 blur-2xl animate-pulse"></div>
                    </div>
                  )}
                </div>

                <p className="text-[14px] md:text-lg text-white/60 leading-relaxed font-light relative z-10 text-left">
                  {item.desc}
                </p>
                
                {/* Bottom Highlight Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-emerald-500 blur-md rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left max-w-4xl">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">05. Research & Insights</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              The User-First <br /><span className="italic">Deep Dive.</span>
            </h3>
            <p className="text-base md:text-xl text-white/60 leading-relaxed font-light max-w-3xl">
              18 user interviews, 3 nutritionist sessions, and analysis of 120 WhatsApp chat transcripts from real client conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Client Needs", 
                list: ["Women 25-45 professionals", "Need motivation, not just charts", "Check WhatsApp, not email"],
                type: "profiles"
              },
              { 
                title: "Nutritionist Needs", 
                list: ["One dashboard for 50+ clients", "Flag high-risk clients quickly", "Automated FAQ handling"],
                type: "nexus"
              },
              { 
                title: "Key Insights", 
                list: ["83% want progress tracker", "76% didn't know AI existed", "91% want one-tap logging"],
                type: "nucleus"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-[#0d0a15] border border-white/10 rounded-[14px] md:rounded-[40px] p-4 md:p-8 flex flex-col gap-8 hover:border-violet-500/30 transition-all duration-700 overflow-hidden min-h-[280px] md:min-h-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">{item.title}</h4>
                
                {/* Topic-Related Visuals */}
                <div className="relative flex-1 flex items-center justify-center z-10 min-h-[160px]">
                  {item.type === "profiles" && (
                    <div className="relative w-32 h-32">
                       {[...Array(5)].map((_, j) => (
                         <motion.div
                           key={j}
                           animate={{ 
                             y: [0, -10, 0],
                             x: [0, Math.sin(j) * 5, 0],
                             opacity: [0.3, 0.6, 0.3]
                           }}
                           transition={{ duration: 3 + j, repeat: Infinity, delay: j * 0.5 }}
                           className="absolute w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/40 backdrop-blur-sm flex items-center justify-center"
                           style={{ 
                             top: `${20 + (j * 15)}%`, 
                             left: `${10 + (j * 18)}%` 
                           }}
                         >
                           <div className="w-4 h-4 rounded-full bg-violet-400/30"></div>
                         </motion.div>
                       ))}
                       <div className="absolute inset-0 bg-violet-500/10 blur-3xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "nexus" && (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                       <div className="grid grid-cols-4 gap-1 transform rotate-45">
                          {[...Array(16)].map((_, j) => (
                             <motion.div 
                               key={j}
                               animate={{ opacity: [0.1, 0.5, 0.1] }}
                               transition={{ duration: 2, repeat: Infinity, delay: j * 0.1 }}
                               className="w-4 h-4 border border-violet-500/20 rounded-sm"
                             />
                          ))}
                       </div>
                       <div className="absolute w-24 h-24 border border-violet-500/30 rounded-full animate-spin-slow"></div>
                       <div className="absolute w-16 h-16 border border-violet-400/40 rounded-full animate-reverse-spin"></div>
                       <div className="absolute inset-0 bg-violet-500/20 blur-3xl -z-10 rounded-full"></div>
                    </div>
                  )}

                  {item.type === "nucleus" && (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                       <motion.div 
                         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-16 h-16 rounded-full bg-violet-500 shadow-[0_0_50px_rgba(139,92,246,0.4)] relative z-10"
                       >
                          <div className="absolute inset-2 rounded-full border border-white/20"></div>
                       </motion.div>
                       {[...Array(3)].map((_, j) => (
                         <div key={j} className="absolute inset-0 border border-violet-500/20 rounded-full animate-ping" style={{ animationDelay: `${j * 0.6}s` }}></div>
                       ))}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 relative z-10 mt-auto">
                  {item.list.map((li, j) => (
                    <li key={j} className="text-[13px] text-white/50 flex gap-3 group/li">
                      <span className="text-violet-500 group-hover/li:translate-x-1 transition-transform">•</span>
                      {li}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-violet-500 blur-md rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Audience Card */}
            <div className="group relative bg-[#0d0a15] border border-white/10 rounded-[14px] md:rounded-[40px] p-5 md:p-10 flex flex-col md:flex-row gap-10 hover:border-violet-500/30 transition-all duration-700 overflow-hidden">
               <div className="flex-1 space-y-6 relative z-10">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                     <Users className="w-6 h-6 text-violet-400" />
                   </div>
                   <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">Primary Audience</h4>
                 </div>
                 <p className="text-white/40 leading-relaxed">
                   Women (70% of client base) aged 25-55, primarily Indian diaspora.
                 </p>
                 
                 <div className="space-y-4 pt-4">
                    {[
                      { label: "Young (16-29)", value: 20 },
                      { label: "Mid Age (30-45)", value: 55 },
                      { label: "Old (50+)", value: 25 }
                    ].map((age, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[11px] uppercase tracking-wider text-white/30">
                          <span>{age.label}</span>
                          <span>{age.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${age.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="h-full bg-violet-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Global Reach Card */}
            <div className="group relative bg-[#0d0a15] border border-white/10 rounded-[14px] md:rounded-[40px] p-5 md:p-10 flex flex-col md:flex-row gap-10 hover:border-violet-500/30 transition-all duration-700 overflow-hidden">
               <div className="flex-1 space-y-6 relative z-10">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                     <Globe className="w-6 h-6 text-violet-400" />
                   </div>
                   <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">Global Reach</h4>
                 </div>
                 <p className="text-white/40 leading-relaxed">
                   Active in 94+ countries, requiring 24/7 support powered by <span className="text-violet-400">Clara AI</span>.
                 </p>
                 
                 <div className="relative h-40 mt-6 flex items-center justify-center">
                   {/* Wireframe Globe Visual */}
                   <div className="relative w-32 h-32 border border-violet-500/20 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 border-t border-violet-500/30 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-0 border-l border-violet-500/30 rounded-full animate-reverse-spin"></div>
                      <Globe className="w-16 h-16 text-violet-500/20 animate-pulse" />
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          className="absolute w-1.5 h-1.5 bg-violet-400 rounded-full"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`
                          }}
                        />
                      ))}
                   </div>
                   <div className="absolute inset-0 bg-violet-500/10 blur-3xl -z-10 rounded-full"></div>
                 </div>
               </div>
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/10 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">06. Competitive Analysis</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              Where Competitors <span className="italic">Fall Short.</span>
            </h3>
          </div>
          
          <div className="overflow-x-auto rounded-[14px] md:rounded-[20px] border border-white/10 bg-white/5 p-4 scrollbar-hide">
            <table className="w-full min-w-[700px] text-left font-light text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-5 px-4 font-bold uppercase tracking-widest text-[10px] text-white/30">Platform</th>
                  <th className="py-5 px-4 font-bold uppercase tracking-widest text-[10px] text-white/30">Human Nutritionist</th>
                  <th className="py-5 px-4 font-bold uppercase tracking-widest text-[10px] text-white/30">AI Assistant</th>
                  <th className="py-5 px-4 font-bold uppercase tracking-widest text-[10px] text-white/30">PCOS Support</th>
                  <th className="py-5 px-4 font-bold uppercase tracking-widest text-[10px] text-white/30">Platinum Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: "HealthifyMe", human: "Add-on", ai: "Ria AI", pcos: "Generic", plat: "✗" },
                  { name: "Possible", human: "✓", ai: "✗", pcos: "Partial", plat: "✗" },
                  { name: "✦ Balance Nutrition", human: "60+ Experts", ai: "Clara AI", pcos: "Specialised", plat: "✓ ₹1L+", highlighted: true }
                ].map((row, i) => (
                  <tr key={i} className={`hover:bg-white/5 transition-colors ${row.highlighted ? 'bg-blue-500/5' : ''}`}>
                    <td className={`py-6 px-4 font-bold ${row.highlighted ? 'text-blue-500' : 'text-white'}`}>{row.name}</td>
                    <td className="py-6 px-4 text-white/40">{row.human}</td>
                    <td className="py-6 px-4 text-white/40">{row.ai}</td>
                    <td className="py-6 px-4 text-white/40">{row.pcos}</td>
                    <td className="py-6 px-4 text-white/40 font-bold">{row.plat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 07. Clara AI Section */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">07. Clara AI</h2>
              <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
                The AI That <br /><span className="italic">Never Sleeps.</span>
              </h3>
              <p className="text-base md:text-xl text-white/60 leading-relaxed font-light">
                Clara is Balance Nutrition&apos;s proprietary AI assistant that steps in when a nutritionist is unavailable. It has access to health history, diet plans, and previous doubts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "24/7 Context-aware replies",
                  "Passive Daily Food Logging",
                  "Motivational Nudges",
                  "Instant Recipe Suggestions"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/40">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px] md:h-auto rounded-[14px] md:rounded-[30px] overflow-hidden bg-gradient-to-b from-[#002B2E]/20 to-transparent p-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img 
                  src="/images/bn-life-carrot.png" 
                  alt="BN Life Clara AI" 
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.2)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. User Journey */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="space-y-6 text-left max-w-4xl">
            <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-white/40">08. Client Flow</h2>
            <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
              End-to-End <br /><span className="italic">Journey.</span>
            </h3>
          </div>

          <div className="relative w-full">
            {/* Desktop Flowchart (Hidden on Mobile) */}
            <div className="hidden md:block relative min-h-[600px] w-full">
              {/* SVG Connector Paths */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                viewBox="0 0 1000 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Organic Flow Paths */}
                {[
                  "M 180 300 C 250 300, 300 150, 420 150",   // Counselling -> Purchase
                  "M 550 150 C 650 150, 700 80, 800 120",   // Purchase -> Download
                  "M 550 150 C 650 150, 700 250, 800 280",  // Purchase -> Fill Info
                  "M 900 150 C 950 150, 950 350, 900 450",  // Download -> Score (indirect)
                  "M 900 300 C 950 300, 950 450, 900 500",  // Fill Info -> Score
                  "M 800 500 C 700 500, 650 450, 550 450",  // Score -> Nutritionist
                  "M 450 450 C 350 450, 300 450, 200 450"   // Nutritionist -> Diet Plan
                ].map((d, i) => (
                  <motion.path 
                    key={i}
                    d={d} 
                    stroke="url(#flow-grad)" strokeWidth="2.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                ))}
              </svg>

              {/* Nodes */}
              <div className="relative z-10 w-full h-full">
                {[
                  { title: "Counselling", icon: <MessageCircle />, pos: "top-[260px] left-[40px]", type: "start", delay: 0.1 },
                  { title: "Purchase", icon: <ShoppingCart />, pos: "top-[110px] left-[380px]", type: "action", delay: 0.3 },
                  { title: "Download App", icon: <Rocket />, pos: "top-[80px] left-[780px]", type: "action", delay: 0.5 },
                  { title: "Fill Info", icon: <ClipboardCheck />, pos: "top-[250px] left-[780px]", type: "action", delay: 0.7 },
                  { title: "Get Health Score", icon: <Star />, pos: "top-[460px] left-[780px]", type: "condition", delay: 0.9 },
                  { title: "Nutritionist Assigned", icon: <Users />, pos: "top-[410px] left-[380px]", type: "action", delay: 1.1 },
                  { title: "Diet Plan", icon: <Salad />, pos: "top-[410px] left-[60px]", type: "end", delay: 1.3 }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: step.delay }}
                    className={`absolute ${step.pos} group cursor-help`}
                  >
                    <div className={`p-1 rounded-2xl ${step.type === 'condition' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'bg-white/5'}`}>
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500/50 transition-all min-w-[200px] backdrop-blur-xl">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.type === 'condition' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/40 group-hover:text-blue-400 transition-colors'}`}>
                          {React.cloneElement(step.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none">{step.type}</p>
                          <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</p>
                        </div>
                        {step.type === 'condition' && (
                          <div className="ml-auto w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Vertical Flow (Visible only on Mobile) */}
            <div className="md:hidden space-y-4 px-4 py-8">
              {[
                { title: "Counselling", icon: <MessageCircle />, type: "start", delay: 0.1 },
                { title: "Purchase", icon: <ShoppingCart />, type: "action", delay: 0.2 },
                { title: "Download App", icon: <Rocket />, type: "action", delay: 0.3 },
                { title: "Fill Info", icon: <ClipboardCheck />, type: "action", delay: 0.4 },
                { title: "Get Health Score", icon: <Star />, type: "condition", delay: 0.5 },
                { title: "Nutritionist Assigned", icon: <Users />, type: "action", delay: 0.6 },
                { title: "Diet Plan", icon: <Salad />, type: "end", delay: 0.7 }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="relative"
                >
                  {i < 6 && (
                    <div className="absolute left-[29px] top-12 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent z-0"></div>
                  )}
                  <div className={`p-[1px] rounded-xl ${step.type === 'condition' ? 'bg-gradient-to-br from-blue-500/40 to-cyan-500/40' : 'bg-white/10'}`}>
                    <div className="bg-[#0a0a0a] rounded-[10px] p-4 flex items-center gap-4 relative z-10">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.type === 'condition' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/40'}`}>
                        {React.cloneElement(step.icon as React.ReactElement, { className: 'w-4 h-4' })}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest">{step.type}</p>
                        <p className="text-sm font-bold text-white">{step.title}</p>
                      </div>
                      {step.type === 'condition' && (
                        <CheckCircle2 className="ml-auto w-4 h-4 text-blue-400" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Subtle flow glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] -z-10 rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* 09. Metrics & Impact */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#030303] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
             {/* Background glow for header */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10"></div>
            
            <div className="space-y-6 text-left">
              <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.4em] text-blue-500">09. Goals & Success</h2>
              <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
                Impact by <span className="text-blue-500 italic">Design.</span>
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1: Easy-to-use Interface (Wide) -> Drop-off Reduction */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-7 group relative overflow-hidden rounded-[14px] md:rounded-[40px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-5 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[480px] shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700"></div>
              
              {/* Visual Mockup Element */}
              <div className="relative w-full h-[240px] mt-2 group-hover:scale-105 transition-transform duration-700">
                <div className="absolute top-4 right-4 w-48 h-32 bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-2 scale-90 md:scale-100 origin-top-right">
                  <div className="flex items-center justify-between px-2 py-1 mb-2 border-b border-white/5">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 bg-blue-500/20 rounded-full"></div>
                    <div className="h-12 w-full bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="h-3 w-1/3 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute -left-2 top-8 w-64 h-48 bg-[#0d0d0d] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden p-4 backdrop-blur-xl">
                  <div className="flex gap-4 mb-4">
                    <div className="h-2 w-12 bg-blue-500/40 rounded-full"></div>
                    <div className="h-2 w-8 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-8 bg-white/5 rounded-lg border border-white/10 transition-colors group-hover:border-blue-500/30"></div>
                    <div className="h-8 bg-white/5 rounded-lg border border-white/10"></div>
                    <div className="h-12 col-span-2 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center">
                      <div className="w-20 h-2 bg-blue-400/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">Drop-off Reduction</h4>
                <p className="text-white/50 text-base max-w-sm leading-relaxed">
                  Day 1–10 churn reduced through automated reminders and personalized follow-up logic.
                </p>
                <div className="flex items-center justify-between mt-6">
                  <div className="text-5xl font-black text-blue-500 tracking-tighter">55%</div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5581f1] hover:text-[#7ba1ff] transition-colors group/btn">
                    Details <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Collaboration Tools (Square) -> User Satisfaction */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 group relative overflow-hidden rounded-[14px] md:rounded-[40px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-5 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[480px] shadow-2xl"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10 group-hover:bg-purple-600/20 transition-all duration-700"></div>
              
              {/* Avatar Orbit Visual */}
              <div className="relative w-full h-[240px] flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                  <Star className="w-10 h-10 text-purple-400 animate-pulse" />
                  
                  {/* Orbits */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: i * 2 }}
                      className="absolute w-48 h-48 rounded-full border border-white/5 pointer-events-none"
                      style={{ rotate: deg }}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">User Satisfaction</h4>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-5xl font-black text-purple-500 tracking-tighter">4.7 / 5</div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors group/btn">
                    Review <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Secure Cloud Storage (Square) -> AI Engagement */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 group relative overflow-hidden rounded-[14px] md:rounded-[40px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-5 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[480px] shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 blur-[100px] -z-10 group-hover:bg-blue-400/20 transition-all duration-700"></div>
              
              {/* Cloud/AI Icon Visual */}
              <div className="relative w-full h-[240px] flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                    <MessageSquare className="w-10 h-10 text-blue-400" />
                  </div>
                  
                  {/* Orbiting Tech Icons */}
                  {[
                    { icon: <Search className="w-3 h-3" />, pos: "-top-8 -left-8" },
                    { icon: <Activity className="w-3 h-3" />, pos: "-bottom-8 -right-8" },
                    { icon: <Globe className="w-3 h-3" />, pos: "top-1/2 -right-12" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className={`absolute ${item.pos} w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 backdrop-blur-md shadow-xl`}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                  
                  {/* Pulsing Concentric Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">AI Engagement</h4>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-5xl font-black text-blue-400 tracking-tighter">3× <span className="text-2xl opacity-50">Usage</span></div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors group/btn">
                    Explore <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Wide Integration Support (Wide) -> Log Compliance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 group relative overflow-hidden rounded-[14px] md:rounded-[40px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 p-5 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[480px] shadow-2xl"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/5 blur-[120px] -z-10 group-hover:bg-green-500/10 transition-all duration-700"></div>
              
              {/* Integration Link Visual */}
              <div className="relative w-full h-[240px] flex items-center justify-center gap-12">
                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-xl group-hover:-translate-x-2 transition-transform duration-500">
                  <LayoutGrid className="w-8 h-8 text-white/40" />
                </div>
                
                <div className="relative w-24 h-24 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.2)] z-10">
                  <ListChecks className="w-10 h-10 text-green-400" />
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping"></div>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-xl group-hover:translate-x-2 transition-transform duration-500">
                  <Activity className="w-8 h-8 text-white/40" />
                </div>

                {/* Connection Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent -z-10"></div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">Log Compliance</h4>
                <p className="text-white/50 text-base max-w-sm leading-relaxed mt-2">
                  Daily meal logging consistency improved via simplified photo-based logging UI.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-5xl font-black text-green-500 tracking-tighter">80%</div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 hover:text-green-300 transition-colors group/btn">
                    Integrations <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6 text-left">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">10. The Design System</h2>
              <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
                Consistency <br />at Scale
              </h3>
            </div>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light bg-white/5 p-3 rounded-[8px] border border-white/5">
              A robust design system ensuring a trustworthy, clean, and user-friendly experience across all touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
            {/* Color Picker Visual (Left Column) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-[#0d0d0d] rounded-[14px] md:rounded-[40px] border border-white/10 p-4 md:p-12 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00858C]/10 blur-[100px] -z-10 group-hover:bg-[#00858C]/20 transition-all duration-700"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-16">
                {/* Shades List */}
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-1 text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2">
                    <ArrowUp className="w-3 h-3 mb-1" />
                    Lightness
                  </div>
                  {[0.1, 0.3, 0.5].map((op, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border border-white/10" style={{ backgroundColor: `#00858C${Math.floor(op * 255).toString(16).padStart(2, '0')}` }}></div>
                  ))}
                  <div className="w-16 h-16 rounded-full border-2 border-white/40 p-1 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <div className="w-full h-full rounded-full bg-[#00858C] shadow-inner"></div>
                  </div>
                  {[0.7, 0.9].map((op, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border border-white/10" style={{ backgroundColor: `#00858C${Math.floor(op * 255).toString(16).padStart(2, '0')}` }}></div>
                  ))}
                  <div className="flex flex-col items-center gap-1 text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] mt-2">
                    <ArrowDown className="w-3 h-3 mt-1" />
                    Lightness
                  </div>
                </div>

                {/* Main Picker Tool */}
                <div className="flex-1 w-full max-w-sm bg-[#151515] rounded-3xl border border-white/10 shadow-3xl overflow-hidden">
                  <div className="aspect-square w-full relative group/picker cursor-crosshair">
                    <div className="absolute inset-0 bg-[#00858C]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    
                    {/* Picker Selector */}
                    <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border-2 border-white shadow-xl -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      {/* Hue & Opacity Sliders */}
                      <div className="h-3 w-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 to-purple-500 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#151515] shadow-lg cursor-pointer"></div>
                      </div>
                      <div className="h-3 w-full rounded-full bg-gradient-to-r from-transparent to-[#00858C] relative border border-white/5">
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#151515] shadow-lg cursor-pointer"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-bold text-white/60">HSL</div>
                      <div className="flex gap-2 flex-1">
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 text-center text-[10px] text-white font-mono">183</div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 text-center text-[10px] text-white font-mono">100</div>
                        <div className="flex-1 bg-blue-500/20 border border-blue-500/40 rounded-lg p-2 text-center text-[10px] text-white font-mono shadow-[0_0_10px_rgba(59,130,246,0.3)]">43</div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 text-center text-[10px] text-white font-mono">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 border-t border-white/5 pt-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00858C] break-keep whitespace-nowrap">Primary Brand Color</span>
                  <div className="text-3xl font-bold text-white font-mono tracking-tight uppercase">#00858C</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-white border border-white/10"></div>
                    <span className="text-[8px] md:text-[10px] text-white/50 font-mono tracking-widest uppercase">#ffffff</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-[#D19F00] border border-white/10"></div>
                    <span className="text-[8px] md:text-[10px] text-white/50 font-mono tracking-widest uppercase">#d19f00</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Typography & Components (Right Column) */}
            <div className="lg:col-span-5 flex flex-col gap-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {/* Typography Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[14px] md:rounded-[40px] p-5 md:p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden group shadow-2xl"
              >
                <div className="space-y-6 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Typography / Main</span>
                  <h4 className="text-lg md:text-3xl font-bold text-gray-900 tracking-tight relative z-10 text-left">Poppins</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    Clean, geometric sans-serif for optimal readability across digital interfaces.
                  </p>
                </div>
                <div className="flex gap-4 items-end relative z-10 whitespace-nowrap overflow-hidden">
                  <div className="text-5xl md:text-7xl font-black text-black/5 select-none">Aa</div>
                  <div className="text-lg md:text-2xl font-bold text-black border-b-4 border-[#00858C] pb-1">Bold</div>
                  <div className="text-lg md:text-2xl font-medium text-black/40">Medium</div>
                </div>
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#00858C]/5 rounded-full blur-3xl group-hover:bg-[#00858C]/10 transition-colors"></div>
              </motion.div>

              {/* Grid / Components Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#151515] rounded-[14px] md:rounded-[40px] border border-white/10 p-5 md:p-10 flex flex-col justify-between min-h-[220px] relative overflow-hidden shadow-2xl"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Layout / Grid System</span>
                  <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">MODULAR GRID</h4>
                  <p className="text-white/40 text-xs leading-relaxed">Scalable across all resolutions with an 8px base unit.</p>
                </div>
                
                {/* Visual Grid indicator */}
                <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10 flex gap-1 p-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="flex-1 bg-white/20 h-full rounded-sm"></div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Visual Designs */}
      <section className="py-[50px] md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="space-y-6 text-left">
              <h2 className="text-sm font-bold capitalize md:uppercase tracking-[0.3em] text-[#00858C]">11. Visual Designs</h2>
              <h3 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1]">
                The Final <br />Experience
              </h3>
            </div>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light bg-white/5 p-4 rounded-[12px] border border-white/5">
              High-fidelity mockups showcasing a seamless, performance-driven user journey across mobile and desktop interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mt-12 pb-24">
            {/* Row 1: Hero (8) + Mobile Gauge (4) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 rounded-[14px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0d0d0d] group p-3 md:p-6 flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Visual Interface / Home</span>
              </div>
              <img 
                src="/assets/designs/hero.png" 
                alt="Balance Nutrition Hero Section"
                className="w-full h-auto rounded-[14px] md:rounded-[30px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-4 rounded-[14px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0d0d0d] group p-3 md:p-6 flex flex-col"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Mobile / Health Gauge</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/assets/designs/gauge_mobile.png" 
                  alt="Health Score Mobile Gauge"
                  className="w-full h-auto rounded-[14px] md:rounded-[30px] shadow-2xl max-h-[500px] object-contain"
                />
              </div>
            </motion.div>

            {/* Row 2: Form UI (4) + Product Offerings (8) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-4 rounded-[14px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0d0d0d] group p-3 md:p-6 flex flex-col"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Personalization Flow</span>
              </div>
               <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/assets/designs/form.png" 
                  alt="Personalization Form UI"
                  className="w-full h-auto rounded-[14px] md:rounded-[30px] shadow-2xl max-h-[500px] object-contain"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 rounded-[14px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#0d0d0d] group p-3 md:p-6 flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Programs / Features</span>
              </div>
              <img 
                src="/assets/designs/what_do_you_get.png" 
                alt="Product Offerings"
                className="w-full h-auto rounded-[14px] md:rounded-[30px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>

            {/* Row 3: Web Dashboard (12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-12 rounded-[14px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#00858C]/5 group p-4 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D19F00]">Web Interface</span>
                  <h4 className="text-lg md:text-3xl font-bold text-white tracking-tight relative z-10 text-left">Diagnostic <br />Intelligence</h4>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    Designed to provide instant credibility through interactive diagnostics, converting visitors into health-conscious users.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-16 h-1 bg-[#00858C] rounded-full"></div>
                    <div className="w-8 h-1 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <img 
                    src="/assets/designs/gauge_web.png" 
                    alt="Health Score Web Interface"
                    className="w-full h-auto rounded-[14px] md:rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results / Conclusion Section */}
      <section className="py-[50px] md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-left md:text-center space-y-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center md:mx-auto"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-[28px] md:text-6xl font-bold tracking-tight leading-tight">
            Designed for <br />
            <span className="text-white/40 font-light italic uppercase">Real Impact.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 leading-relaxed font-light">
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
