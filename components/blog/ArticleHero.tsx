'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

type Props = {
  titular:            string
  categoria:          string | null
  fecha_publicacion:  string | null
  imagen_url:         string | null
  readingMinutes:     number
  imagen_alt_text?:   string | null
}

function formatDate(d: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function ArticleHero({
  titular, categoria, fecha_publicacion,
  imagen_url, readingMinutes, imagen_alt_text
}: Props) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <header className="relative pt-32 md:pt-40 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-black/50 transition-colors duration-300 text-sm mb-10 no-underline group"
            style={{ ['--hover-color' as string]: 'var(--blog-accent)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blog-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = '')}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Volver al blog
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {categoria && (
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase"
              style={{
                background:   'color-mix(in srgb, var(--blog-accent) 10%, transparent)',
                border:       '1px solid color-mix(in srgb, var(--blog-accent) 30%, transparent)',
                color:        'var(--blog-accent)',
                fontFamily:   'Lexend, sans-serif',
                fontWeight:   300,
              }}
            >
              {categoria}
            </span>
          )}
          {fecha_publicacion && (
            <span className="text-black/40 text-sm"
                  style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
              {formatDate(fecha_publicacion)}
            </span>
          )}
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span className="text-black/40 text-sm"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
            {readingMinutes} min de lectura
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl text-black leading-[1.05] tracking-tight mb-10"
          style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, letterSpacing: '-0.025em' }}
        >
          {titular}
        </motion.h1>

        {imagen_url && !imgFailed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-black/10"
          >
            <img
              src={imagen_url}
              alt={imagen_alt_text || titular}
              onError={() => setImgFailed(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
          </motion.div>
        )}
      </div>
    </header>
  )
}
