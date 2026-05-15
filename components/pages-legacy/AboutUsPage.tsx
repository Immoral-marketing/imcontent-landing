"use client";
const image_852e1cf4a60128bb43f12c297d96da7ebaf6a7a0 = "/assets/852e1cf4a60128bb43f12c297d96da7ebaf6a7a0.png";
const image_788454c346ad0bd6387ee33d9818410a1b35b4a8 = "/assets/788454c346ad0bd6387ee33d9818410a1b35b4a8.png";
import { motion } from 'motion/react';
import { Target, Layers, Sparkles, ArrowUpRight, Eye, Video, Brain } from 'lucide-react';
const teamImage = "/assets/a6274cff9823652e4ec6d93460216a566cfec95f.png";
const imcontentLogo = "/assets/9fe18c0c51b15e0cd2e9a23d74a36f3e3c5a1ba7.png";

export function AboutUsPage() {
  return (
    <div className="relative" style={{ position: 'relative' }}>
      {/* Nuestro Equipo Section */}
      <section className="pt-32 lg:pt-40 pb-[200px] bg-white relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5 p-[0px]">
          <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-[#9520ea] rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
          {/* Section Title */}
          <motion.div
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <h2 className="font-black text-black mb-6 leading-tight text-[48px]">
              Nuestro <span className="text-[#9520ea]">equipo</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#9520ea] mx-auto rounded-full" />
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative" style={{ position: 'relative' }}>
            {/* Left Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <motion.div
                className="relative"
                whileHover={{ 
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={image_788454c346ad0bd6387ee33d9818410a1b35b4a8} 
                  alt="Nuestro equipo - Immoral Group" 
                  className="w-full h-auto rounded-[600px] shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-8 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Main Text */}
              <div className="space-y-5">
                <p className="text-lg lg:text-xl text-black/80 leading-relaxed">
                  Formamos parte de{' '}
                  <span className="font-black text-[#9520ea]">Immoral Group</span>, un ecosistema de profesionales{' '}
                  <span className="font-black text-black">creativos</span>,{' '}
                  <span className="font-black text-black">estratégicos</span> y{' '}
                  <span className="font-black text-black">tecnológicos</span>.
                </p>

                {/* Separator */}
                <motion.div
                  className="w-16 h-0.5 bg-[#9520ea]/40 mx-auto rounded-full relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ position: 'relative' }}
                />

                <p className="text-lg lg:text-xl font-black text-black leading-relaxed">
                  Esto nos permite combinar:
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-4">
                {/* Visión creativa */}
                <motion.div
                  className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-gradient-to-br from-[#9520ea]/5 to-transparent border-2 border-[#9520ea]/20 hover:border-[#9520ea]/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ position: 'relative' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/30">
                    <Eye className="w-6 h-6 text-white" strokeWidth={1} />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg lg:text-xl font-black text-black">
                      Visión creativa
                    </h3>
                  </div>
                </motion.div>

                {/* Capacidad de producción */}
                <motion.div
                  className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-gradient-to-br from-[#9520ea]/5 to-transparent border-2 border-[#9520ea]/20 hover:border-[#9520ea]/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ position: 'relative' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/30">
                    <Video className="w-6 h-6 text-white" strokeWidth={1} />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg lg:text-xl font-black text-black">
                      Capacidad de producción
                    </h3>
                  </div>
                </motion.div>

                {/* Pensamiento estratégico */}
                <motion.div
                  className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-gradient-to-br from-[#9520ea]/5 to-transparent border-2 border-[#9520ea]/20 hover:border-[#9520ea]/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ position: 'relative' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9520ea] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-[#9520ea]/30">
                    <Brain className="w-6 h-6 text-white" strokeWidth={1} />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg lg:text-xl font-black text-black">
                      Pensamiento estratégico
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Line */}
          
        </div>
      </section>

      <section className="min-h-screen pb-32 lg:pb-40 bg-white relative overflow-hidden" style={{ position: 'relative' }}>
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
            <h1 className="lg:text-4xl font-black mb-4 leading-tight flex items-center justify-center gap-3 text-[48px]">
              Somos <img src={image_852e1cf4a60128bb43f12c297d96da7ebaf6a7a0} alt="imcontent" className="h-[0.85em] inline-block align-bottom m-[0px] p-[0px]" />
            </h1>
            <div className="w-24 h-1.5 bg-[#9520ea] mx-auto rounded-full" />
          </motion.div>

          {/* Content Paragraphs */}
          <motion.div
            className="max-w-5xl mx-auto space-y-12 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* First paragraph - destacado */}
            
              <p className="text-xl lg:text-2xl font-black text-[#9520ea] leading-relaxed">
                imcontent nace para responder a una necesidad clara del mercado:
              </p>
          
            
            <p className="text-lg lg:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto">
              El modelo tradicional de productora es <span className="text-black font-black">lento, rígido y caro.</span> Y trabajar con freelances no siempre garantiza agilidad, coherencia ni continuidad.
            </p>

            {/* Separator */}

            {/* Supporting Text */}
            <motion.div
              className="space-y-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              <p className="text-lg lg:text-xl text-black/80 leading-relaxed text-center max-w-4xl mx-auto">
                Trabajamos con <span className="font-black text-black">estructuras ligeras</span> y{' '}
                <span className="font-black text-black">equipos flexibles</span> para producir contenido de forma{' '}
                <span className="text-[#9520ea] font-black">más rápida</span>,{' '}
                <span className="text-[#9520ea] font-black">más ágil</span> y{' '}
                <span className="text-[#9520ea] font-black">más rentable</span>, sin renunciar a la dirección creativa ni a la identidad de marca.
              </p>

              {/* Decorative Line */}
              <motion.div
                className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-[#9520ea]/40 to-transparent relative"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ position: 'relative' }}
              />

              <p className="text-lg lg:text-xl text-black/70 leading-relaxed text-center max-w-3xl mx-auto">
                No creemos en producciones eternas ni en procesos innecesarios.
              </p>
            </motion.div>

            {/* Final statement - destacado */}
            
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="mt-24 w-32 h-1 bg-[#9520ea] mx-auto rounded-full relative"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ position: 'relative' }}
          />
        </div>
      </section>

      {/* Nuestro Enfoque Section */}
      
    </div>
  );
}
