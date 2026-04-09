import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function DishOfTheDay() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl"
      >
        {/* Text Content */}
        <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 w-fit mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">Dish of the Day</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Tandoori Chicken
          </h2>
          
          <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed font-light">
            Classic charcoal-grilled chicken marinated in yogurt and secret spices. A must-try combo with our Blue Lagoon Mocktail.
          </p>
          
          <div className="flex items-center gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-sm text-white/50 line-through font-medium">₹450</span>
              <span className="text-4xl font-semibold text-accent">₹340</span>
            </div>
            <div className="h-12 w-[1px] bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Half Portion</span>
              <span className="text-xs text-white/50 mt-1">Signature Dish</span>
            </div>
          </div>
          
          <button className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all w-fit">
            Order Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full relative overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?q=80&w=1000&auto=format&fit=crop" 
            alt="Tandoori Chicken" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay to ensure text readability if it overlaps on smaller screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block w-32" />
        </div>
      </motion.div>
    </section>
  );
}
