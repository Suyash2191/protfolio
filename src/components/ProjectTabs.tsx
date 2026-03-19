import React, { useRef } from 'react';
import { motion } from 'motion/react';

const ASSETS = [
  { id: 2, type: 'website', title: 'Aditya Birla', img: '/images/img8.png', x: '5%', y: '5%', rotate: 2 },
  { id: 3, type: 'website', title: 'NMACC Experience', img: '/images/img9.png', x: '35%', y: '12%', rotate: -4 },
  { id: 4, type: 'website', title: 'Oz Jewelry', img: '/images/img10.png', x: '65%', y: '8%', rotate: 6 },
  { id: 5, type: 'website', title: 'Portfolio Project', img: '/images/img11.png', x: '10%', y: '40%', rotate: -3 },
  { id: 6, type: 'dashboard', title: 'Aurix Al', img: '/images/img14.png', x: '30%', y: '70%', rotate: 4 },
  { id: 7, type: 'dashboard', title: 'My First Board', img: '/images/img15.png', x: '70%', y: '75%', rotate: -2 },
  { id: 8, type: 'mobile', title: 'Porter Delivery', img: '/images/img24.png', x: '45%', y: '35%', rotate: 5 },
  { id: 9, type: 'mobile', title: 'Crypto Wallet', img: '/images/img25.png', x: '80%', y: '40%', rotate: -5 },
  { id: 10, type: 'website', title: 'AI Automation', img: '/images/img26.png', x: '5%', y: '70%', rotate: 3 },
  { id: 11, type: 'website', title: 'AI Platform', img: '/images/img27.png', x: '50%', y: '65%', rotate: -3 },
  { id: 12, type: 'website', title: 'Digital Solutions', img: '/images/img28.png', x: '85%', y: '15%', rotate: 2 },
];

const ProjectTabs = () => {
  const constraintsRef = useRef(null);

  return (
    <section id="playground" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden min-h-[900px]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 pointer-events-none">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Interactive Playground</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-display">Design Artifacts</h3>
          <p className="text-gray-500 mt-4 font-mono text-xs uppercase tracking-widest">Select and move any design to explore</p>
        </div>
      </div>

      {/* Draggable Canvas */}
      <div 
        ref={constraintsRef} 
        className="absolute inset-0 w-full h-full cursor-crosshair"
      >
        {ASSETS.map((asset) => (
          <motion.div
            key={asset.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, zIndex: 50 }}
            initial={{ 
              left: asset.x, 
              top: asset.y, 
              rotate: asset.rotate,
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: asset.id * 0.05 }
            }}
            viewport={{ once: true }}
            className={`absolute ${asset.type === 'mobile' ? 'w-48 md:w-64 aspect-[9/19]' : 'w-80 md:w-[500px] aspect-[4/3] md:aspect-video'} bg-gray-900 rounded-[8px] overflow-hidden border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing group`}
          >
            <div className="relative w-full h-full">
              {/* Mockup Frame Overlay */}
              {asset.type === 'website' || asset.type === 'dashboard' ? (
                /* Browser Mockup Header */
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800/90 z-20 flex items-center px-3 space-x-1.5 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                  <div className="ml-2 h-3 w-1/2 bg-white/5 rounded-full" />
                </div>
              ) : null}

              <img 
                src={asset.img} 
                alt={asset.title}
                className={`w-full h-full object-cover pointer-events-none grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500`}
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-30">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{asset.type}</span>
                  <span className="text-white font-bold text-sm">{asset.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
    </section>
  );
};

export default ProjectTabs;
