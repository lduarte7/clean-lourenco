"use client";

import React, { useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora o serviço?",
    answer: "Um sofá médio leva em média de 1h30 a 2h30 para uma higienização completa e profunda. O tempo varia de acordo com o nível de sujidade e as dimensões do estofado."
  },
  {
    question: "Em quanto tempo o sofá fica seco?",
    answer: "Graças à nossa tecnologia de extração de alta potência, removemos até 90% da umidade. Dependendo do tecido e da ventilação do local, a secagem total ocorre entre 4 a 12 horas."
  },
  {
    question: "Os produtos são seguros para pets e crianças?",
    answer: "Absolutamente. Utilizamos apenas produtos biodegradáveis, bactericidas e atóxicos que possuem certificação de segurança. Não deixam resíduos químicos nocivos após o processo."
  },
  {
    question: "Vocês atendem em domicílio em Marília?",
    answer: "Sim! Atendemos em toda Marília e cidades vizinhas. Nossa equipe leva todo o laboratório móvel até você, sem necessidade de retirar o móvel do lugar."
  },
  {
    question: "A impermeabilização altera a cor ou o toque do tecido?",
    answer: "Não. Nossa resina utiliza nanotecnologia que envolve as fibras individualmente, mantendo a porosidade, a cor e a maciez original do sofá, apenas criando uma barreira invisível contra líquidos."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-spacing bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-2xl bg-clinical-red/10 flex items-center justify-center text-clinical-red">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
          <Typography variant="caption" className="text-clinical-red font-bold tracking-[0.2em] uppercase">
             Transparência Total
          </Typography>
          <Typography variant="h2" className="text-clinical-blue font-bold tracking-tighter">
            Dúvidas Frequentes
          </Typography>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-[32px] transition-all duration-300 ${openIndex === idx ? 'border-clinical-red bg-clinical-surface' : 'border-clinical-blue/10 bg-white hover:border-clinical-blue/30'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4"
              >
                <Typography variant="h4" as="h3" className={`font-bold text-sm md:text-lg ${openIndex === idx ? 'text-clinical-blue' : 'text-clinical-blue/70'}`}>
                  {faq.question}
                </Typography>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-clinical-red' : 'text-clinical-blue/30'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0">
                      <div className="w-full h-px bg-clinical-red/10 mb-6"></div>
                      <Typography variant="body" className="text-clinical-on-surface/60 leading-relaxed">
                        {faq.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
