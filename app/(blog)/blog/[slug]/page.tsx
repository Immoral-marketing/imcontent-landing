import { notFound }    from 'next/navigation'
import { supabase }    from '@/lib/supabase'
import ArticleHero     from '@Immoral-marketing/motor-blog/components/blog/ArticleHero'
import ReadingProgress from '@Immoral-marketing/motor-blog/components/blog/ReadingProgress'
import SubscribeCTA    from '@Immoral-marketing/motor-blog/components/blog/SubscribeCTA'
import { blogConfig }  from '@/lib/blog-config'
import type { Metadata } from 'next'

export const revalidate = 3600

async function getArticulo(slug: string) {
  const { data } = await supabase
    .from('articulos')
    .select('*')
    .eq('slug', slug)
    .eq('vertical_id', process.env.VERTICAL_ID!)
    .eq('estado', 'publicado')
    .single()
  return data
}

function readingMinutes(html: string | null | undefined): number {
  if (!html) return 1
  const text  = html.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug }  = await params
  const articulo  = await getArticulo(slug)
  if (!articulo)  return { title: 'Artículo no encontrado' }

  const title     = articulo.seo_title || articulo.titular
  const desc      = articulo.meta_description
                    || articulo.cuerpo?.replace(/<[^>]*>/g, '').slice(0, 160)
                    || ''
  const ogImage   = articulo.og_image_url || articulo.imagen_url || null
  const canonical = articulo.canonical_url
                    || `${process.env.NEXT_PUBLIC_APP_URL}/blog/${articulo.slug}`

  return {
    title:       `${title} | ${blogConfig.siteName}`,
    description: desc,
    robots:      articulo.noindex
      ? { index: false, follow: false }
      : { index: true,  follow: true  },
    alternates:  { canonical },
    openGraph: {
      title,
      description:   desc,
      url:           canonical,
      siteName:      blogConfig.siteName,
      images:        ogImage
        ? [{ url: ogImage, width: 1200, height: 630,
             alt: articulo.imagen_alt_text || title }]
        : [],
      type:          'article',
      publishedTime: articulo.fecha_publicacion ?? undefined,
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description: desc,
      images:      ogImage ? [ogImage] : [],
    },
  }
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }  = await params
  const articulo  = await getArticulo(slug)
  if (!articulo)  notFound()

  const minutos = readingMinutes(articulo.cuerpo)

  return (
    <main className="relative">
      <ReadingProgress />
      <ArticleHero
        titular={articulo.titular}
        categoria={articulo.categoria}
        fecha_publicacion={articulo.fecha_publicacion}
        imagen_url={articulo.imagen_url}
        readingMinutes={minutos}
        imagen_alt_text={articulo.imagen_alt_text}
      />
      <article className="px-6 mb-24">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: articulo.cuerpo || '' }}
          />
        </div>
      </article>
      <SubscribeCTA variant="compact" />
    </main>
  )
}
