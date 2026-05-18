'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBlogConfig } from '@Immoral-marketing/motor-blog/lib/BlogConfigContext'

export default function BlogNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { nav } = useBlogConfig()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isNews = pathname?.startsWith('/news')

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b shadow-2xl'
          : 'bg-black/60 backdrop-blur-md'
      }`}
      style={isScrolled ? {
        borderColor: 'color-mix(in srgb, var(--blog-accent-blue) 20%, transparent)',
        boxShadow:   '0 25px 50px -12px color-mix(in srgb, var(--blog-accent-blue) 5%, transparent)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href={nav.logo.href} className="flex items-center gap-3 group cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:-translate-x-1 transition-all duration-300"
                       style={{ ['--hover-color' as string]: 'var(--blog-accent-glow)' }} />
            {nav.logo.src ? (
              <img src={nav.logo.src} alt={nav.logo.alt} className="h-7 w-auto" />
            ) : (
              <span className="text-white font-bold text-lg">{nav.logo.alt}</span>
            )}
          </Link>

          {/* Blog / News toggle */}
          {nav.showBlogNewsToggle && (
            <div className="flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <Link
                href="/blog"
                className={`px-4 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase transition-all duration-300 no-underline ${
                  !isNews ? 'text-black' : 'text-white/55 hover:text-white'
                }`}
                style={!isNews ? {
                  background: 'color-mix(in srgb, var(--blog-accent-glow) 15%, transparent)',
                  color:      'var(--blog-accent-glow)',
                  boxShadow:  '0 0 20px color-mix(in srgb, var(--blog-accent-glow) 15%, transparent)',
                } : {}}
              >
                Blog
              </Link>
              <Link
                href="/news"
                className={`px-4 py-1.5 rounded-full text-xs tracking-[0.18em] uppercase transition-all duration-300 no-underline ${
                  isNews ? '' : 'text-white/55 hover:text-white'
                }`}
                style={isNews ? {
                  background: 'color-mix(in srgb, var(--blog-accent-glow) 15%, transparent)',
                  color:      'var(--blog-accent-glow)',
                  boxShadow:  '0 0 20px color-mix(in srgb, var(--blog-accent-glow) 15%, transparent)',
                } : {}}
              >
                News
              </Link>
            </div>
          )}

          {/* CTA */}
          {nav.cta && nav.cta.href && nav.cta.text && (
            <>
              <a
                href={nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-black text-sm transition-all duration-300 hover:scale-105 no-underline"
                style={{
                  background: 'var(--blog-accent-glow)',
                  boxShadow:  '0 0 20px color-mix(in srgb, var(--blog-accent-glow) 25%, transparent)',
                }}
              >
                {nav.cta.text}
              </a>
              <a
                href={nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-black"
                style={{ background: 'var(--blog-accent-glow)' }}
                aria-label={nav.cta.text}
              >
                <Sparkles className="w-4 h-4" />
              </a>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
