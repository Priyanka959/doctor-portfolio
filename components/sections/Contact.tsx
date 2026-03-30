"use client";

import { motion } from "framer-motion";
import { contactInfo } from "../../data/contact";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            We're Here to Help
          </h2>
          <p className="text-gray-600 text-lg">Have a question or want to book an appointment? Reach out to us directly or visit our clinic.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col h-full"
          >
            <div className="space-y-4 flex-grow">
              {[
                { icon: MapPin, title: "Location", value: contactInfo.address.full },
                { icon: Phone, title: "Phone", value: contactInfo.phone },
                { icon: Mail, title: "Email", value: contactInfo.email },
                { icon: Clock, title: "Open Hours", value: contactInfo.hours.weekdays }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={contactInfo.cta.primaryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gray-900 text-white font-bold text-xl hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-900/20 group"
            >
              <Calendar className="transition-transform group-hover:scale-110" />
              {contactInfo.cta.primaryText}
            </a>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] lg:h-[100%] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white relative"
          >
            <iframe
              src={contactInfo.mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}