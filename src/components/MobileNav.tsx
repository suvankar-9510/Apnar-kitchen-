import { Phone, MapPin, Utensils } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        <a href="tel:+916291600855" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-black">
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <a href="#menu" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-black relative">
          <div className="absolute -top-5 bg-black text-white p-3 rounded-full shadow-lg">
            <Utensils size={24} />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider mt-6">Menu</span>
        </a>
        
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-black">
          <MapPin size={20} className="mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
}
