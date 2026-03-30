"use client";

import { motion } from "framer-motion";
import { doctor } from "../../data/doctor";

export default function Highlights() {
  return (
    <section className="bg-medical-highlight py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {[
            { value: 9,   suffix: '+',     label: 'Years of Experience' },
            { value: 12,  suffix: '+',     label: 'Specializations' },
            { value: 7,   suffix: ' days', label: 'Open Every Week' },
            { value: 100, suffix: '%',     label: 'Personalized Care' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold font-serif text-white mb-2 relative inline-block">
                {stat.value}{stat.suffix}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </div>
              <p className="text-[#94C5F8] font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}