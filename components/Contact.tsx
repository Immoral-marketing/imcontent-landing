"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    pais: "",
    email: "",
    mensaje: "",
    legal: false
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-black via-[#1a0a2e] to-black text-white relative overflow-hidden" style={{ position: 'relative' }}>
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#9520ea] blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#9520ea] blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
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
            className="text-5xl lg:text-7xl font-black text-white mb-6 relative"
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
            className="text-xl text-[#b3b3b3] max-w-3xl mx-auto space-y-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            <p className="font-bold font-normal px-[-8px] py-[0px]">
              Cuéntanos qué tienes en mente y te ayudamos a definir el formato, el enfoque y el presupuesto más adecuado para tu marca.
            </p>
            <p className="text-lg text-[20px] font-bold">
              Sin compromiso. Sin procesos largos.
            </p>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative' }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6 relative">
            {/* Nombre */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ position: 'relative' }}
            >
              <motion.input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                onFocus={() => setFocusedField('nombre')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-black/50 border border-[#9520ea]/20 rounded-xl text-white placeholder-[#b3b3b3]/50 focus:border-[#9520ea] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              {focusedField === 'nombre' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#9520ea]/5 -z-10"
                  layoutId="inputGlow"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* Empresa */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              style={{ position: 'relative' }}
            >
              <motion.input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                onFocus={() => setFocusedField('empresa')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-black/50 border border-[#9520ea]/20 rounded-xl text-white placeholder-[#b3b3b3]/50 focus:border-[#9520ea] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              {focusedField === 'empresa' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#9520ea]/5 -z-10"
                  layoutId="inputGlow"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* País */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ position: 'relative' }}
            >
              <motion.input
                type="text"
                name="pais"
                placeholder="País"
                value={formData.pais}
                onChange={handleChange}
                onFocus={() => setFocusedField('pais')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-black/50 border border-[#9520ea]/20 rounded-xl text-white placeholder-[#b3b3b3]/50 focus:border-[#9520ea] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              {focusedField === 'pais' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#9520ea]/5 -z-10"
                  layoutId="inputGlow"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              style={{ position: 'relative' }}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-black/50 border border-[#9520ea]/20 rounded-xl text-white placeholder-[#b3b3b3]/50 focus:border-[#9520ea] focus:outline-none transition-all duration-300 backdrop-blur-sm"
                required
                whileFocus={{ scale: 1.02 }}
              />
              {focusedField === 'email' && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-[#9520ea]/5 -z-10"
                  layoutId="inputGlow"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </div>

          {/* Mensaje */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{ position: 'relative' }}
          >
            <motion.textarea
              name="mensaje"
              placeholder="Cuéntanos sobre tu proyecto..."
              value={formData.mensaje}
              onChange={handleChange}
              onFocus={() => setFocusedField('mensaje')}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className="w-full px-6 py-4 bg-black/50 border border-[#9520ea]/20 rounded-xl text-white placeholder-[#b3b3b3]/50 focus:border-[#9520ea] focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
              required
              whileFocus={{ scale: 1.01 }}
            />
            {focusedField === 'mensaje' && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-[#9520ea]/5 -z-10"
                layoutId="inputGlow"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>

          {/* Legal Checkbox */}
          <motion.div
            className="flex items-start gap-3 mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            style={{ position: 'relative' }}
          >
            <motion.input
              type="checkbox"
              name="legal"
              id="legal"
              checked={formData.legal}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-[#9520ea]/30 bg-black/50 text-[#9520ea] focus:ring-[#9520ea] focus:ring-offset-0"
              required
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <label htmlFor="legal" className="text-sm text-[#b3b3b3]">
              He leído y acepto la política de privacidad.
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{ position: 'relative' }}
          >
            <motion.button
              type="submit"
              className="w-full md:w-auto px-10 py-5 bg-[#9520ea] text-white rounded-full relative overflow-hidden group flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#9520ea] via-[#c060ff] to-[#9520ea]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 tracking-wide">Enviar mensaje</span>
              <Send className="relative z-10" size={20} strokeWidth={1} />
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
