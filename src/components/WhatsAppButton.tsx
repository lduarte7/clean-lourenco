"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5514997670761"; // Based on Header.tsx
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/30 group"
      aria-label="Falar no WhatsApp"
      title="Fale com a Clean Lourenço no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden"></div>
      <MessageCircle className="w-8 h-8 relative z-10" strokeWidth={2.5} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-white text-clinical-on-surface text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Fale Conosco
      </div>
    </motion.a>
  );
};
