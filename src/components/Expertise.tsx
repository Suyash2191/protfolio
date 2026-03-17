import React from 'react';
import { motion } from 'motion/react';
import { TOOLS } from '../constants';
import { Instagram } from 'lucide-react';

const Expertise = () => {
  return (
    <section id="experties" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4 text-center">Expertise</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center">Tools & Technologies</h3>
      </div>

      {/* Marquee Background */}
      <div className="relative flex overflow-x-hidden opacity-20">
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
          {[...TOOLS, ...TOOLS].map((tool, idx) => (
            <div 
              key={idx} 
              className="mx-12 text-5xl md:text-8xl font-black text-white/5 uppercase tracking-tighter"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Central Meditation Image Section */}
      <div className="relative max-w-4xl mx-auto mt-[-100px] md:mt-[-150px] px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group mb-16"
        >
          {/* Glowing Aura Background */}
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" />
          
          {/* The Image Container */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 rounded-[40px] overflow-hidden"
          >
            <img 
              src="/images/meditation.png" 
              alt="Expertise Meditation"
              className="w-full h-auto max-w-[700px] object-cover mix-blend-lighten"
              style={{
                maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
              }}
            />
            
            {/* Advanced Blending Overlays */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-gradient-to-t from-[#050505] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1/4 pointer-events-none bg-gradient-to-b from-[#050505] to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />
          </motion.div>

          {/* Floating Icon Accents */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full animate-bounce" style={{ animationDuration: '5s' }} />
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative z-20 flex flex-col items-center space-y-6"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">Stay Connected</span>
            <h4 className="text-2xl md:text-3xl font-bold text-white">Follow my creative journey</h4>
          </div>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <Instagram className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Follow on Instagram</span>
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Expertise;
