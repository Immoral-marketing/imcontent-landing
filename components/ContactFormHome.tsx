"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function ContactFormHome() {
  const formLoadedRef = useRef(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double loading
    if (formLoadedRef.current) return;
    formLoadedRef.current = true;

    // Load Calendly script only if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      calendlyScript.async = true;
      document.body.appendChild(calendlyScript);
    }

    // Load ActiveCampaign form script only if not already loaded
    if (!scriptLoadedRef.current && !document.querySelector('script[src*="activehosted.com/f/embed"]')) {
      scriptLoadedRef.current = true;
      
      const acScript = document.createElement('script');
      acScript.src = 'https://team14962.activehosted.com/f/embed.php?id=15';
      acScript.charset = 'utf-8';
      acScript.async = true;
      
      // Add onload handler to ensure script loads properly
      acScript.onload = () => {
        console.log('ActiveCampaign script loaded successfully');
      };
      
      acScript.onerror = () => {
        console.error('Error loading ActiveCampaign script');
        scriptLoadedRef.current = false;
      };
      
      document.body.appendChild(acScript);
    }

    return () => {
      // Keep the flag to prevent reload on component remount
      // formLoadedRef.current = false;
    };
  }, []);

  return (
    <section id="contact-form" className="py-24 lg:py-32 bg-black text-white relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-100">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-black blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [1, 1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <motion.h2
            className="font-black text-white mb-6 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            ¿Hablamos de tu{' '}
            <span className="bg-gradient-to-r from-[#9520ea] to-[#c060ff] bg-clip-text text-transparent">
              contenido?
            </span>
          </motion.h2>
          <motion.div
            className="text-xl text-[#b3b3b3] max-w-3xl mx-auto space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            <p className="font-normal px-[-8px] py-[0px]">
              Cuéntanos qué tienes en mente y te ayudamos a definir el formato, el enfoque y el presupuesto más adecuado para tu marca.
            </p>
            <p className="text-lg text-[20px] font-bold">
              Sin compromiso. Sin procesos largos.
            </p>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
            {/* Calendly Widget */}
            <div className="w-full lg:w-1/2">
              
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden shadow-2xl border border-[#9520ea]/20 bg-black/50"
                data-url="https://calendly.com/d/cwx6-qf7-hx9/yure-y-coloma?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=fafafa&primary_color=9520ea"
                style={{ minWidth: '320px', height: '602px' }}
              ></div>
            </div>

            {/* Separator Line */}
            <div className="hidden lg:block w-px bg-[#9520ea]/20 self-stretch"></div>

            {/* ActiveCampaign Form */}
            <div className="w-full lg:w-1/2 relative" style={{ isolation: 'isolate' }}>
              <>
                <style>{`
                  ._form_15 input:not([type="hidden"]):not([type="submit"]),
                  ._form_15 textarea {
                    background-color: #ffffff !important;
                    color: #000000 !important;
                    border: 1px solid #e5e7eb !important;
                  }
                  ._form_15 label:first-child {
                    margin-top: 20px !important;
                  }
                  ._form_15, ._form_15 * {
                    margin-top: 0px !important;
                  }
                  ._form_15 {
                    padding-top: 0 !important;
                  }
                  /* Asegurar que el título o primer elemento no tenga espacio extra */
                  ._form_15 ._form-title, 
                  ._form_15 ._form-header {
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                  }
                `}</style>
                <div className="_form_15" style={{ position: 'relative', zIndex: 1 }}></div>
              </>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
