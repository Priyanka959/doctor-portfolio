"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "../../data/contact";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={`https://wa.me/${contactInfo.whatsappNumber}?text=Hello%20Dr.%20Snigdha%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Skin%20Code.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow relative"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle size={28} className="relative z-10" />
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
          className="overflow-hidden whitespace-nowrap font-medium relative z-10"
        >
          Chat with us
        </motion.span>
      </motion.a>
    </div>
  );
}