'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import SearchBar from './SearchBar'
import FeaturedArticle from './FeaturedArticle'
import ArticleCard from './ArticleCard'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SubscribeCTA from './SubscribeCTA'

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
  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const listRef = useRef<HTMLDivElement>(null)
  const isMounted = useRef(false)

  useEffect(() => {
    setMounted(true)
    setIsSubscribed(document.cookie.includes('newsletter_subscribed=true'))
  }, [])

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

  // Reset page to 1 on active search query change
  useEffect(() => {
    setPage(1)
  }, [query])

  // Scroll smoothly to list top when page changes
  useEffect(() => {
    if (isMounted.current) {
      listRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      isMounted.current = true
    }
  }, [page])

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

  const featured = articulos[0]
  const rest = useMemo(() => articulos.slice(1), [articulos])

  const totalPages = useMemo(() => {
    if (isSearching) {
      return Math.ceil(filtered.length / 9)
    } else {
      return Math.ceil(rest.length / 9)
    }
  }, [isSearching, filtered.length, rest.length])

  const finalTotalPages = Math.max(1, totalPages)
  const currentPage = Math.min(page, finalTotalPages)

  const displayedArticles = useMemo(() => {
    const startIdx = (currentPage - 1) * 9
    const endIdx = startIdx + 9
    if (isSearching) {
      return filtered.slice(startIdx, endIdx)
    } else {
      return rest.slice(startIdx, endIdx)
    }
  }, [isSearching, filtered, rest, currentPage])

  const showSubtleCTA = mounted && !isSubscribed && !isSearching

  const paginationControls = totalPages > 1 ? (
    <PaginationControls
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  ) : null

  return (
    <div ref={listRef}>
      {showSubtleCTA && <SubscribeCTA variant="subtle" />}
      <SearchBar
        value={query}
        onChange={setQuery}
        resultsCount={isSearching ? filtered.length : undefined}
        totalCount={articulos.length}
      />
      {!isSearching ? (
        <>
          {currentPage === 1 && featured && <FeaturedArticle articulo={featured} />}
          {displayedArticles.length > 0 && (
            <ArchiveSection
              articulos={displayedArticles}
              title="Más artículos"
              countLabel={rest.length}
              pagination={paginationControls}
            />
          )}
        </>
      ) : displayedArticles.length > 0 ? (
        <ArchiveSection
          articulos={displayedArticles}
          title="Resultados"
          countLabel={filtered.length}
          pagination={paginationControls}
        />
      ) : (
        <NoResults query={query} onClear={() => setQuery('')} />
      )}
    </div>
  )
}

function ArchiveSection({
  articulos, title, countLabel, pagination
}: {
  articulos:   Articulo[]
  title:       string
  countLabel:  number
  pagination?: React.ReactNode
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
        {pagination}
      </div>
    </section>
  )
}

function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-16" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-xl flex items-center justify-center border border-black/10 hover:border-black/20 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer bg-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer ${
            currentPage === p
              ? 'shadow-sm font-bold'
              : 'border border-black/10 hover:border-black/20 text-slate-700 hover:text-slate-900 bg-white'
          }`}
          style={
            currentPage === p
              ? { background: 'var(--blog-accent-glow)', color: 'black', fontWeight: 700 }
              : undefined
          }
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-xl flex items-center justify-center border border-black/10 hover:border-black/20 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer bg-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
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
