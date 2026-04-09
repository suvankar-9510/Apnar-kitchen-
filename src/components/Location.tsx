import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">Visit Us</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    DAKSHINI Project, Diamond Harbour Rd<br />
                    Khariberia, West Bengal 743503
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Hours</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Mon - Sun: 11:00 AM - 10:00 PM<br />
                    (Open all days)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Contact</h4>
                  <p className="text-gray-400 leading-relaxed">
                    +91 62916 00855<br />
                    hello@apnarkitchen.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+916291600855" 
                className="px-8 py-4 bg-white text-black rounded-full font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Call to Order
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-center hover:bg-white/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.3343992771!2d88.26495089674032!3d22.53540637454051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
