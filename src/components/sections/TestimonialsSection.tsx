"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendonça",
    role: "Pai de 2 filhos",
    content: "Meus filhos viviam com rinite atacada. Depois da higienização do sofá e tapetes pela Clean Lourenço, o ar da casa parece outro. Vale cada centavo pela saúde deles.",
    location: "Marília - SP"
  },
  {
    name: "Beatriz Oliveira",
    role: "Dona de Pets",
    content: "Tenho dois Golden Retrievers e já tinha aceitado que meu sofá teria cheiro de cachorro para sempre. O resultado foi impressionante: cheiro de novo e maciez restaurada.",
    location: "Marília - SP"
  },
  {
    name: "Carlos Eduardo",
    role: "Empresário",
    content: "Serviço de altíssimo nível. O sofá de veludo da minha sala estava muito encardido e eles conseguiram restaurar a cor original com uma precisão incrível.",
    location: "Marília - SP"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-spacing bg-clinical-surface px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] uppercase">
            Histórias de Renovação
          </Typography>
          <Typography variant="h2" className="text-clinical-blue font-bold tracking-tighter mt-4">
            O que dizem nossos <span className="text-clinical-red italic">clientes elite</span>
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-clinical-blue/5 relative group hover:shadow-premium transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-clinical-blue/5 group-hover:text-clinical-red/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-4 bg-clinical-red rounded-full"></div>)}
                </div>
                
                <Typography variant="body" className="text-clinical-on-surface/70 leading-relaxed italic font-medium">
                  &quot;{t.content}&quot;
                </Typography>
                
                <div className="pt-6 border-t border-clinical-blue/5">
                  <Typography variant="h4" as="h3" className="text-clinical-blue font-bold">{t.name}</Typography>
                  <Typography variant="caption" className="text-clinical-on-surface/40 uppercase font-extrabold tracking-tighter text-[9px]">
                    {t.role} • {t.location}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
