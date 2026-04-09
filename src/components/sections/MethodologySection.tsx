"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Téxtil",
    description: "Análise profunda do tecido e nível de sujidade para aplicação dos produtos químicos bio-biodegradáveis corretos."
  },
  {
    number: "02",
    title: "Extração de Alta Sucção",
    description: "Poderosa tecnologia industrial alemã que retira a sujeira encrustada e odores de dentro pra fora da espuma."
  },
  {
    number: "03",
    title: "Secagem Otimizada",
    description: "Método que garante a remoção de até 90% da umidade, permitindo o uso do estofado em tempo recorde."
  }
];

export const MethodologySection = () => {
  return (
    <section className="section-spacing bg-clinical-blue text-white px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Left: Interactive Image */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="lg:col-span-12 xl:col-span-6 relative order-2 xl:order-1"
            >
                <div className="relative rounded-[48px] overflow-hidden aspect-video xl:aspect-[4/5] shadow-3xl border-4 border-white/10 group">
                    <Image 
                        src="/images/cleaning_process.png" 
                        alt="Processo clínico de higienização - Clean Lourenço" 
                        title="Tecnologia de extração industrial profunda"
                        fill
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-10 -right-10 p-8 glass-clinical border border-white/10 rounded-[32px] hidden md:block">
                    <Typography variant="h3" as="span" className="text-clinical-red font-bold mb-0 block">8X</Typography>
                    <Typography variant="caption" className="text-white/50 uppercase font-bold tracking-widest text-[10px]">Mais potente que aspiradores comuns</Typography>
                </div>
            </motion.div>

            {/* Right: Technical Steps */}
            <div className="lg:col-span-12 xl:col-span-6 space-y-12 order-1 xl:order-2">
                <div className="space-y-4">
                    <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] mb-4">
                        TECNOLOGIA DE RESTAURAÇÃO
                    </Typography>
                    <Typography variant="h2" className="font-bold tracking-tighter text-white">
                        Como entregamos o <br/> <span className="text-clinical-red italic">resultado elite?</span>
                    </Typography>
                </div>

                <div className="space-y-16">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-8 relative group"
                        >
                            {/* Connector Line */}
                            {idx !== steps.length - 1 && (
                                <div className="absolute left-6 top-16 w-px h-12 bg-white/10"></div>
                            )}

                            <div className="shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-clinical-red font-black text-xs group-hover:bg-clinical-red group-hover:text-white transition-all">
                                {step.number}
                            </div>
                            <div className="space-y-3">
                                <Typography variant="h4" as="h3" className="text-white font-bold">{step.title}</Typography>
                                <Typography variant="body" className="text-white/40 leading-relaxed text-sm">
                                    {step.description}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
