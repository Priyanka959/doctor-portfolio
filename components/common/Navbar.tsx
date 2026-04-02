"use client";

import { motion } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";
import { useState, useEffect } from "react";
import { doctor } from "../../data/doctor";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Contact"];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id.toLowerCase());
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-md bg-white/95 border-b border-gray-100 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
          <Stethoscope className="text-medical-accent" size={28} />
          <div className="flex flex-col">
            <span className="text-medical-primary font-serif md:text-2xl text-xl font-bold leading-tight">Dr. Snigdha Hegde</span>
            <span className="text-gray-500 text-xs md:text-sm hidden sm:block">Dermatologist</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-gray-700 hover:text-medical-accent transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-teal-400 to-medical-accent text-white px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-left py-2 text-gray-700 font-medium hover:text-medical-accent"
            >
              {link}
            </button>
          ))}
          <button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-teal-400 to-medical-accent text-white px-6 py-3 rounded-full w-full font-medium">
            Book Appointment
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}