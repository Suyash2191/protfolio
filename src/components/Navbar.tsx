import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Folder, Briefcase, Instagram, Bookmark, Zap, FileText } from 'lucide-react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleModalScroll = (e: Event) => {
      const scrollTop = (e as CustomEvent).detail?.scrollTop ?? 0;
      setIsScrolled(scrollTop > 20);
      if (scrollTop > lastScrollY && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('modalscroll', handleModalScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('modalscroll', handleModalScroll);
    };
  }, [lastScrollY]);

  // Handle cross-page hash scrolls
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  interface MenuItem {
    name: string;
    icon: React.ReactNode;
    id?: string;
    path?: string;
  }

  const menuItems: MenuItem[] = [
    { name: 'Home', icon: <Home size={20} />, id: 'hero' },
    { name: 'Projects', icon: <Folder size={20} />, id: 'work' },
    { name: 'Work', icon: <Briefcase size={20} />, id: 'playground' },
    { name: 'Social', icon: <Instagram size={20} />, id: 'instagram' },
    { name: 'Saved', icon: <Bookmark size={20} />, id: 'contact' },
    { name: 'Contact', icon: <Zap size={20} />, id: 'contact' },
    { name: 'Resume', icon: <FileText size={20} />, path: '/resume' },
  ];

  const handleNavClick = (item: MenuItem) => {
    // Dispatch event to close any open modal
    window.dispatchEvent(new CustomEvent('close-modal'));

    if (item.path) {
      navigate(item.path);
      return;
    }

    if (item.id) {
      if (location.pathname !== '/') {
        navigate(`/#${item.id}`);
      } else {
        setTimeout(() => {
          const element = document.getElementById(item.id as string);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-[200] flex justify-center w-full px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          height: isVisible ? 'auto' : '52px',
          width: isVisible ? 'auto' : '280px',
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1],
          height: { duration: 0.8 },
          width: { duration: 0.8 }
        }}
        className={`
          pointer-events-auto
          flex flex-col items-center
          px-4 py-3
          rounded-[28px] border border-white/10
          transition-all duration-700 ease-out
          bg-black/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          ${isScrolled ? 'scale-95' : 'scale-100'}
          overflow-hidden
        `}
      >
        {/* Top Logo Section */}
        <motion.div 
          layout
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center w-full h-6 ${isVisible ? 'justify-center' : 'justify-between'}`}
        >
          <motion.div 
            layout 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick({ name: 'Home', icon: null, id: 'hero' })}
          >
            <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center border border-white/10">
              <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="text-[13px] font-medium text-white/90 font-poppins tracking-tight whitespace-nowrap">
              Suyash Shirsat
            </span>
          </motion.div>

          {!isVisible && (
            <motion.button
              onClick={() => handleNavClick({ name: 'Contact', icon: null, id: 'contact' })}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              Hire Me
            </motion.button>
          )}
        </motion.div>

        {/* Animated Content */}
        <motion.div
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40,
            height: isVisible ? 'auto' : 0,
            marginTop: isVisible ? 12 : 0
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-3" />

          {/* Navigation Icons */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="relative flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white transition-all rounded-xl hover:bg-white/5 group cursor-pointer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 12 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 backdrop-blur-md text-[10px] text-white rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/10 whitespace-nowrap font-poppins translate-y-2 group-hover:translate-y-0">
                  {item.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
