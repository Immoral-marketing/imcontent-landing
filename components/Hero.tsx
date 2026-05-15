"use client";
import { motion } from "motion/react";
const heroImage = "/assets/906f2c230c721d64a538e64e637212b124091a0a.png";

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-white via-purple-50/30 to-white relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#9520ea]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9520ea]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Text (60% width) */}
          <div className="w-full lg:w-[60%]">
            {/* Main Headline - Typography-driven with purple accent */}
            <h1 className="mb-12 lg:mb-16" style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Hacer crecer marcas{" "}
              <span className="text-[#9520ea]">ya no requiere</span>{" "}
              rodajes eternos ni equipos gigantes.
            </h1>

            {/* Supporting Text */}
            <div className="text-left max-w-2xl mb-12" style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              <p className="text-black mb-0">
                Contenido audiovisual creado con IA.
              </p>
              <p className="text-[#b3b3b3]">
                Más rapidez, más eficiencia y foco en resultados.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToServices}
              className="px-10 py-5 bg-[#9520ea] text-white hover:bg-black transition-all duration-300 rounded-full shadow-lg shadow-[#9520ea]/20 hover:shadow-2xl hover:shadow-black/20 hover:scale-105"
              style={{
                fontSize: '1.125rem',
                fontWeight: 500,
              }}
            >
              Ver servicios
            </button>
          </div>

          {/* Right Column - Image (40% width) */}
          <div className="w-full lg:w-[40%] flex justify-center items-center">
            <motion.img
              src={heroImage}
              alt="imcontent - Contenido con IA"
              className="w-full h-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'relative' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
