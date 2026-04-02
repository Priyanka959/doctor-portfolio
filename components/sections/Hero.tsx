"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, ShieldCheck } from "lucide-react";
import { doctor } from "../../data/doctor";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FAFAFA]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-50 to-pink-50 rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-medical-light to-transparent rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content (Left) */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
        >
          <motion.h1 
            variants={item} 
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6"
          >
            {doctor.tagline.split('.')[0]}.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-medical-accent mt-2">
              Expert Care.
            </span>
          </motion.h1>

          <motion.p 
            variants={item} 
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Led by <b>{doctor.name}</b>. {doctor.subTagline}. Experience holistic, advanced treatments tailored precisely for your skin and hair health.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-gray-900/20">
              Book Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
              Explore Services
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div 
            variants={item}
            className="mt-12 lg:mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-2xl mx-auto lg:mx-0"
          >
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-teal-600">{doctor.experienceYears}</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-teal-600">{doctor.specialisationsCount}</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Specializations</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-teal-600">MD</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Certified Dermatologist</div>
            </div>
          </motion.div>

        </motion.div>

        {/* Visual / Image (Right) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex-1 relative w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto lg:mr-0 mt-8 lg:mt-0"
        >
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] rounded-[2rem] rounded-tl-[6rem] rounded-br-[6rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <Image 
              src={doctor.image} 
              alt={doctor.name} 
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700" 
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                <p className="font-serif font-bold text-gray-900 text-lg">{doctor.name}</p>
                <p className="text-teal-600 text-sm font-medium">{doctor.title.split(' | ')[0]}</p>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-12 -right-8 bg-white p-3 rounded-2xl shadow-xl shadow-teal-900/5 border border-gray-100 flex items-center justify-center hidden sm:flex"
          >
             <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
               <Award size={24} />
             </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -left-8 bg-white p-3 rounded-2xl shadow-xl shadow-teal-900/5 border border-gray-100 flex items-center justify-center hidden sm:flex"
          >
             <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
               <ShieldCheck size={24} />
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}