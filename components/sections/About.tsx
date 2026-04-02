"use client";

import { motion } from "framer-motion";
import { doctor } from "../../data/doctor";
import { GraduationCap, Hospital, Trophy, HeartPulse } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: GraduationCap,
      title: doctor.qualification,
      sub: doctor.qualificationFull,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: Hospital,
      title: `Specialization: ${doctor.specialties[0]}`,
      sub: 'Aesthetic, Trichology, Laser & Medical',
      color: "text-teal-500",
      bg: "bg-teal-50",
    },
    {
      icon: Trophy,
      title: doctor.affiliations[0].role,
      sub: `${doctor.affiliations[0].place} · ${doctor.affiliations[0].period}`,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      icon: HeartPulse,
      title: `${doctor.experienceYears} Years Experience`,
      sub: "Dedicated to providing exceptional care",
      color: "text-pink-500",
      bg: "bg-pink-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="pt-16 pb-16 md:pt-24 md:pb-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-light/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 text-teal-600 font-bold uppercase tracking-widest text-sm">Meet Your Doctor</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Dedicated to Your Health & Wellbeing
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {doctor.bio}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.title} 
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-teal-900/5 border border-gray-100 flex flex-col items-center text-center group min-w-[280px] w-[80vw] sm:min-w-0 sm:w-auto shrink-0 snap-center relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.bg} ${feature.color} relative z-10`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-3 relative z-10">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{feature.sub}</p>
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl ${feature.bg}`}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
