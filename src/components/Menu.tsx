import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Heart } from 'lucide-react';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Tandoori Chicken', description: 'Classic charcoal-grilled chicken marinated in yogurt and spices.', price: '₹340', category: 'Starters & Kebabs', image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?q=80&w=800&auto=format&fit=crop' },
  { id: '2', name: 'Fish Fry (Bhetki)', description: 'Kolkata style bhetki fish fry served with kasundi.', price: '₹250', category: 'Starters & Kebabs', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop' },
  { id: '3', name: 'Mutton Biryani', description: 'Aromatic basmati rice cooked with tender mutton and spices.', price: '₹330', category: 'Main Course', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop' },
  { id: '4', name: 'Butter Chicken', description: 'Rich and creamy tomato gravy with tender chicken pieces.', price: '₹375', category: 'Main Course', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
  { id: '5', name: 'Chili Chicken', description: 'Spicy and tangy Indo-Chinese style chicken.', price: '₹250', category: 'Chinese', image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=800&auto=format&fit=crop' },
  { id: '6', name: 'Mutton Thali', description: 'Authentic Bengali thali featuring slow-cooked mutton.', price: '₹550', category: 'Bengali Thalis', image: 'https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?q=80&w=800&auto=format&fit=crop' },
  { id: '7', name: 'Masala Dosa', description: 'Crispy crepe filled with spiced potato masala.', price: '₹125', category: 'South Indian', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop' },
  { id: '8', name: 'Blue Lagoon Mocktail', description: 'Refreshing signature blue curacao mocktail.', price: '₹120', category: 'Beverages', image: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=800&auto=format&fit=crop' },
];

const CATEGORIES = ['All', 'Starters & Kebabs', 'Main Course', 'Chinese', 'Bengali Thalis', 'South Indian', 'Beverages'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-32 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[#fdfbf7] -z-20"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-200/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob -z-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000 -z-10"></div>

      <div className="text-center mb-16 relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">Delicious Food</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">We make fresh and healthy food waiting for you.</p>
      </div>

      {/* Category Tabs - Glassmorphism */}
      <div className="flex flex-wrap justify-center gap-3 mb-20 relative z-10 w-full max-w-7xl mx-auto">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
              activeCategory === category 
                ? 'bg-black/90 text-white border-black shadow-lg shadow-black/20' 
                : 'bg-white/40 text-gray-700 border-white/60 hover:bg-white/60 hover:shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid - Floating Plates */}
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative rounded-[2.5rem] p-[2px] bg-gradient-to-br from-amber-500/30 via-white/50 to-orange-500/30 hover:from-amber-500/60 hover:to-orange-500/60 transition-all duration-500 group cursor-pointer shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative bg-white/60 backdrop-blur-xl rounded-[calc(2.5rem-2px)] p-6 pt-24 h-full flex flex-col transition-colors duration-500 group-hover:bg-white/80">
                  {/* Floating Circular Image */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full shadow-2xl overflow-hidden border-4 border-white/80 group-hover:-translate-y-4 transition-transform duration-500 z-10">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-center flex flex-col h-full">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-tight">{item.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-6 font-medium leading-relaxed flex-grow">{item.description}</p>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-black/5">
                      <span className="font-bold text-xl text-gray-900">{item.price}</span>
                      <div className="flex gap-2">
                        <button 
                          className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
                          onClick={(e) => { e.stopPropagation(); /* Add to fav logic */ }}
                        >
                          <Heart size={18} />
                        </button>
                        <button 
                          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md"
                          onClick={(e) => { e.stopPropagation(); /* Add to cart logic */ }}
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup - Glassmorphism */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-40%' }}
              className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-2xl border border-white/50 rounded-[3rem] overflow-hidden z-50 shadow-2xl p-8"
              style={{ x: '-50%', y: '-50%' }}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 bg-black/5 hover:bg-black/10 text-gray-800 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-48 h-48 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white mb-8 relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{selectedItem.name}</h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{selectedItem.description}</p>
                
                <div className="flex items-center justify-between bg-white/60 rounded-full p-2 pl-6 border border-white shadow-sm">
                  <span className="text-2xl font-bold text-gray-900">{selectedItem.price}</span>
                  <button className="flex items-center gap-2 py-3 px-6 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart <Plus size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
