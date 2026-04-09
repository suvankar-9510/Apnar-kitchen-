import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  return (
    <section id="contact" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 font-serif">
              Visit <span className="italic text-accent">Us</span>
            </motion.h2>
            
            <div className="space-y-10 mb-12">
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-full shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-wide">Location</h4>
                  <p className="text-white/60 leading-relaxed text-lg">
                    DAKSHINI Project, Diamond Harbour Rd<br />
                    Khariberia, West Bengal 743503
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-full shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-wide">Hours</h4>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Mon - Sun: 11:00 AM - 10:00 PM<br />
                    (Open all days)
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="bg-white/5 p-4 rounded-full shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 tracking-wide">Contact</h4>
                  <p className="text-white/60 leading-relaxed text-lg">
                    +91 62916 00855<br />
                    hello@apnarkitchen.com
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+916291600855" 
                className="px-8 py-4 bg-white text-black rounded-full font-medium text-center hover:bg-gray-200 transition-colors text-lg"
              >
                Call to Order
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Apnar+Kitchen,+Diamond+Harbour+Rd,+Khariberia,+West+Bengal+743503" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-center hover:bg-white/10 transition-colors text-lg"
              >
                Get Directions
              </a>
            </motion.div>
          </motion.div>
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl"
          >
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
            <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-white/10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
