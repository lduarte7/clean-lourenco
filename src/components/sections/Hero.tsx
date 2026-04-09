"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { ClinicalButton } from "@/components/ui/ClinicalButton";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-clinical-surface px-4 md:px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-clinical-blue/[0.02] transform origin-top-right"></div>

      {/* Floating Particles (Air Purity Visual) - Client Only to avoid hydration mismatch */}
      {isMounted && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-clinical-blue/10 rounded-full hidden lg:block"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 1000,
            opacity: 0
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 md:gap-12 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <div className="space-y-6 md:space-y-10">
              {/* VIBRANT RED BADGE - Reference Style */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-clinical-red text-white rounded-full shadow-lg shadow-clinical-red/20 mx-auto lg:mx-0">
                <Typography variant="caption" className="font-black tracking-[0.15em] text-[10px] uppercase text-white">
                  Protocolo de Higiene Hospitalar
                </Typography>
              </div>

              {/* MAIN HEADLINE */}
              <Typography variant="display" className="font-bold leading-[1.05] tracking-tight text-clinical-blue">
                Limpeza de Estofados <br className="hidden sm:block" /> em Marília
              </Typography>

              {/* DESCRIPTION / SUBTITLE */}
              <Typography variant="h5" as="p" className="text-clinical-on-surface/50 max-w-2xl leading-relaxed font-medium text-pretty mx-auto lg:mx-0 text-lg md:text-xl">
                O alívio de uma casa verdadeiramente limpa. Proteja quem você ama com a higienização que devolve o <span className="text-clinical-blue font-bold">toque de novo</span> aos seus estofados e a <span className="text-clinical-red font-bold">pureza ao ar</span> da sua casa.
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 justify-center lg:justify-start mt-4">
              {/* PRIMARY ACTION: RED PILL BUTTON */}
              <ClinicalButton
                size="xl"
                title="Solicitar orçamento gratuito via WhatsApp"
                className="w-full sm:w-auto bg-clinical-red hover:bg-clinical-on-surface text-white shadow-2xl shadow-clinical-red/20 min-w-[240px] hover:scale-105 transition-all text-sm md:text-base font-bold py-6 rounded-full"
                onClick={() => window.open('https://wa.me/5514997670761', '_blank')}
              >
                Solicitar Diagnóstico
              </ClinicalButton>

              {/* SECONDARY ACTION: "WATCH DEMO" STYLE */}
              <div 
                className="flex items-center gap-4 group cursor-pointer"
                title="Ver como funciona nossa higienização"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-clinical-blue/20 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500 animate-pulse"></div>
                  <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-clinical-red z-10 group-hover:bg-clinical-red group-hover:text-white transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-0.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <Typography variant="body" className="font-bold text-clinical-blue/60 group-hover:text-clinical-blue transition-colors text-sm uppercase tracking-widest">
                  Ver como funciona
                </Typography>
              </div>
            </div>
          </motion.div>

          {/* IMAGE / VISUAL - Laboratory/Clinical Context */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full relative px-4 md:px-0"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-clinical-blue/10 rounded-full blur-[100px] opacity-50"></div>

              <div className="relative rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl border-[12px] md:border-[20px] border-white aspect-[4/5] lg:aspect-[4/5] xl:aspect-square max-h-[700px] mx-auto group">
                <Image
                  src="/images/happy_family.png"
                  alt="Família feliz em sofá limpo - Clean Lourenço Marília"
                  title="Conforto e saúde para sua família em Marília"
                  fill
                  className="object-cover scale-110 group-hover:scale-105 transition-transform duration-[3s]"
                  priority
                />

                {/* Overlay: Clinical Filter effect */}
                <div className="absolute inset-0 bg-clinical-blue/5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue/60 via-transparent to-transparent opacity-60"></div>

                {/* Float Badge 1: Accuracy */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-5 glass-clinical border border-white/30 rounded-3xl shadow-2xl backdrop-blur-2xl hidden md:block"
                >
                  <div className="flex flex-col gap-1">
                    <Typography variant="h4" as="span" className="text-white font-bold mb-0">99.9%</Typography>
                    <Typography variant="caption" className="text-white/60 uppercase font-extrabold tracking-tighter text-[9px]">Pureza Certificada</Typography>
                  </div>
                </motion.div>

                {/* Float Badge 2: Restoration Info */}
                <div className="absolute bottom-10 left-10 right-10 p-6 md:p-8 glass-clinical border border-white/20 rounded-[32px] shadow-2xl flex items-center gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-clinical-red flex items-center justify-center shrink-0 shadow-lg shadow-clinical-red/20">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                  </div>
                  <div className="space-y-1">
                    <Typography variant="body-small" className="text-white font-bold leading-tight text-sm md:text-base">
                      Restauração Ativa em Marília
                    </Typography>
                    <Typography variant="caption" className="text-white/40 block">
                      Protocolos exclusivos de remoção de manchas e odores.
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Subtle Texture Overlay (Visualizing fibers) */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-3xl shadow-xl p-4 hidden xl:flex items-center justify-center border border-clinical-blue/5 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/texture.png"
                    alt="Fiber detail"
                    title="Detalhe das fibras do tecido preservadas"
                    fill
                    className="object-cover"
                  />
                </div>
                <Typography variant="caption" className="text-clinical-blue/40 font-black text-center leading-none text-[8px] uppercase tracking-tighter">
                  Textura <br /> Preservada
                </Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
