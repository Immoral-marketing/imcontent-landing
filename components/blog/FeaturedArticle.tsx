'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

export type FeaturedArticleProps = {
  titular:           string
  slug:              string
  meta_description:  string | null
  imagen_url:        string | null
  categoria:         string | null
  fecha_publicacion: string | null
}

function formatDate(d: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function FeaturedArticle({
  articulo
}: {
  articulo: FeaturedArticleProps
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = articulo.imagen_url && !imgFailed

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="px-6 mb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--blog-accent)' }} />
            <span className="text-xs tracking-[0.25em] text-black/45 uppercase"
                  style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
              Lo último
            </span>
          </div>
        </div>

        <Link href={`/blog/${articulo.slug}`} className="block group no-underline">
          <article
            className="card-glow relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-sm hover:shadow-md transition-colors duration-500"
            style={{
              background:   'linear-gradient(135deg, #f8fafc, color-mix(in srgb, var(--blog-accent-blue) 5%, white), white)',
              border:       '1px solid var(--blog-card-border)',
            }}
          >
            {/* Image side */}
            <div className="relative h-72 lg:h-[28rem] overflow-hidden bg-slate-100">
              {showImage ? (
                <>
                  <img
                    src={articulo.imagen_url || ''}
                    alt={articulo.titular}
                    onError={() => setImgFailed(true)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-white/60" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--blog-accent-blue) 10%, transparent), #eff6ff)' }}>
                  <div className="w-48 h-48 rounded-full blur-3xl"
                       style={{ background: 'color-mix(in srgb, var(--blog-accent-blue) 20%, transparent)' }} />
                </div>
              )}
              {articulo.categoria && (
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-xs tracking-wider uppercase"
                        style={{
                          border:     '1px solid color-mix(in srgb, var(--blog-accent) 30%, transparent)',
                          color:      'var(--blog-accent)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 300,
                        }}>
                    {articulo.categoria}
                  </span>
                </div>
              )}
            </div>

            {/* Content side */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs tracking-[0.2em] text-black/40 uppercase mb-5"
                     style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                  {formatDate(articulo.fecha_publicacion)} · Pieza destacada
                </div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-black leading-[1.05] tracking-tight mb-6 transition-colors duration-500"
                  style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, letterSpacing: '-0.025em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blog-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}
                >
                  {articulo.titular}
                </h2>
                {articulo.meta_description && (
                  <p className="text-base md:text-lg text-black/65 leading-relaxed mb-8"
                     style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                    {articulo.meta_description}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-3"
                      style={{ color: 'var(--blog-accent)', fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                  Leer artículo
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="hidden md:flex items-center gap-2 text-xs text-black/30 uppercase tracking-wider">
                  <span className="w-8 h-px bg-black/20" />
                  Destacado
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </motion.div>
  )
}
