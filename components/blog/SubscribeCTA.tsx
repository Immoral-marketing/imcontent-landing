'use client'

import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import SubscribeForm from '../SubscribeForm'
import { useBlogConfig } from '@Immoral-marketing/motor-blog/lib/BlogConfigContext'

export default function SubscribeCTA({
  variant = 'large'
}: {
  variant?: 'large' | 'compact'
}) {
  const { cta } = useBlogConfig()

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl shadow-sm p-8 md:p-10"
        style={{ border: '1px solid var(--blog-card-border)' }}
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
             style={{ background: 'color-mix(in srgb, var(--blog-accent-blue) 15%, transparent)' }} />
        <div className="relative">
          <h3 className="text-2xl md:text-3xl text-black mb-2 tracking-tight"
              style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}>
            {cta.compact.title}
          </h3>
          <p className="text-black/60 mb-6"
             style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
            {cta.compact.description}
          </p>
          <SubscribeForm />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="px-6 mb-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-sm p-10 md:p-16"
             style={{ border: '1px solid color-mix(in srgb, var(--blog-accent-blue) 25%, transparent)' }}>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse"
               style={{ background: 'color-mix(in srgb, var(--blog-accent-blue) 20%, transparent)' }} />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse"
               style={{ animationDelay: '2s', background: 'color-mix(in srgb, var(--blog-accent) 8%, transparent)' }} />
          <div className="absolute inset-0 opacity-50 pointer-events-none"
               style={{ backgroundImage: 'linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)', backgroundSize: '3rem 3rem', maskImage: 'radial-gradient(ellipse 50% 70% at 50% 50%,#000 30%,transparent 80%)' }} />

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                 style={{
                   background: 'color-mix(in srgb, var(--blog-accent) 10%, transparent)',
                   border:     '1px solid color-mix(in srgb, var(--blog-accent) 30%, transparent)',
                 }}>
              <Mail className="w-3.5 h-3.5" style={{ color: 'var(--blog-accent)' }} />
              <span className="text-xs tracking-[0.2em] uppercase"
                    style={{ color: 'var(--blog-accent)', fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                {cta.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 100, letterSpacing: '-0.025em' }}>
              {cta.title}
              <br />
              <span className="gradient-text font-black">{cta.titleAlt}</span>
            </h2>

            <p className="text-lg text-black/65 mb-10 leading-relaxed max-w-xl"
               style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
              {cta.description}
            </p>

            <SubscribeForm />

            {cta.stats && cta.stats.length > 0 && (
              <div className="mt-8 flex items-center gap-4 text-xs text-black/40">
                {cta.stats.map((stat: string, i: number) => (
                  <>
                    {i > 0 && <span key={`sep-${i}`} className="w-px h-3 bg-black/15" />}
                    <span key={stat} className="flex items-center gap-2">
                      {i === 0 && (
                        <span className="w-1.5 h-1.5 rounded-full"
                              style={{ background: 'var(--blog-accent)' }} />
                      )}
                      <span style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                        {stat}
                      </span>
                    </span>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
