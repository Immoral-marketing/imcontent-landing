"use client";
import { motion } from 'motion/react';
import { Zap, Sparkles, Film, Video, Target, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative" style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#9520ea] rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
          {/* Main Title */}
          <motion.div
            className="mb-20 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <h1 className="text-[48px] font-black text-black mb-8 leading-tight">
              Nuestros <span className="text-[#9520ea]">servicios</span>
            </h1>
            <div className="w-24 h-1.5 bg-[#9520ea] mx-auto rounded-full" />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            className="max-w-5xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <p className="text-[20px] text-black/80 leading-relaxed text-center">
              En <span className="font-black text-[#9520ea]">imcontent</span> diseñamos contenido pensado para funcionar en entornos digitales exigentes, adaptarse a distintas plataformas y escalar sin perder identidad. Cada pieza responde a un objetivo concreto y a un uso real dentro de la comunicación de una marca.
            </p>
          </motion.div>

          {/* Decorative Line */}
          
        </div>
      </section>

      {/* Tipos de Contenido Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#000000] relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#9520ea]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#9520ea]/5 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
          {/* Section Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <h2 className="font-black text-white mb-8 leading-tight text-[48px]">
              Tipos de contenido que <span className="text-[#9520ea]">trabajamos</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Cada formato responde a un objetivo distinto.
            </p>
            <p className="text-2xl lg:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed mt-4">
              Te ayudamos a elegir el que mejor encaje con tu marca y tu momento.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto relative" style={{ position: 'relative' }}>
            {/* Snack Content */}
            <motion.div
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/10 hover:border-[#9520ea]/50 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ position: 'relative' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                  <Zap className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white">
                    Snack Content
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Qué es</h4>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    Vídeos cortos, ágiles y directos, pensados para consumo rápido en redes sociales y campañas digitales.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Para qué se usa</h4>
                  <ul className="space-y-1.5">
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Reels, TikTok y Shorts</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Contenido recurrente de marca</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Anuncios de alto impacto en pocos segundos</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-lg font-black text-white mb-2">Precio</h4>
                  <div className="space-y-1">
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Desde 460 € (hasta 15 segundos)
                    </p>
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Hasta 750 € (hasta 30 segundos)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Snack Content IA */}
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-[#9520ea]/10 to-[#9520ea]/5 backdrop-blur-md border-2 border-[#9520ea]/30 hover:border-[#9520ea]/60 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white">
                    Snack Content IA
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Qué es</h4>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    Vídeos cortos creados con apoyo de inteligencia artificial, combinando diseño, animación y recursos generativos para producir contenido ágil y escalable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Para qué se usa</h4>
                  <ul className="space-y-1.5">
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Testeo rápido de creatividades</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Contenido frecuente para Paid Media</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Escalar volumen sin aumentar tiempos de producción</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <h4 className="text-lg font-black text-white mb-2">Precio</h4>
                  <div className="space-y-1">
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Desde 750 € (hasta 15 segundos)
                    </p>
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Hasta 1.000 € (hasta 30 segundos)
                    </p>
                  </div>
                  <p className="text-[15px] text-white font-black mt-3 italic">
                    Ideal para marcas que necesitan velocidad, volumen y eficiencia creativa.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vídeo Animado */}
            <motion.div
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/10 hover:border-[#9520ea]/50 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                  <Film className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white">
                    Vídeo Animado con IA
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Qué es</h4>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    Contenido creado íntegramente mediante animación y motion graphics, sin necesidad de rodaje.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#9520ea] mb-2">Para qué se usa</h4>
                  <ul className="space-y-1.5">
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Explicar productos o servicios</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Mensajes institucionales</span>
                    </li>
                    <li className="text-white/80 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9520ea] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-[15px]">Contenido educativo o de marca</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-lg font-black text-white mb-2">Precio</h4>
                  <div className="space-y-1">
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Desde 1.100 € (hasta 30 segundos)
                    </p>
                    <p className="text-[15px] text-white/90">
                      <span className="text-[#9520ea] mr-2">👉</span>
                      Hasta 2.200 € (hasta 60 segundos)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="mt-24 w-32 h-1 bg-[#9520ea] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ position: 'relative' }}
          />
        </div>
      </section>

      {/* Cómo Trabajamos Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-[#6b15a1] via-[#4a0e72] to-[#2d0847] relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-[#9520ea]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-20 lg:mb-24 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <h2 className="font-black text-white mb-12 leading-tight tracking-tight text-[48px]">
              No creamos por <span className="text-[#9520ea]">crear</span>
            </h2>
          </motion.div>

          {/* Process Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-[900px] mx-auto mb-20 relative" style={{ position: 'relative' }}>
            {/* Step 1 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ position: 'relative' }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/15 hover:border-[#9520ea]/60 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                    <Target className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-black text-white/20">01</div>
                </div>
                <h3 className="text-lg font-black text-white leading-tight font-normal">
                  Entendemos la marca y el objetivo del contenido
                </h3>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/15 hover:border-[#9520ea]/60 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                    <Layers className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-black text-white/20">02</div>
                </div>
                <h3 className="text-lg font-black text-white leading-tight font-normal">
                  Definimos el formato y enfoque adecuado
                </h3>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/15 hover:border-[#9520ea]/60 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                    <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-black text-white/20">03</div>
                </div>
                <h3 className="text-lg font-black text-white leading-tight font-normal">
                  Diseñamos y producimos las piezas
                </h3>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ position: 'relative' }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/15 hover:border-[#9520ea]/60 transition-all duration-500 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#9520ea]/50">
                    <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-black text-white/20">04</div>
                </div>
                <h3 className="text-lg font-black text-white leading-tight font-normal">
                  Ajustamos y adaptamos para distintos usos
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Final Statement */}
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ position: 'relative' }}
          >
            <div className="rounded-[20px] bg-[#9520ea] shadow-2xl shadow-[#9520ea]/40 border-2 border-[#9520ea]/50 px-8 py-6">
              <p className="text-[24px] font-black text-white leading-tight font-normal">
                No entregamos piezas sueltas. Diseñamos sistemas de contenido.
              </p>
            </div>
          </motion.div>

          {/* Decorative Line */}
          
        </div>
      </section>
    </div>
  );
}
