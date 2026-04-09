"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { Sofa, ShieldCheck, Car, Bed, Grid } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sofa,
    title: "Sofás",
    description: "Limpeza técnica de todos os tipos de tecidos e veludos.",
  },
  {
    icon: ShieldCheck,
    title: "Impermeabilização",
    description: "Proteção contra líquidos e manchas com resina de nanotecnologia.",
  },
  {
    icon: Car,
    title: "Higienização Automotiva",
    description: "Bancos, teto e carpetes. Revitalize o interior do seu veículo.",
  },
  {
    icon: Bed,
    title: "Colchões",
    description: "Tratamento anti-ácaro intensivo para suas noites de sono.",
  },
  {
    icon: Grid,
    title: "Tapetes e Carpetes",
    description: "Remoção de sujidade pesada e odores de pets.",
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-spacing bg-white px-6">
      <div className="container mx-auto">
        <div className="mb-24 text-center lg:text-left">
          <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] mb-4">
            NOSSOS SERVIÇOS ELITE
          </Typography>
          <Typography variant="h2" className="font-bold tracking-tighter text-clinical-blue mb-6 max-w-2xl mx-auto lg:mx-0">
            Soluções de higienização <br/> <span className="text-clinical-red">com precisão clínica.</span>
          </Typography>
          <Typography variant="body" className="text-clinical-on-surface/50 max-w-xl mx-auto lg:mx-0">
             Equipamentos industriais de alta sucção com tecnologia alemã para máxima eficiência.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-clinical-surface p-8 md:p-10 rounded-3xl flex flex-col items-start gap-6 md:gap-8 border border-clinical-blue/5 shadow-sm hover:shadow-premium transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-clinical-blue text-white flex items-center justify-center group-hover:bg-clinical-red transition-colors duration-500 shadow-lg shadow-clinical-blue/10">
                <service.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-4">
                <Typography variant="h4" as="h3" className="font-bold text-clinical-blue">{service.title}</Typography>
                <Typography variant="body" className="text-clinical-on-surface/60 leading-relaxed">
                  {service.description}
                </Typography>
              </div>
              <button className="mt-auto flex items-center gap-2 text-clinical-blue font-bold tracking-wider uppercase text-[10px] group/btn">
                Solicitar via WhatsApp
                <span className="w-6 h-px bg-clinical-blue/20 group-hover/btn:w-10 transition-all"></span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
