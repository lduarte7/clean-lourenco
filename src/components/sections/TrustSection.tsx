"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { ShieldAlert, Bug } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Bug,
    title: "Ácaros",
    description: "Invisíveis a olho nu, mas causadores de 80% das alergias respiratórias.",
    color: "bg-red-50 text-clinical-red"
  },
  {
    icon: ShieldAlert,
    title: "Bactérias",
    description: "Colônias que se proliferam em ambientes úmidos e com resíduos orgânicos.",
    color: "bg-blue-50 text-clinical-blue"
  }
];

export const TrustSection = () => {
  return (
    <section className="section-spacing bg-white px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="w-16 h-1 bg-clinical-red mx-auto mb-10 rounded-full"></div>
          <Typography variant="h2" className="font-bold tracking-tighter text-clinical-blue mb-8">
            Uma questão de saúde, <br /> <span className="text-clinical-red italic">não apenas de aparência.</span>
          </Typography>
          <Typography variant="h5" as="p" className="text-clinical-on-surface/50 leading-relaxed font-medium text-pretty">
            Poeira, suor, células mortas e restos de alimentos penetram nas fibras dos estofados e criam 
            o ambiente perfeito para microrganismos. Nossa higienização de estofados remove 
            agentes causadores de alergias direto na raiz.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {trustItems.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-clinical-surface p-8 md:p-12 rounded-[32px] md:rounded-[40px] flex flex-col items-center text-center space-y-6 md:space-y-8 border border-clinical-blue/5 shadow-sm hover:shadow-premium transition-all duration-500"
            >
              <div className={cn("w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg", item.color)}>
                <item.icon className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true" />
              </div>
              <div className="space-y-4">
                <Typography variant="h3" className="font-bold text-clinical-blue">{item.title}</Typography>
                <Typography variant="body" className="text-clinical-on-surface/50 max-w-xs leading-relaxed">
                  {item.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
