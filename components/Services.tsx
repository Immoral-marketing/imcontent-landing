"use client";
import { motion } from 'motion/react';
import { Sparkles, Zap, Video } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Snack Content',
      price: 'Desde 460€',
      description: 'Vídeos cortos, ágiles y directos, pensados para consumo rápido en redes sociales y campañas digitales.',
      whatFor: 'Para qué se usa',
      icon: Sparkles,
      features: [
        'Reels, TikTok y Shorts',
        'Contenido recurrente de marca',
        'Anuncios de alto impacto en pocos segundos'
      ],
      pricing: [
        'Desde 460 € (hasta 15 segundos)',
        'Hasta 750 € (hasta 30 segundos)'
      ],
      featured: false
    },
    {
      title: 'Snack Content IA',
      price: 'Desde 750€',
      description: 'Vídeos cortos creados con apoyo de inteligencia artificial, combinando diseño, animación y recursos generativos para producir contenido ágil y escalable.',
      whatFor: 'Para qué se usa',
      icon: Zap,
      features: [
        'Testeo rápido de creatividades',
        'Contenido frecuente para Paid Media',
        'Escalar volumen sin aumentar tiempos de producción'
      ],
      pricing: [
        'Desde 750 € (hasta 15 segundos)',
        'Hasta 1.000 € (hasta 30 segundos)'
      ],
      featured: true
    },
    {
      title: 'Vídeo Animado con IA',
      price: 'Desde 1.100€',
      description: 'Contenido creado íntegramente mediante animación y motion graphics, sin necesidad de rodaje.',
      whatFor: 'Para qué se usa',
      icon: Video,
      features: [
        'Explicar productos o servicios',
        'Mensajes institucionales',
        'Contenido educativo o de marca'
      ],
      pricing: [
        'Desde 1.100 € (hasta 30 segundos)',
        'Hasta 2.200 € (hasta 60 segundos)'
      ],
      featured: false
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden z-10" style={{ position: 'relative' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10" style={{ position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <motion.h2
            className="text-black mb-6 relative"
            style={{
              fontSize: '48px',
              fontWeight: 900,
              lineHeight: 1.1,
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Conoce los tipos de{' '}
            <span className="bg-gradient-to-r from-[#9520ea] to-[#c060ff] bg-clip-text text-transparent text-[48px]">
              contenido que trabajamos
            </span>
          </motion.h2>
          <motion.p
            className="text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed relative"
            style={{
              fontSize: '1.125rem',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Cada formato responde a un objetivo distinto.<br />
            Te ayudamos a elegir el que mejor encaje con tu marca y tu momento.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative" style={{ position: 'relative' }}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl border-2 group cursor-pointer h-full flex flex-col transition-all duration-300 ${
                  service.featured
                    ? 'border-[#9520ea] bg-gradient-to-br from-[#9520ea]/5 to-transparent shadow-xl shadow-[#9520ea]/10'
                    : 'border-black/10 bg-white hover:border-[#9520ea]/50 hover:shadow-xl hover:shadow-[#9520ea]/5'
                }`}
                initial={{ 
                  opacity: 0, 
                  y: 100
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                style={{ position: 'relative' }}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#9520ea] rounded-full text-xs text-white tracking-wider"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ position: 'absolute' }}
                  >
                    POPULAR
                  </motion.div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-[#9520ea]/10 flex items-center justify-center mb-4 group-hover:bg-[#9520ea]/20 transition-colors duration-300"
                  >
                    <Icon className="text-[#9520ea]" size={28} strokeWidth={1} />
                  </motion.div>

                  {/* Title & Price */}
                  <h3 className="text-black mb-2" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700
                  }}>
                    {service.title}
                  </h3>
                  <div className="text-[#9520ea] mb-3" style={{
                    fontSize: '2rem',
                    fontWeight: 900
                  }}>
                    {service.price}
                  </div>

                  {/* Description */}
                  <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5 flex-grow relative">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-sm text-black/70 relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        style={{ position: 'relative' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9520ea] mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Pricing Section */}
                  <div className="mb-4 relative">
                    <h4 className="text-[#9520ea] mb-2 tracking-wide" style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Precio
                    </h4>
                    <ul className="space-y-2 relative">
                      {service.pricing.map((price, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm text-black/70 relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          style={{ position: 'relative' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9520ea] mr-3 flex-shrink-0" />
                          {price}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full py-3 border-2 border-[#9520ea] text-[#9520ea] rounded-full hover:bg-[#9520ea] hover:text-white transition-all duration-300 mt-auto"
                    style={{
                      fontWeight: 600
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const contactForm = document.getElementById('contact-form');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    CONTRATAR
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
