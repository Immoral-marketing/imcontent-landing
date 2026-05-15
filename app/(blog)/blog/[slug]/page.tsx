import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { getVerticalConfig } from '@/lib/vertical'
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const [articulo, vertical] = await Promise.all([
    getArticulo(slug),
    getVerticalConfig(),
  ])

  if (!articulo) return { title: 'Artículo no encontrado' }

  const siteTitle = vertical?.seo_site_title || 'imcontent'
  const title     = articulo.seo_title || articulo.titular
  const desc      = articulo.meta_description
                    || articulo.cuerpo?.replace(/<[^>]*>/g, '').slice(0, 160)
                    || ''
  const ogImage   = articulo.og_image_url
                    || articulo.imagen_url
                    || vertical?.seo_default_og_image
                    || null
  const canonical = articulo.canonical_url
                    || `${process.env.NEXT_PUBLIC_APP_URL}/blog/${articulo.slug}`

  return {
    title:       `${title} | ${siteTitle}`,
    description: desc,
    robots: articulo.noindex
      ? { index: false, follow: false }
      : { index: true,  follow: true  },
    alternates: { canonical },
    openGraph: {
      title,
      description:   desc,
      url:           canonical,
      siteName:      siteTitle,
      images: ogImage
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
  const { slug } = await params
  const articulo = await getArticulo(slug)
  if (!articulo) notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-6">{articulo.titular}</h1>
      {articulo.imagen_url && (
        <img
          src={articulo.imagen_url}
          alt={articulo.imagen_alt_text || articulo.titular}
          className="w-full rounded-xl mb-8"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: articulo.cuerpo || '' }}
      />
    </main>
  )
}
