"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import Image from "next/image";

const evidenceItems = [
  {
    title: "Restauração de Tecido",
    description: "Recuperação total do brilho e cor original do estofado.",
    image: "/images/before_after.png"
  },
  {
    title: "Extração de Sujidade",
    description: "Remoção de resíduos pesados que um aspirador comum não alcança.",
    image: "/images/extraction_water.png"
  },
  {
    title: "Higiene Biológica",
    description: "Eliminação de fungos e bactérias escondidos na espuma.",
    image: "/images/cleaning_process.png"
  }
];

export const EvidenceSection = () => {
  return (
    <section id="resultados" className="section-spacing bg-white px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-24">
            <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] mb-4">
                RESULTADOS COMPROVADOS
            </Typography>
            <Typography variant="h2" className="font-bold tracking-tighter text-clinical-blue mb-8">
                A prova está <span className="text-clinical-red italic">na água da extração.</span>
            </Typography>
            <Typography variant="h5" as="p" className="text-clinical-on-surface/50 max-w-2xl mx-auto text-pretty">
                O que removemos de um sofá que "parecia" limpo vai te surpreender. 
                A cor da água é o diagnóstico final da saúde do seu estofado.
            </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {evidenceItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-8 shadow-premium group-hover:shadow-premium-hover transition-all duration-700">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  title={`Resultado de ${item.title} - Clean Lourenço`}
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue/90 via-clinical-blue/20 to-transparent flex flex-col justify-end p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Typography variant="h4" as="h3" className="font-bold text-white mb-2">{item.title}</Typography>
                  <Typography variant="body" className="text-white/80 leading-relaxed font-medium">
                    {item.description}
                  </Typography>
                </div>
                
                {/* Always visible label for mobile Accessibility */}
                <div className="absolute top-6 left-6 px-4 py-2 glass-clinical rounded-full border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
                    Caso #{idx + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
