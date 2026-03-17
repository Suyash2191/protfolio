import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center mt-20">
        {/* Line 1 & 2 */}
        <div className="mb-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans font-light text-[40px] md:text-[64px] text-white/90 leading-tight tracking-tight"
          >
            Hi, I am
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-[30px] md:text-[96px] text-white leading-tight tracking-tighter"
          >
            Suyash Shirsat
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-12 md:h-20"
          >
            <Typewriter 
              words={[
                'Product Designer',
                'AI & Agentic Expert',
                'Visual Mentor',
                'UX Designer'
              ]} 
            />
          </motion.div>
        </div>

        {/* Image Gallery Animation - Overlapping Stack Style */}
        <div className="relative w-full max-w-6xl mx-auto mb-12 px-4 flex items-center justify-center py-6 overflow-visible">
          <div className="flex -space-x-16 md:-space-x-32 overflow-visible">
            {images.map((src, idx) => {
              const rotations = [-12, -6, -2, 4, 8, 14];
              const yOffsets = [25, 10, 0, 5, 15, 30];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5, x: -100, rotate: -30 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0, 
                    rotate: rotations[idx % rotations.length],
                    y: yOffsets[idx % yOffsets.length]
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5 + (idx * 0.1),
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{ 
                    y: -50, 
                    scale: 1.1, 
                    rotate: 0,
                    zIndex: 100,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-40 h-40 md:w-72 md:h-72 flex-shrink-0 overflow-hidden rounded-[24px] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-900 group"
                  style={{ zIndex: idx }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={src} 
                    alt={`Suyash Work ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Line 4: Subheading - Styled like the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <p className="font-sans font-light text-[14px] md:text-[18px] text-gray-300 leading-[1.5] tracking-tight">
            Starting as a Computer Science Engineer gave me the structure; design gave me the soul. 
            Over the last 3+ years, I've evolved from a lone startup designer to architecting advanced <span className="font-bold text-white">AI ecosystems</span> for <span className="font-bold text-white">Google</span>, <span className="font-bold text-white">Microsoft</span> and <span className="font-bold text-white">Amazon</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10"
        >
          <button className="w-full sm:w-auto group px-10 h-[56px] bg-white text-black text-[16px] font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center space-x-2 font-poppins">
            <span>View my work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 h-[56px] bg-transparent border border-white/20 text-white text-[16px] font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center font-poppins">
            Contact me
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className="font-sans font-bold text-[30px] md:text-[48px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 inline-block min-h-[1.2em] whitespace-nowrap">
      {currentText}
      <span className="text-pink-500 animate-pulse ml-1">|</span>
    </span>
  );
};

export default Hero;
