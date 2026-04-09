"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { ClinicalButton } from "@/components/ui/ClinicalButton";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-clinical-blue rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinical-red/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <Typography variant="display" as="h2" className="font-bold tracking-tighter leading-tight">
              Quer ver o <span className="text-clinical-red">resultado real</span> no seu sofá?
            </Typography>
            
            <Typography variant="h5" as="p" className="text-white/60 max-w-xl mx-auto mb-12">
              Peça seu orçamento gratuito agora pelo WhatsApp. Respondemos em menos de 10 minutos com a melhor solução para seu estofado.
            </Typography>

            <div className="flex flex-col items-center gap-6">
              <ClinicalButton 
                size="xl" 
                title="Solicitar orçamento agora via WhatsApp"
                className="bg-clinical-red hover-bg-clinical-magenta shadow-2xl shadow-clinical-red/40 px-12"
                onClick={() => window.open('https://wa.me/5514997670761', '_blank')}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                QUERO UM ORÇAMENTO
              </ClinicalButton>
              
              <Typography variant="caption" className="text-white/30 uppercase tracking-[0.2em] font-bold">
                Atendimento em Marília-SP e Região
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
