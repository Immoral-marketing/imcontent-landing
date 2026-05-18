'use client'

import { useMemo, useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import FeaturedArticle from './FeaturedArticle'
import ArticleCard from './ArticleCard'
import { motion } from 'motion/react'
import Link from 'next/link'

type Articulo = {
  id:                string
  titular:           string
  slug:              string
  meta_description:  string | null
  imagen_url:        string | null
  categoria:         string | null
  fecha_publicacion: string | null
}

export default function BlogList({ articulos }: { articulos: Articulo[] }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        const input = document.querySelector<HTMLInputElement>('input[aria-label="Buscar artículos"]')
        input?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const trimmed    = query.trim().toLowerCase()
  const isSearching = trimmed.length > 0

  const filtered = useMemo(() => {
    if (!isSearching) return articulos
    return articulos.filter(a => {
      const haystack = [a.titular, a.meta_description, a.categoria]
        .filter(Boolean).join(' ').toLowerCase()
      return haystack.includes(trimmed)
    })
  }, [articulos, trimmed, isSearching])

  const [featured, ...rest] = articulos

  return (
    <>
      <SearchBar
        value={query}
        onChange={setQuery}
        resultsCount={isSearching ? filtered.length : undefined}
        totalCount={articulos.length}
      />
      {!isSearching ? (
        <>
          {featured && <FeaturedArticle articulo={featured} />}
          {rest.length > 0 && (
            <ArchiveSection articulos={rest} title="Más artículos" countLabel={rest.length} />
          )}
        </>
      ) : filtered.length > 0 ? (
        <ArchiveSection articulos={filtered} title="Resultados" countLabel={filtered.length} />
      ) : (
        <NoResults query={query} onClear={() => setQuery('')} />
      )}
    </>
  )
}

function ArchiveSection({
  articulos, title, countLabel
}: {
  articulos:   Articulo[]
  title:       string
  countLabel:  number
}) {
  return (
    <section className="px-6 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--blog-accent-blue)' }} />
              <span className="text-xs tracking-[0.25em] text-black/50 uppercase"
                    style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                Archivo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-black tracking-tight"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 100, letterSpacing: '-0.025em' }}>
              {title}
            </h2>
          </div>
          <span className="hidden md:block text-sm text-black/40"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
            {countLabel} {countLabel === 1 ? 'pieza' : 'piezas'}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articulos.map((articulo, i) => (
            <ArticleCard key={articulo.id} articulo={articulo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NoResults({
  query, onClear
}: {
  query:   string
  onClear: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 mb-32"
    >
      <div className="max-w-3xl mx-auto text-center py-20">
        <p className="text-5xl mb-6">🔍</p>
        <h3 className="text-2xl font-bold text-black mb-3">Sin resultados</h3>
        <p className="text-black/55 mb-8">
          Nada para <span className="text-black/80">«{query}»</span>.
          Prueba con otra palabra o limpia la búsqueda.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onClear}
            className="px-5 py-2.5 rounded-xl text-sm border border-black/15 text-black/70 hover:border-[var(--blog-accent)]/50 transition-colors"
          >
            Limpiar búsqueda
          </button>
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-xl text-sm text-black/70 hover:text-[var(--blog-accent)] transition-colors no-underline"
          >
            Ver todo el archivo
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
