"use client";
import { motion } from 'motion/react';

const steps = [
  'Entendemos la marca y su contexto',
  'Definimos una línea creativa clara',
  'Diseñamos contenido con intención',
  'Ajustamos y evolucionamos el sistema visual',
];

export function HowWeDoIt() {
  return (
    <section className="py-24 lg:py-32 bg-[#2a0a52] relative overflow-hidden z-10" style={{ position: 'relative' }}>
      {/* Abstract Texture Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9520ea]/20 via-transparent to-[#6b1bb3]/20" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9520ea]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6b1bb3]/10 rounded-full blur-3xl" />
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-3xl rotate-45" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
        {/* Section Label */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          <span className="text-white/50 tracking-[0.3em] uppercase text-sm">
            Cómo lo hacemos
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-24 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <h2 className="font-black text-white leading-tight mb-6 text-[48px]">
            No creamos por crear
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-24 relative" style={{ position: 'relative' }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ position: 'relative' }}
            >
              <div className="flex items-start gap-6 group">
                {/* Step number */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-black text-white">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Step text */}
                <div className="flex-1 pt-3">
                  <motion.div
                    className="relative"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-2xl lg:text-3xl font-black text-white leading-tight font-normal">
                      {step}
                    </p>
                    
                    {/* Accent line */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-white/40 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                      style={{ position: 'absolute' }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="text-center max-w-3xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full" />
            <p className="relative text-3xl lg:text-4xl font-black text-white leading-tight">
              No entregamos piezas sueltas.<br />
              Diseñamos sistemas de contenido.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
