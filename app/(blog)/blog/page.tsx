import { supabase } from '@/lib/supabase'
import { getVerticalConfig } from '@/lib/vertical'
import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const vertical = await getVerticalConfig()
  return {
    title: `Blog | ${vertical?.seo_site_title || 'imcontent'}`,
    description: vertical?.llm_txt_description || undefined,
  }
}

async function getArticulos() {
  const { data } = await supabase
    .from('articulos')
    .select('id, titular, slug, meta_description, imagen_url, categoria, fecha_publicacion')
    .eq('vertical_id', process.env.VERTICAL_ID!)
    .eq('estado', 'publicado')
    .eq('noindex', false)
    .order('fecha_publicacion', { ascending: false })
    .limit(20)
  return data || []
}

export default async function BlogPage() {
  const articulos = await getArticulos()

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-12">Blog</h1>
      <div className="space-y-8">
        {articulos.map(a => (
          <article key={a.id}>
            <Link href={`/blog/${a.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:underline">
                {a.titular}
              </h2>
              {a.meta_description && (
                <p className="text-gray-600 mt-2">{a.meta_description}</p>
              )}
            </Link>
          </article>
        ))}
        {articulos.length === 0 && (
          <p className="text-gray-500">Próximamente.</p>
        )}
      </div>
    </main>
  )
}
