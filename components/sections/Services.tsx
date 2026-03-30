"use client";

import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-2">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-dark mb-4">
            Expert Medical Care
          </h2>
          <p className="text-gray-600">Comprehensive healthcare services tailored to your individual needs, delivered with compassion and excellence.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, i) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-medical-accent/30 transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-medical-light rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-medical-light rounded-xl flex items-center justify-center text-medical-primary mb-4 md:mb-6 group-hover:text-medical-accent transition-colors">
                    <motion.div whileHover={{ rotate: 5 }}>
                      <span className="text-3xl">{service.icon}</span>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-base md:text-xl font-serif font-bold text-medical-dark mb-2 md:mb-3 leading-tight group-hover:text-medical-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-3 md:line-clamp-3">
                    {service.shortDesc}
                  </p>
                  
                  <div className="flex items-center text-[10px] md:text-sm font-semibold text-medical-primary group-hover:text-medical-accent uppercase tracking-wider">
                    Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}