"use client";
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
    privacyAccepted: false
  });

  useEffect(() => {
    // Calendly script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    // ActiveCampaign script
    const activeCampaignScript = document.createElement('script');
    activeCampaignScript.src = 'https://team14962.activehosted.com/f/embed.php?id=15';
    activeCampaignScript.async = true;
    document.body.appendChild(activeCampaignScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (calendlyScript.parentNode) {
        document.body.removeChild(calendlyScript);
      }
      if (activeCampaignScript.parentNode) {
        document.body.removeChild(activeCampaignScript);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert('Por favor, acepta la política de privacidad para continuar.');
      return;
    }
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#000000] relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#9520ea] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#9520ea] rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 z-10" style={{ position: 'relative' }}>
          {/* Main Title */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <h1 className="font-black text-white mb-8 leading-tight text-[48px]">
              Hablemos de tu <span className="text-[#9520ea]">contenido</span>
            </h1>
            <div className="w-24 h-1.5 bg-[#9520ea] mx-auto rounded-full" />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <p className="text-white/90 leading-relaxed text-center mb-6 text-[24px]">
              Cuéntanos qué tienes en mente y te ayudamos a definir el formato, el enfoque y el presupuesto más adecuado para tu marca.
            </p>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed text-center">
              Sin compromiso. Sin procesos largos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* New Calendly & ActiveCampaign Section */}
      <section className="py-20 bg-black relative overflow-hidden" style={{ position: 'relative' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
          {/* Section Header */}
          <motion.div 
            className="relative z-20 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Agenda tu <span className="text-[#9520ea]">sesión</span>
            </h2>
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
                {/* ActiveCampaign Form Container */}
                <>
                  <style>{`
                    ._form_15 input:not([type="hidden"]):not([type="submit"]),
                    ._form_15 textarea {
                      background-color: #ffffff !important;
                      color: #000000 !important;
                      border: 1px solid #e5e7eb !important;
                    }
                    ._form_15, ._form_15 * {
                      margin-top: 0 !important;
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
                  <div 
                    className="_form_15 rounded-xl p-0" 
                    style={{ 
                      position: 'relative', 
                      zIndex: 1,
                      minHeight: '602px',
                      width: '100%',
                      backgroundColor: 'transparent'
                    }}
                  ></div>
                </>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
