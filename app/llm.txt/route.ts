import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { getVerticalConfig } from '@/lib/vertical'

export const revalidate = 3600

export async function GET() {
  const vertical   = await getVerticalConfig()
  const baseUrl    = process.env.NEXT_PUBLIC_APP_URL || ''
  const verticalId = process.env.VERTICAL_ID || ''

  const siteName    = vertical?.seo_site_title || 'imcontent'
  const description = vertical?.llm_txt_description ||
    'imcontent es una agencia de contenido audiovisual creado con IA.'

  const { data: articulos } = await supabase
    .from('articulos')
    .select('titular, slug, meta_description')
    .eq('vertical_id', verticalId)
    .eq('estado', 'publicado')
    .eq('noindex', false)
    .order('fecha_publicacion', { ascending: false, nullsFirst: false })
    .limit(50)

  const articulosList = (articulos || [])
    .map(a =>
      `- [${a.titular}](${baseUrl}/blog/${a.slug})${
        a.meta_description ? ': ' + a.meta_description : ''
      }`
    )
    .join('\n')

  const content = `# ${siteName}

> ${description}

## Sobre este sitio

- URL: ${baseUrl}
- Idioma: Español

## Uso del contenido

El contenido puede ser indexado y citado con atribución a ${siteName}.

## Artículos recientes

${articulosList}
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
