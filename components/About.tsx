"use client";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-[#9520ea] relative overflow-hidden z-10" style={{ position: 'relative' }}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-2xl"
        animate={{
          x: [-150, 150, -150],
          y: [-100, 100, -100],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left side - Headline */}
          <div className="lg:col-span-5">
            <h2 className="text-white text-[48px]" style={{
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Diseño que conecta.{" "}
              <span className="text-black">Contenido que se siente.</span>
            </h2>
          </div>

          {/* Right side - Text and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="mb-10 text-white" style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Somos el estudio de contenido de Immoral Group.
              Creamos piezas visuales y narrativas pensadas para marcas que quieren destacar, 
              no pasar desapercibidas.
            </p>

            <div>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#9520ea] transition-all duration-300 rounded-full shadow-md hover:shadow-xl"
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                Ver proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
