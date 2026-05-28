import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Providers from "./providers";
import { TrackingInjector } from "@Immoral-marketing/motor-blog";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Imcontent",
  description: "Contenido audiovisual creado con IA. Más rapidez, más eficiencia y foco en resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${lexend.variable} antialiased min-h-screen bg-white relative`}>
        <TrackingInjector verticalId={process.env.VERTICAL_ID} />
        <Providers>
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </Providers>

        {/* GTM — capa 2: cobertura completa del dominio */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm-root"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            ` }}
          />
        )}
      </body>
    </html>
  );
}
