"use client";
const image_c87e21e8e3de8b1adffb329c7032249abc44ff79 = "/assets/c87e21e8e3de8b1adffb329c7032249abc44ff79.png";
import { motion } from 'motion/react';
import { Sparkles, Award, TrendingUp } from 'lucide-react';
import logo from '../../imports/imcontent-logo.svg';

const criteria = [
  {
    icon: Sparkles,
    text: 'Quieren verse profesionales y coherentes',
  },
  {
    icon: Award,
    text: 'Entienden el valor del diseño y el contenido',
  },
  {
    icon: TrendingUp,
    text: 'Necesitan escalar su comunicación sin perder identidad',
  },
];

export function ForWho() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden z-10" style={{ position: 'relative' }}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#9520ea] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9520ea] rounded-full blur-3xl" />
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
          <span className="text-[#b3b3b3] tracking-[0.3em] uppercase text-sm">
            Para quién es imcontent
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <h2 className="font-black text-black leading-tight text-[48px] flex items-center justify-center gap-3">
            <img src={image_c87e21e8e3de8b1adffb329c7032249abc44ff79} alt="imcontent" className="h-[38px] w-auto inline-block align-middle m-[0px] px-[5px] py-[0px]" /> es para marcas que…
          </h2>
        </motion.div>

        {/* Criteria Grid - Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 relative" style={{ position: 'relative' }}>
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ position: 'relative' }}
            >
              <motion.div
                className="text-center p-10 h-full flex flex-col items-center"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon - thin stroke */}
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-20 h-20 text-[#9520ea]" strokeWidth={1} />
                </motion.div>

                {/* Text */}
                <p className="text-2xl font-black text-black leading-tight">
                  {item.text}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="w-16 h-0.5 bg-[#9520ea] mt-8 relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                  style={{ position: 'relative' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement - Filter message - Single line */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ position: 'relative' }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}
