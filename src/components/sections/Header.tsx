"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ClinicalButton } from "@/components/ui/ClinicalButton";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#services' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre', href: '#sobre' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={cn(
        "container mx-auto px-4 py-3 transition-all duration-500",
        isScrolled ? "max-w-5xl" : "max-w-full"
      )}>
        <nav className={cn(
          "flex items-center justify-between transition-all duration-500",
          isScrolled 
            ? "bg-white shadow-premium rounded-[24px] md:rounded-[32px] px-4 md:px-6 py-2 border border-clinical-blue/5" 
            : "bg-white/50 backdrop-blur-md rounded-2xl px-4 py-2 border-white/20"
        )}>
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="relative w-[100px] h-[100px]">
              <Image 
                src="/images/drclean-claro.png" 
                alt="Clean Lourenço Logo" 
                title="Clean Lourenço - Higienização de Estofados"
                fill 
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                title={`Ir para seção ${item.label}`}
                className="text-sm font-bold text-clinical-blue hover:text-clinical-red transition-colors relative group py-2 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clinical-red rounded-full transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
             <a 
               href="tel:5514997670761" 
               title="Ligar para Clean Lourenço"
               className="hidden lg:flex items-center gap-2 text-sm font-bold text-clinical-blue hover:text-clinical-red transition-colors border-r border-clinical-blue/10 pr-6 mr-2 whitespace-nowrap"
             >
               <Phone className="w-4 h-4" />
               (14) 99767-0761
             </a>
             
             <ClinicalButton 
               size="md" 
               title="Solicitar orçamento via WhatsApp"
               className="hidden sm:flex bg-clinical-blue text-white rounded-xl shadow-lg shadow-clinical-blue/10 hover:bg-clinical-on-surface h-11 px-6"
               onClick={() => window.open('https://wa.me/5514997670761', '_blank')}
             >
               Orçamento
             </ClinicalButton>

             {/* MOBILE MENU TOGGLE */}
             <button 
               className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-clinical-blue/5 text-clinical-blue"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               aria-label="Menu"
               title={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
             >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 px-6 py-4"
          >
            <div className="bg-white rounded-3xl shadow-premium border border-clinical-blue/5 p-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-clinical-blue py-3 border-b border-clinical-blue/5 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:5514997670761" className="flex items-center justify-center gap-2 text-clinical-blue font-bold py-2">
                  <Phone className="w-4 h-4" />
                  (14) 997-670-761
                </a>
                <ClinicalButton 
                  size="xl" 
                  className="w-full bg-clinical-red text-white"
                  onClick={() => window.open('https://wa.me/5514997670761', '_blank')}
                >
                  Pedir Orçamento Agora
                </ClinicalButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
