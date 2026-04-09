import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: 'Verified Customer', text: 'Great quality, good quantity, hygienic and if you want you can have a private cabin for yourself. All the staff are well mannered.', rating: 5, date: 'Recent', role: 'Verified Review' },
  { id: 2, name: 'Verified Customer', text: 'This is a hidden treasure, away from city and maddening crowd. Great tandoori items! Biryani is light and flavorful.', rating: 5, date: 'Recent', role: 'Verified Review' },
  { id: 3, name: 'Local Guide', text: 'The Blue Lagoon Mocktail and Tandoori Chicken are a must-try combo. Excellent family-centric ambiance.', rating: 5, date: '1 month ago', role: 'Local Guide' },
  { id: 4, name: 'Regular Guest', text: 'Budget-friendly and cozy. The private cabins make it a great destination dining spot near Diamond Harbour Road.', rating: 5, date: '2 months ago', role: 'Regular Guest' },
];

export default function Reviews() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-light mb-6 font-serif">A Taste of <span className="italic text-accent">Perfection</span></h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-xl font-medium">4.8 / 5</span>
            <span className="text-white/40 ml-2">from 240+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Review */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 md:p-14 relative group hover:bg-white/10 transition-colors duration-500"
          >
            <Quote size={60} className="text-white/10 absolute top-10 right-10 group-hover:text-accent/20 transition-colors duration-500" />
            <div className="flex text-accent mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90 mb-10">
              "{REVIEWS[0].text}"
            </p>
            <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
              <div>
                <h4 className="font-semibold text-lg">{REVIEWS[0].name}</h4>
                <p className="text-white/50 text-sm">{REVIEWS[0].role}</p>
              </div>
              <span className="text-sm text-white/30">{REVIEWS[0].date}</span>
            </div>
          </motion.div>

          {/* Smaller Reviews */}
          {REVIEWS.slice(1, 4).map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col hover:bg-white/10 transition-colors duration-500"
            >
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    stroke={i < review.rating ? "none" : "currentColor"} 
                  />
                ))}
              </div>
              <p className="text-lg text-white/80 mb-8 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-white/50 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
