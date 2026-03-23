import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const WHATSAPP_NUMBER = '919167575889';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const text = `Hello Suyash! 👋\n\nI would like to book an appointment with you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*Message:*\n${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
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
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5, x: -100, rotate: -30 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isActive ? 1.2 : 1, 
                    x: 0, 
                    rotate: isActive ? 0 : rotations[idx % rotations.length],
                    y: isActive ? -50 : yOffsets[idx % yOffsets.length],
                    zIndex: isActive ? 100 : idx
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: isActive ? 0 : 0.5 + (idx * 0.1),
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{ 
                    y: -50, 
                    scale: 1.1, 
                    rotate: 0,
                    zIndex: 100,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => {
                    setActiveIndex(idx);
                    setTimeout(() => setActiveIndex(null), 1000);
                  }}
                  className={`relative w-40 h-40 md:w-72 md:h-72 flex-shrink-0 overflow-hidden rounded-[24px] border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-900 group cursor-pointer transition-colors duration-300`}
                  style={{ zIndex: isActive ? 100 : idx }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 z-10`} />
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
            I find UX in everything around me and a visual story in everything I build. <br className="hidden md:block" />
            From scratch to shipped, 3+ years of <span className="font-bold text-white">Product Designer</span> turning ideas into products <br className="hidden md:block" />
            Build <span className="font-bold text-white">AI Ecosystem</span> in starups actually feel.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-10 h-[56px] bg-white text-black text-[16px] font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center font-poppins cursor-pointer"
          >
            Book an Appointment
          </button>
          <button className="w-full sm:w-auto group px-10 h-[56px] bg-transparent border border-white/20 text-white text-[16px] font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center space-x-2 font-poppins cursor-pointer">
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
                setIsSuccess(false);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full" />
              
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setIsSuccess(false);
                }}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {!isSuccess ? (
                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's build together</h2>
                    <p className="text-gray-400">Fill in the details below to start our journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Suyash Shirsat"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Gmail Address</label>
                        <input 
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="suyash@gmail.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        rows={3}
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-700"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-white/5"
                    >
                      <span className="text-lg">Submit Request</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="relative z-10 py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Done!</h2>
                  <p className="text-xl text-gray-400 mb-10 max-w-sm">
                    Your appointment request has been sent successfully. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSuccess(false);
                    }}
                    className="px-12 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
