import type { BlogConfig } from '@Immoral-marketing/motor-blog/lib/types'

export const blogConfig: BlogConfig = {
  siteName: 'imcontent',

  nav: {
    logo: {
      src:  '/assets/4b809f1bb00613cd9fd4d3b0f6724cf9516b9d57.png',
      alt:  'imcontent',
      href: '/',
    },
    showBlogNewsToggle: false,
    // Sin CTA — el navbar del blog de imcontent no tiene botón
  },

  hero: {
    title:     'Contenido audiovisual',
    titleAlt:  'creado con IA',
    subtitle:  'Más rapidez, más eficiencia y foco en resultados.',
    frequency: 'Actualizado regularmente',
  },

  cta: {
    badge:       'Newsletter',
    title:       'Contenido que convierte.',
    titleAlt:    'Creado con IA.',
    description: 'Descubre cómo imcontent transforma tu estrategia de contenido con inteligencia artificial.',
    compact: {
      title:       'Contenido que convierte. Creado con IA.',
      description: 'Descubre cómo imcontent puede ayudarte.',
    },
    stats: [
      'Actualizado regularmente',
      'Sin spam',
    ],
  },

  emptyState: {
    title:       'Próximamente',
    description: 'Estamos preparando el contenido. Suscríbete para ser el primero en recibirlo.',
  },
}
