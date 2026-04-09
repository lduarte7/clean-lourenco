"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinical-on-surface text-white pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="relative w-40 h-16">
                <Image 
                  src="/images/drclean-transparente.png" 
                  alt="Clean Lourenço Logo" 
                  title="Clean Lourenço - Higienização Profissional"
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <Typography variant="body-small" className="text-white/40 leading-relaxed">
              Especialistas em higienização e impermeabilização de estofados em Marília-SP. 
              Tecnologia, saúde e conforto para o seu lar.
            </Typography>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/CLEANLOURENCO?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Siga a Clean Lourenço no Facebook"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-clinical-red transition-all duration-300 group"
              >
                <svg 
                  className="w-4 h-4 fill-white group-hover:fill-white transition-colors" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/cleanlourenco/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Siga a Clean Lourenço no Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-clinical-red transition-all duration-300 group"
              >
                <svg 
                  className="w-4 h-4 fill-none stroke-white group-hover:stroke-white transition-colors" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <Typography variant="h6" as="h3" className="font-bold">Nossos Serviços</Typography>
            <ul className="space-y-4">
              {["Limpeza de Sofás", "Higienização de Colchões", "Limpeza de Tapetes", "Impermeabilização", "Limpeza Automotiva"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    title={`Ver mais sobre ${item}`}
                    className="text-sm text-white/40 hover:text-clinical-red transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <Typography variant="h6" as="h3" className="font-bold">Atendimento</Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/40">
                <Phone className="w-4 h-4 text-clinical-red" />
                <Typography variant="body-small" className="text-white/80">(14) 99767-0761</Typography>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <MapPin className="w-4 h-4 text-clinical-red" />
                <Typography variant="body-small" className="text-white/80">Marília, SP - Delivery</Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20">
          <Typography variant="caption" className="text-[10px]">
             © {currentYear} Clean Lourenço Delivery. Todos os direitos reservados.
          </Typography>
          <div className="flex gap-8">
            <Typography variant="caption" className="text-[10px] cursor-pointer hover:text-white transition-colors" title="Ler Políticas de Privacidade">Políticas de Privacidade</Typography>
            <Typography variant="caption" className="text-[10px] cursor-pointer hover:text-white transition-colors" title="Ler Termos de Uso">Termos de Uso</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
