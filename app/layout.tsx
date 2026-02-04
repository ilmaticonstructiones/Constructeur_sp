import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
// import { Analytics } from "@vercel/analytics/next"
import { notFound } from "next/navigation";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.trasterosyreformas.com",
    languages: {
      "es-ES": "https://www.trasterosyreformas.com/",
    },
  },
  metadataBase: new URL("https://www.trasterosyreformas.com"),
  title: {
    default: "ILMATI Construcciones - Reformas, cartón_yeso y Trasteros",
    template: "%s | ILMATI Construcciones"
  },
  description:
     "Especialistas en reformas integrales, cartón_yeso y trasteros en Madrid, Guadalajara y España. 15 años de experiencia y presupuesto gratuito."
,
  keywords: [
    "reformas integrales Madrid",
    "instalación cartón_yeso Guadalajara",
    "trasteros a medida España",
    "construcción profesional",
    "reformas de baños Madrid",
    "reformas de cocinas Guadalajara",
    "cartón_yeso acústico",
    "falsos techos cartón_yeso",
    "tabiques cartón_yeso",
    "empresa construcción España",
    "ILMATI Construcciones",
    "contratistas profesionales Madrid",
    "pintura profesional",
    "fontanería reformas",
    "electricidad obras",
  ].join(", "),
  authors: [{ name: "ILMATI Construcciones", url: "https://www.trasterosyreformas.com/" }],
  creator: "ILMATI Construcciones",
  publisher: "ILMATI Construcciones",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.trasterosyreformas.com/",
    siteName: "ILMATI Construcciones - Reformas, cartón_yeso y Trasteros",
    title: "ILMATI Construcciones - Especialistas en Reformas, cartón_yeso y Trasteros",
    description: "Expertos en reformas integrales, instalación de cartón_yeso y trasteros a medida en Madrid, Guadalajara y toda España. Más de 15 años de experiencia.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ILMATI Construcciones - Especialistas en reformas, cartón_yeso y trasteros",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ILMATI_Construcciones",
    creator: "@ILMATI_Construcciones",
    title: "ILMATI Construcciones - Reformas, cartón_yeso y Trasteros",
    description: "Especialistas en reformas integrales, instalación de cartón_yeso y trasteros a medida en España",
    images: ["/twitter-image.jpg"],
  },
  category: "Construcción y Reformas",
  other: {
    "google-site-verification": "your-google-verification-code",
  },
}

// Comprehensive structured data for better SEO
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.trasterosyreformas.com/#organization",
  name: "ILMATI Construcciones",
  url: "https://www.trasterosyreformas.com",
  logo: "https://www.trasterosyreformas.com/logo.png",
  description: "Empresa especializada en reformas integrales, instalación de cartón_yeso y construcción de trasteros a medida en España",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. Occidente",
    addressLocality: "Hiendelaencina",
    addressRegion: "Guadalajara",
    postalCode: "19242",
    addressCountry: "ES"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-643-516-352",
    contactType: "customer service",
    areaServed: "ES",
    availableLanguage: "es"
  },
  sameAs: [
    "https://www.facebook.com/ilmaticonstrucciones",
    "https://www.instagram.com/ilmaticonstrucciones"
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.4168,
      longitude: -3.7038
    },
    geoRadius: "200000"
  }
}

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.trasterosyreformas.com/#website",
  url: "https://www.trasterosyreformas.com",
  name: "ILMATI Construcciones",
  description: "Especialistas en reformas, cartón_yeso y trasteros en España",
  publisher: {
    "@id": "https://www.trasterosyreformas.com/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.trasterosyreformas.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} scroll-smooth`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/" as="image" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#164e63" />
        <meta name="msapplication-TileColor" content="#164e63" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        
        {/* Google Tag Manager with optimized loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','AW-17574863860');
            `,
          }}
        />
        
        {/* Google Analytics with performance optimization */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17574863860"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17574863860', {
                page_title: document.title,
                page_location: window.location.href,
                transport_type: 'beacon',
                send_page_view: false
              });
            `,
          }}
        />

        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical above-the-fold styles */
              .min-h-screen { min-height: 100vh; }
              .bg-white { background-color: #ffffff; }
              .bg-orange-500 { background-color: #f97316; }
              .text-white { color: #ffffff; }
              .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
              .px-4 { padding-left: 1rem; padding-right: 1rem; }
              .max-w-4xl { max-width: 56rem; }
              .mx-auto { margin-left: auto; margin-right: auto; }
              .text-center { text-align: center; }
              .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
              .font-bold { font-weight: 700; }
              .mb-4 { margin-bottom: 1rem; }
              .sr-only { 
                position: absolute; 
                width: 1px; 
                height: 1px; 
                padding: 0; 
                margin: -1px; 
                overflow: hidden; 
                clip: rect(0,0,0,0); 
                white-space: nowrap; 
                border: 0; 
              }
              
              /* Font loading optimization */
              .font-sans {
                font-family: var(--font-dm-sans), system-ui, -apple-system, sans-serif;
              }
              
              /* Performance optimizations */
              * {
                box-sizing: border-box;
              }
              
              html {
                scroll-behavior: smooth;
              }
              
              body {
                text-rendering: optimizeSpeed;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-17574863860"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        {/* <Analytics /> */}
        
        {/* Comprehensive Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.trasterosyreformas.com/#local-business",
              name: "ILMATI Construcciones",
              url: "https://www.trasterosyreformas.com",
              telephone: "+34-643-516-352",
              email: "ilmaticonstrucciones@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C. Occidente",
                postalCode: "19242",
                addressLocality: "Hiendelaencina",
                addressRegion: "Guadalajara",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.0843,
                longitude: -2.6709
              },
              areaServed: ["Madrid", "Guadalajara", "Castilla-La Mancha", "Comunidad de Madrid"],
              serviceType: [
                "Reformas integrales",
                "Instalación de cartón_yeso", 
                "Construcción de trasteros",
                "Pintura profesional",
                "Fontanería y electricidad"
              ],
              openingHours: "Mo-Su 07:00-22:00",
              priceRange: "€€",
              description: "Empresa especializada en reformas integrales, instalación de cartón_yeso y construcción de trasteros a medida en España",
            }),
          }}
        />
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'navigation') {
                      console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart);
                    }
                  }
                });
                observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
              }
              
              // Lazy loading for non-critical resources
              document.addEventListener('DOMContentLoaded', function() {
                const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
                if ('IntersectionObserver' in window) {
                  const lazyImageObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                      if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
                        lazyImageObserver.unobserve(lazyImage);
                      }
                    });
                  });
                  lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}