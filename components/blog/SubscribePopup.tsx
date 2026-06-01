'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import SubscribeForm from '../SubscribeForm'
import { motion, AnimatePresence } from 'motion/react'

export default function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20) {
        const isSubscribed = document.cookie.includes('newsletter_subscribed=true')
        const isDismissed = sessionStorage.getItem('newsletter_popup_dismissed') === 'true'
        if (!isSubscribed && !isDismissed) {
          setIsOpen(true)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('newsletter_popup_dismissed', 'true')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden border border-slate-100"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            {/* Ambient glow decoration */}
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-25"
              style={{ background: 'var(--blog-accent)' }}
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2 tracking-tight">
                ¡Espera! No te vayas sin las manos vacías
              </h3>
              <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                Suscríbete a nuestra newsletter para recibir lo último en contenido audiovisual creado con IA y estrategias de conversión.
              </p>
              <SubscribeForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
