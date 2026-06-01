'use client'

import { useMemo, useState, useEffect, useRef } from 'react'
import SearchBar from './SearchBar'
import FeaturedArticle from './FeaturedArticle'
import ArticleCard from './ArticleCard'
import { motion } from 'motion/react'
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

// Function to calculate symmetric article counts to keep grid rows fully populated
function getSymmetricCount(rawCount: number) {
  if (rawCount <= 2) return rawCount
  if (rawCount === 3 || rawCount === 4) return 2
  if (rawCount === 5) return 5
  if (rawCount === 6 || rawCount === 7) return 5
  return 8
}

export default function BlogList({ articulos }: { articulos: Articulo[] }) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedMonthKey, setSelectedMonthKey] = useState<string | null>(null) // Format: YYYY-M
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

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

  // Reset page to 1 on active search query or filter changes
  useEffect(() => {
    setPage(1)
  }, [query, selectedCategory, selectedMonthKey, selectedDay])

  // Scroll smoothly to list top when page changes
  useEffect(() => {
    if (isMounted.current) {
      listRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      isMounted.current = true
    }
  }, [page])

  const trimmed = query.trim().toLowerCase()
  const isSearching = trimmed.length > 0
  const hasActiveFilters = isSearching || selectedCategory !== null || selectedMonthKey !== null || selectedDay !== null

  const clearAllFilters = () => {
    setQuery('')
    setSelectedCategory(null)
    setSelectedMonthKey(null)
    setSelectedDay(null)
    setPage(1)
  }

  // Calculate dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    articulos.forEach(a => {
      if (a.categoria) {
        counts[a.categoria] = (counts[a.categoria] || 0) + 1
      }
    })
    return counts
  }, [articulos])

  // Calculate dynamic date mapping (Year-Month -> Set of Days)
  const monthlyData = useMemo(() => {
    const map: Record<string, { label: string; year: number; month: number; days: Set<number> }> = {}
    
    articulos.forEach(a => {
      if (!a.fecha_publicacion) return
      const date = new Date(a.fecha_publicacion)
      if (isNaN(date.getTime())) return
      
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      
      const key = `${year}-${month}`
      if (!map[key]) {
        const monthName = date.toLocaleDateString('es-ES', { month: 'long' })
        const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1)
        map[key] = {
          label: `${capitalizedMonth} ${year}`,
          year,
          month,
          days: new Set<number>()
        }
      }
      map[key].days.add(day)
    })

    // Sort Month Keys descending (newest first)
    const sortedKeys = Object.keys(map).sort((a, b) => {
      const [yearA, monthA] = a.split('-').map(Number)
      const [yearB, monthB] = b.split('-').map(Number)
      if (yearA !== yearB) return yearB - yearA
      return monthB - monthA
    })

    return sortedKeys.map(k => map[k])
  }, [articulos])

  // Days list for selected Month Key
  const availableDays = useMemo(() => {
    if (!selectedMonthKey) return []
    const monthDetails = monthlyData.find(m => `${m.year}-${m.month}` === selectedMonthKey)
    if (!monthDetails) return []
    return Array.from(monthDetails.days).sort((a, b) => a - b)
  }, [selectedMonthKey, monthlyData])

  // Filtered list based on search and selected filters
  const filtered = useMemo(() => {
    return articulos.filter(a => {
      if (isSearching) {
        const haystack = [a.titular, a.meta_description, a.categoria]
          .filter(Boolean).join(' ').toLowerCase()
        if (!haystack.includes(trimmed)) return false
      }

      if (selectedCategory && a.categoria !== selectedCategory) return false

      if (selectedMonthKey) {
        if (!a.fecha_publicacion) return false
        const date = new Date(a.fecha_publicacion)
        if (isNaN(date.getTime())) return false
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        if (`${year}-${month}` !== selectedMonthKey) return false

        if (selectedDay) {
          const day = date.getDate()
          if (day !== selectedDay) return false
        }
      }

      return true
    })
  }, [articulos, trimmed, isSearching, selectedCategory, selectedMonthKey, selectedDay])

  const featured = articulos[0]
  const rest = useMemo(() => articulos.slice(1), [articulos])

  // Dynamic symmetric pagination index builder to prevent layout trailing gaps
  const pagesIndices = useMemo(() => {
    const indices: { start: number; end: number }[] = []
    let currentStart = 0
    const total = hasActiveFilters ? filtered.length : rest.length

    while (currentStart < total) {
      const remaining = total - currentStart
      const rawCount = Math.min(8, remaining)
      let count = rawCount

      if (remaining <= 8) {
        count = getSymmetricCount(rawCount)
      }

      if (count <= 0) break
      indices.push({ start: currentStart, end: currentStart + count })
      currentStart += count
    }
    return indices
  }, [hasActiveFilters, filtered.length, rest.length])

  const totalPages = Math.max(1, pagesIndices.length)
  const currentPage = Math.min(page, totalPages)
  const pageRange = pagesIndices[currentPage - 1]

  const displayedArticles = useMemo(() => {
    if (!pageRange) return []
    const articlesList = hasActiveFilters ? filtered : rest
    return articlesList.slice(pageRange.start, pageRange.end)
  }, [pageRange, hasActiveFilters, filtered, rest])

  const showSubtleCTA = mounted && !isSubscribed && !hasActiveFilters

  const paginationControls = totalPages > 1 ? (
    <PaginationControls
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  ) : null

  const itemsCountLabel = hasActiveFilters ? filtered.length : rest.length

  return (
    <div ref={listRef}>
      {showSubtleCTA && <SubscribeCTA variant="subtle" />}
      <SearchBar
        value={query}
        onChange={setQuery}
        resultsCount={hasActiveFilters ? filtered.length : undefined}
        totalCount={articulos.length}
      />

      {/* Featured Article - only on page 1 when no filters/searches are active */}
      {!hasActiveFilters && currentPage === 1 && featured && (
        <FeaturedArticle articulo={featured} />
      )}

      {/* Unified CSS Grid section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            
            {/* Header (Spans all columns) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex items-end justify-between mb-4">
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
                  {hasActiveFilters ? "Resultados" : "Más artículos"}
                </h2>
              </div>
              <span className="hidden md:block text-sm text-black/40"
                    style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 300 }}>
                {itemsCountLabel} {itemsCountLabel === 1 ? 'pieza' : 'piezas'}
              </span>
            </div>

            {/* Filters Sidebar (Placed at Col 3, Row 2 on desktop) */}
            <aside className="col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 order-1 lg:order-none space-y-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm mb-6 lg:mb-0">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Filtros
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-rose-500 hover:text-rose-600 transition-colors font-medium cursor-pointer"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>

              {/* Dynamic Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Categorías
                </h4>
                <div className="flex flex-col gap-1">
                  {Object.entries(categoryCounts).map(([cat, count]) => {
                    const isActive = selectedCategory === cat
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(isActive ? null : cat)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all duration-200 text-left cursor-pointer ${
                          isActive
                            ? 'shadow-sm font-bold text-black'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                        style={
                          isActive
                            ? { background: 'var(--blog-accent-glow)', fontWeight: 700 }
                            : undefined
                        }
                      >
                        <span>{cat}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-black/10 text-black' : 'bg-slate-100 dark:bg-slate-850 text-slate-500'}`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Date Filters */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Filtrar por fecha
                </h4>
                <div className="flex flex-col gap-3">
                  
                  {/* Month Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-slate-400 dark:text-slate-500" style={{ fontFamily: 'Lexend, sans-serif' }}>Mes</label>
                    <select
                      value={selectedMonthKey || ''}
                      onChange={(e) => {
                        setSelectedMonthKey(e.target.value || null)
                        setSelectedDay(null)
                      }}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 px-3 py-2 rounded-xl text-sm outline-none cursor-pointer text-slate-700 dark:text-slate-200"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                    >
                      <option value="">Cualquier mes</option>
                      {monthlyData.map((m) => (
                        <option key={`${m.year}-${m.month}`} value={`${m.year}-${m.month}`}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Day Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-slate-400 dark:text-slate-500" style={{ fontFamily: 'Lexend, sans-serif' }}>Día</label>
                    <select
                      value={selectedDay || ''}
                      onChange={(e) => setSelectedDay(e.target.value ? Number(e.target.value) : null)}
                      disabled={!selectedMonthKey}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 px-3 py-2 rounded-xl text-sm outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-slate-700 dark:text-slate-200"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                    >
                      <option value="">Cualquier día</option>
                      {availableDays.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>
            </aside>

            {/* Articles flow (automatic placement covers row filling beneath the sidebar) */}
            {displayedArticles.length > 0 ? (
              displayedArticles.map((articulo, i) => (
                <div key={articulo.id} className="order-2 lg:order-none">
                  <ArticleCard articulo={articulo} index={i} />
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-2 order-2 lg:order-none">
                <NoResults query={query} onClear={clearAllFilters} />
              </div>
            )}

            {/* Pagination Controls */}
            {paginationControls && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 order-3 lg:order-none">
                {paginationControls}
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
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
              ? 'shadow-sm font-bold text-black'
              : 'border border-black/10 hover:border-black/20 text-slate-700 hover:text-slate-900 bg-white'
          }`}
          style={
            currentPage === p
              ? { background: 'var(--blog-accent-glow)', fontWeight: 700 }
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
      className="text-center py-20"
    >
      <div className="max-w-md mx-auto">
        <p className="text-5xl mb-6">🔍</p>
        <h3 className="text-2xl font-bold text-black mb-3">Sin resultados</h3>
        <p className="text-black/55 mb-8">
          Nada para <span className="text-black/80">«{query}»</span>.
          Prueba con otra palabra o limpia los filtros.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onClear}
            className="px-5 py-2.5 rounded-xl text-sm border border-black/15 text-black/70 hover:border-[var(--blog-accent)]/50 transition-colors cursor-pointer bg-white"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </motion.div>
  )
}
