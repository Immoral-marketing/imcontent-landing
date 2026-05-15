# Contexto y Especificaciones del Proyecto Imcontent-landing

Este documento define la arquitectura actual, los requisitos de migración y las directrices estrictas para cualquier agente de IA que trabaje en la migración de este proyecto Vite a Next.js. El objetivo principal es la **transición a Next.js (App Router)** garantizando que **la estética y la funcionalidad sean exactamente iguales (píxel a píxel)** para su posterior despliegue en **Vercel**.

## 1. Arquitectura Actual (Origen)
- **Framework:** React 18 con Vite 6.3.5.
- **Routing:** `react-router-dom` v7. Rutas actuales:
  - `/` -> `<HomePage />`
  - `/quienes-somos` -> `<AboutUsPage />`
  - `/servicios` -> `<ServicesPage />`
  - `/contacto` -> `<ContactPage />`
- **Estilos:** Tailwind CSS v4.1.12 (`@tailwindcss/vite`), integrado de forma profunda.
- **UI & Componentes Clave:**
  - **Radix UI:** Uso intensivo de primitivas.
  - **MUI (Material UI):** Presencia de `@mui/material` v7.3.5.
  - **Animaciones:** Framer Motion (`motion`) y `@splinetool/react-spline`.
  - **Librerías:** React Hook Form, Embla Carousel, Recharts, Sonner, Vaul, React-DND.
- **Manejo de Assets:** Plugin `figma-asset-resolver` mapeando `figma:asset/` a `./src/assets/`.
- **Particularidad:** El proyecto parece carecer de `tsconfig.json` en la raíz (Vite lo maneja internamente), pero usa extensiones `.tsx`.

## 2. Requisitos Estrictos de la Migración
1. **Preservación Estética 1:1:** No se permite alterar márgenes, fuentes (Lexend), animaciones ni comportamiento responsive.
2. **Despliegue en Vercel:** Optimizar para el runtime de Next.js.
3. **Manejo de Assets:** Mover `src/assets` a `public/assets` y ejecutar un refactor masivo de los imports `figma:asset/` a `/assets/`. Esto garantiza que Next.js encuentre los recursos sin hacks de compilación frágiles.
4. **Hydration Safety:** Debido al uso de librerías de terceros (Spline, Recharts, Framer Motion), es CRÍTICO prevenir errores de hidratación.

## 3. Plan de Migración Detallado (Estrategia Optimizada)

### Fase 1: Entorno y Configuración
1. **Instalación:** `next@latest`, `react@latest`, `react-dom@latest`.
2. **TypeScript:** Crear `tsconfig.json` con el alias `"@/*": ["./src/*"]` para mantener compatibilidad con los imports actuales.
3. **Tailwind v4:** Instalar `@tailwindcss/postcss` y configurar `postcss.config.mjs` para que Next.js procese Tailwind v4 correctamente (ya que no usará el plugin de Vite).
4. **MUI Setup:** Configurar `AppRouterCacheProvider` para evitar saltos de estilos (FOUC).

### Fase 2: Estructura de "Client Providers"
1. Crear `src/app/providers.tsx` (Client Component) para envolver la aplicación con:
   - `ThemeProvider` (de `next-themes`).
   - `AppRouterCacheProvider` (MUI).
   - `DndProvider` (React DND).
   - `Toaster` (Sonner).
2. Esto permite que `app/layout.tsx` siga siendo un Server Component mientras mantiene el contexto necesario para las librerías interactivas.

### Fase 3: Migración de Rutas y Componentes
1. **Layout:** `app/layout.tsx` debe importar `globals.css` (antes `index.css`) y usar la fuente `Lexend` mediante `next/font/google` para mejorar el SEO y rendimiento.
2. **Páginas:** Crear carpetas para cada ruta (`quienes-somos`, `servicios`, `contacto`) con su respectivo `page.tsx`.
3. **Componentes:** 
   - Añadir `"use client"` a componentes que usen hooks o animaciones.
   - Usar `dynamic(() => import(...), { ssr: false })` para componentes pesados como Spline o Gráficos de Recharts para evitar errores en el servidor.
   - Reemplazar `Link` de `react-router-dom` por `next/link`.

### Fase 4: Refactor de Assets y Scripts
1. **Refactor Masivo:** Buscar y reemplazar todas las instancias de `figma:asset/` por `/assets/`.
2. **External Scripts:** Si existe código de terceros (como formularios de ActiveCampaign), usar el componente `Script` de Next.js.
3. **Limpieza:** Eliminar `vite`, `react-router-dom` y plugins de Vite.

## 4. Checklist Anti-Bugs y Casos de Borde
- [ ] **Rutas y Alias:** ¿El alias `@` está configurado en `tsconfig.json` y `next.config.mjs`?
- [ ] **Hydration:** ¿Los componentes con `window` o `document` están protegidos?
- [ ] **SSR de Componentes Pesados:** ¿Se usa `dynamic(..., { ssr: false })` para `@splinetool/react-spline` y `recharts`?
- [ ] **CSS de Terceros:** Asegurar que los estilos de `embla-carousel`, `react-slick` y `tw-animate-css` se importen en `app/layout.tsx`.
- [ ] **Portals:** Revisar que los modales y dropdowns de Radix UI y MUI no tengan problemas de z-index al cambiar a App Router.
- [ ] **Metadata:** Crear el objeto `metadata` en `app/layout.tsx` para reemplazar el `<title>` y `<meta>` de `index.html`.
- [ ] **Formularios:** Verificar que `react-hook-form` siga funcionando sin problemas tras el cambio de contexto del router.

## 5. Manejo de Librerías Específicas
- **Spline:** Es propenso a errores en el build de Next.js. Se DEBE importar dinámicamente.
- **MUI v7:** Requiere `AppRouterCacheProvider`. No omitir este paso o los componentes se verán sin estilo durante el primer segundo.
- **Framer Motion:** Mantener el uso de `motion` (v12) y asegurar que las props `whileInView` tengan un contenedor con `position: relative` (ver `fix-positions.sh`).
- **Next-Themes:** Envolver en el `providers.tsx` con la prop `attribute="class"` para evitar conflictos con Tailwind.

## 6. Notas Críticas para el Agente
- **Cero Inferencias:** Si un componente de Figma parece roto tras la migración, no intentes "mejorar" el CSS. Busca por qué el framework de Next.js está aplicando un estilo diferente.
- **Scroll:** Next.js gestiona el scroll automáticamente. Prueba si el componente `ScrollToTop` actual interfiere con el comportamiento nativo.
- **Imágenes:** Aunque `next/image` es preferible, si causa problemas de posicionamiento exacto con el código de Figma, usa `img` estándar temporalmente para asegurar el 1:1 estético.
