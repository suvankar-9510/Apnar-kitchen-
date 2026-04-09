import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y, scale }}
      >
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
          alt="Delicious food" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        style={{ opacity, y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Apnar Kitchen
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Home-style food, elevated taste.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#menu" 
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-white/90 transition-colors text-center"
          >
            View Menu
          </a>
          <a 
            href="#order" 
            className="px-8 py-4 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/30 font-medium text-lg hover:bg-black/70 transition-colors text-center"
          >
            Order Now
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/30 font-medium text-lg hover:bg-black/70 transition-colors text-center"
          >
            Book a Table
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
