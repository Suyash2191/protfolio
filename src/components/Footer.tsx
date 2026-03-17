import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Download, Send, Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer id="contact-us" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
              Let's build something <span className="text-blue-500">extraordinary</span> together.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0">
              Available for full-time roles and high-impact freelance projects. 
              Let's discuss your next big idea.
            </p>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <a href="mailto:suyashshirsat21@gmail.com" className="flex items-center space-x-4 text-white hover:text-blue-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">suyashshirsat21@gmail.com</span>
              </a>
              <a href="tel:+919167575889" className="flex items-center space-x-4 text-white hover:text-blue-500 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+91 9167575889</span>
              </a>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start space-x-6">
              <button 
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <Download className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            SUYASH<span className="text-blue-500">.</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Suyash Shirsat. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
