import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Apnar Kitchen
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">Menu</a>
          <a href="#gallery" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">Gallery</a>
          <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest">Contact</a>
          <a href="#order" className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Order Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
