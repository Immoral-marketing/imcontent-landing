"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Campaña Digital Inmobiliaria",
    duration: "2:30"
  },
  {
    id: 2,
    title: "Video Corporativo Tech",
    duration: "1:45"
  },
  {
    id: 3,
    title: "Contenido Redes Sociales",
    duration: "0:30"
  },
  {
    id: 4,
    title: "Spot Publicitario",
    duration: "1:00"
  }
];

export function AIBanner() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 lg:py-32 bg-gradient-to-br from-black via-[#1a0a2e] to-black text-white overflow-hidden z-10"
      style={{ position: 'relative' }}
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9520ea]/10 rounded-full blur-3xl"></div>
      
      <motion.div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative" style={{ opacity, position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <motion.span
            className="text-[#9520ea] tracking-widest text-sm uppercase mb-4 block relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            Nuestro Trabajo
          </motion.span>
          <motion.h2
            className="text-[48px] font-black text-white mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            Producción audiovisual con{' '}
            <span className="bg-gradient-to-r from-[#9520ea] to-[#c060ff] bg-clip-text text-transparent">
              IA
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto font-light relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            Diseño y vídeo creados con IA para producir mejor, más rápido y sin comprometer la identidad de marca.
          </motion.p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className="max-w-[1400px] mx-auto relative"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ scale, position: 'relative' }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#9520ea]/20 shadow-2xl shadow-[#9520ea]/10">
            <iframe
              src="https://kinescope.io/embed/uyJ64tuVvxztNjpvBbNjUt?autoplay=1&muted=1&loop=1&controls=1"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              className="absolute inset-0 w-full h-full"
              title="AI Production Video"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
