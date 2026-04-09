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
    <section className="py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center bg-black">
      {/* Blurred Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" 
          alt="Restaurant Background" 
          className="w-full h-full object-cover filter blur-xl scale-110 opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 w-fit mx-auto px-6 py-3 rounded-full shadow-sm">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.8 / 5</span>
            <span className="text-white/60 ml-2 font-medium">from 240+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Large Review */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 relative group hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
          >
            <Quote size={80} className="text-white/10 absolute top-10 right-10 group-hover:text-accent/20 group-hover:scale-110 transition-all duration-500" />
            <div className="flex text-accent mb-8 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/90 mb-10 font-medium">
              "{REVIEWS[0].text}"
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl border border-white/20">
                  {REVIEWS[0].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{REVIEWS[0].name}</h4>
                  <p className="text-white/60 text-sm font-medium">{REVIEWS[0].role}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-white/50 bg-white/10 px-4 py-2 rounded-full border border-white/10">{REVIEWS[0].date}</span>
            </div>
          </motion.div>

          {/* Smaller Reviews */}
          {REVIEWS.slice(1, 4).map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 flex flex-col hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] relative group"
            >
              <Quote size={40} className="text-white/5 absolute top-8 right-8 group-hover:text-accent/10 transition-colors duration-500" />
              <div className="flex text-accent mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    stroke={i < review.rating ? "none" : "currentColor"} 
                  />
                ))}
              </div>
              <p className="text-lg text-white/80 mb-8 flex-grow leading-relaxed font-medium relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold border border-white/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-white/60 text-xs font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
