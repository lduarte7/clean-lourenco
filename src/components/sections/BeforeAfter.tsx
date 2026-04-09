"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";

export const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 bg-clinical-surface px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Typography variant="caption" className="mb-4">Prova Técnica</Typography>
          <Typography variant="h2" as="h2">
            Resultados que <span className="text-clinical-red">Surpreendem</span> o Olhar
          </Typography>
          <Typography variant="body" className="mt-4">
            Arraste para comparar a diferença entre um estofado contaminado e a restauração total da Clean Lourenço.
          </Typography>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Full Background) */}
          <div className="absolute inset-0">
            <Image 
              src="/images/hero_sofa.png" 
              alt="Sofa Clean" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 glass-clinical rounded-lg">
              <Typography variant="caption" className="text-white">Depois (Restauração)</Typography>
            </div>
          </div>

          {/* Before Image (Cropped by Slider) */}
          <div 
            className="absolute inset-0" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="/images/before-after.png" 
              alt="Sofa Dirty" 
              fill 
              className="object-cover grayscale"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg">
              <Typography variant="caption" className="text-white">Antes (Sujidade)</Typography>
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-clinical-blue rounded-full" />
                <div className="w-1 h-4 bg-clinical-blue rounded-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Verification Checklist below visual */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
           {[
             "Remoção de 99.9% dos ácaros",
             "Eliminação de manchas orgânicas",
             "Secagem ultra-rápida industrial"
           ].map((text) => (
             <div key={text} className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full bg-clinical-blue/10 flex items-center justify-center flex-shrink-0">
                 <div className="w-2 h-2 rounded-full bg-clinical-blue" />
               </div>
               <Typography variant="body-small" className="font-semibold">{text}</Typography>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
