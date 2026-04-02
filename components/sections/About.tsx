"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { doctor } from "../../data/doctor";
import { GraduationCap, Hospital, Trophy } from "lucide-react";

export default function About() {
  const features = [
    {
      icon:  GraduationCap,
      title: doctor.qualification,
      sub:   doctor.qualificationFull,
    },
    {
      icon:  Hospital,
      title: `Specialization: ${doctor.specialties[0]} & more`,
      sub:   'Aesthetic, Trichology, Laser & Medical Dermatology',
    },
    {
      icon:  Trophy,
      title: doctor.affiliations[0].role,
      sub:   `${doctor.affiliations[0].place} · ${doctor.affiliations[0].period}`,
    },
  ];

  return (
    <section id="about" className="pt-24 pb-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border-8 border-white shadow-2xl max-w-xs md:max-w-md mx-auto">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
              </div>

            <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-5 rounded-2xl shadow-xl border-l-4 border-medical-accent">
              <p className="font-serif font-bold text-xl text-medical-dark">{doctor.experienceYears} Years</p>
              <p className="text-gray-500 text-sm font-medium">in Practice</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-2 text-teal-500 font-bold uppercase tracking-widest text-sm">About Me</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-dark mb-6 leading-tight">
              Dedicated to Your Health & Wellbeing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {doctor.bio}
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-medical-light/50 transition-colors border border-transparent hover:border-gray-100">
                    <div className="bg-medical-light p-3 rounded-lg text-medical-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-medical-dark text-lg">{feature.title}</h4>
                      <p className="text-gray-600">{feature.sub}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
