"use client";

import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "../../data/gallery";
import { useState } from "react";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";

const filters = [
  { label: 'All',        value: 'all'        },
  { label: 'Clinic',     value: 'clinic'      },
  { label: 'Team',       value: 'team'        },
  { label: 'Treatments', value: 'treatments'  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === "all" ? galleryItems : galleryItems.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-2">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-dark mb-8">
            Life at ProHealth
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 relative">
            {filters.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                  filter === cat.value ? "text-white" : "text-gray-600 hover:text-medical-primary"
                }`}
              >
                {filter === cat.value && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-medical-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/90 via-medical-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="w-10 h-10 bg-medical-accent rounded-full flex items-center justify-center text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus size={20} />
                  </div>
                  <h4 className="text-white font-serif font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.caption}</h4>
                  <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={36} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length) }}
            className="absolute left-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronLeft size={48} />
          </button>
          
          <img src={filteredImages[lightboxIndex].src} alt={filteredImages[lightboxIndex].caption} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
          
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % filteredImages.length) }}
            className="absolute right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronRight size={48} />
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="font-serif text-xl">{filteredImages[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}