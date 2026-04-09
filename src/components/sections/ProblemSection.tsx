"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldAlert, Activity, TrendingDown, Wind } from "lucide-react";

const problems = [
  {
    icon: Activity,
    title: "Crises Alérgicas",
    description: "Ácaros e bactérias acumulados são gatilhos invisíveis para rinite, asma e bronquite na sua família.",
  },
  {
    icon: TrendingDown,
    title: "O 'Efeito Lixa'",
    description: "Poeira profunda corta as fibras do tecido a cada vez que você senta, destruindo o móvel por dentro.",
  },
  {
    icon: Wind,
    title: "Odores Persistentes",
    description: "Suor e umidade criam biofilmes nas camadas profundas da espuma que nenhum perfume mascara.",
  },
  {
    icon: ShieldAlert,
    title: "Risco Bacteriológico",
    description: "Restos de pele e resíduos orgânicos transformam seu estofado em um criadouro de microrganismos.",
  }
];

export const ProblemSection = () => {
  return (
    <section className="section-spacing bg-clinical-surface overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] uppercase">
              O Perigo Invisível
            </Typography>
            <Typography variant="h2" className="text-clinical-blue font-bold tracking-tighter leading-tight">
              Seu refúgio pode estar <span className="text-clinical-red italic">adoecendo</span> sua família.
            </Typography>
            
            <div className="space-y-8 mt-12">
              {problems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-clinical-red shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <Typography variant="h4" as="h3" className="text-clinical-blue font-bold text-lg">{item.title}</Typography>
                    <Typography variant="body" className="text-clinical-on-surface/50 text-sm leading-relaxed">
                      {item.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 relative">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[700px] w-full">
              {/* Main Image: Baby on Carpet */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute top-0 right-0 w-4/5 h-[85%] rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-white shadow-2xl z-20"
              >
                <Image 
                  src="/images/baby_carpet.png"
                  alt="Bebê brincando em ambiente seguro e higienizado"
                  title="Segurança para bebês em tapetes higienizados"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-clinical-blue/20 to-transparent"></div>
              </motion.div>

              {/* Secondary Image: Pet on sofa */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-[32px] md:rounded-[48px] overflow-hidden border-8 border-white shadow-2xl z-30"
              >
                <Image 
                  src="/images/pet_sofa.png"
                  alt="Pet descansando em sofá limpo"
                  title="Conforto para pets sem odores ou bactérias"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-clinical-red/5"></div>
              </motion.div>

              {/* Abstract decorative element */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-clinical-blue/5 rounded-full blur-[80px] -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-clinical-red/5 rounded-full blur-[100px] -z-10"></div>
            </div>

            {/* Floating Solution Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-1/4 p-6 glass-clinical border border-white/20 rounded-3xl shadow-2xl z-40 hidden md:block max-w-[240px]"
            >
              <Typography variant="body-small" className="text-white font-bold leading-tight">
                &quot;Nossos protocolos eliminam 99.9% destes riscos na primeira sessão.&quot;
              </Typography>
              <div className="mt-3 flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-clinical-red"></div>)}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
