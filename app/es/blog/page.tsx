"use client"
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Keyword = {
  title: string;
  text: string;
  slug: string;
};

const keywords: Keyword[] = [
  { 
    title: "alquiler de trasteros", 
    slug: "alquiler-de-trasteros",
    text: "Descubre todo sobre el alquiler de trasteros: precios, tamaños, ubicaciones y consejos para elegir el mejor espacio de almacenamiento para tus necesidades." 
  },
  { 
    title: "trasteros baratos", 
    slug: "trasteros-baratos",
    text: "Encuentra trasteros económicos sin comprometer calidad. Compara precios, promociones y ofertas especiales en diferentes ubicaciones." 
  },
  // ... rest of your keywords with unique descriptions and slugs
];

// Critical CSS for above-the-fold content
const criticalCSS = `
  .min-h-screen { min-height: 100vh; }
  .bg-white { background-color: #fff; }
  .bg-orange-500 { background-color: #f97316; }
  .text-white { color: #fff; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .max-w-4xl { max-width: 56rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }
  .text-center { text-align: center; }
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .font-bold { font-weight: 700; }
  .mb-4 { margin-bottom: 1rem; }
`;

export default function Blog() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Prefetch main page for better navigation performance
  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(href);
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Guía Completa: Trasteros, cartón_yeso, Pintura y Reformas",
    "description": "Información especializada sobre trasteros, cartón_yeso, pintura y servicios de reformas en España",
    "publisher": {
      "@type": "Organization",
      "name": "Tu Empresa",
      "url": "https://tudominio.com"
    },
    "mainEntity": keywords.map(keyword => ({
      "@type": "Article",
      "headline": keyword.title,
      "description": keyword.text,
      "url": `https://tudominio.com/blog/${keyword.slug}`
    }))
  };

  return (
    <>
      <Head>
        <title>Blog Especializado: Trasteros, cartón_yeso, Pintura y Reformas | Guía 2024</title>
        <meta 
          name="description" 
          content="Guía completa y actualizada 2024 sobre trasteros, instalación de cartón_yeso, servicios de pintura y reformas integrales. Expertos en soluciones de almacenamiento y mejora del hogar." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://tudominio.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog Especializado: Trasteros, cartón_yeso, Pintura y Reformas" />
        <meta property="og:description" content="Guía completa 2024 sobre trasteros, cartón_yeso, pintura y reformas. Soluciones profesionales para tu hogar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com/blog" />
        <meta property="og:image" content="https://tudominio.com/" />
        <meta property="og:site_name" content="Tu Empresa" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Especializado: Trasteros, cartón_yeso, Pintura y Reformas" />
        <meta name="twitter:description" content="Guía completa 2024 sobre servicios de reformas y almacenamiento" />
        <meta name="twitter:image" content="https://tudominio.com/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload important pages */}
        <link rel="preload" href="/" as="document" />
      </Head>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50">
          <div className="h-full bg-orange-600 animate-pulse"></div>
        </div>
      )}
      
      <main className="min-h-screen bg-white">
        {/* Hero Section with semantic HTML */}
        <section aria-labelledby="main-heading" className="bg-orange-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 id="main-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Guía Completa: Trasteros, cartón_yeso, Pintura y Reformas 2024
            </h1>
            <p className="text-xl text-orange-50 mb-8">
              Información especializada y actualizada sobre soluciones de almacenamiento y mejora del hogar
            </p>
            
            {/* Breadcrumb navigation */}
            <nav aria-label="Migas de pan" className="text-sm text-orange-100 mb-8">
              <ol className="flex justify-center space-x-2">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li aria-hidden="true">→</li>
                <li className="text-white font-semibold">Blog</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Keywords Grid with semantic markup */}
        <section aria-labelledby="keywords-heading" className="max-w-7xl mx-auto px-4 py-16">
          <h2 id="keywords-heading" className="sr-only">Temas Especializados</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keywords.map((item, index) => (
              <article
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all duration-300 bg-white"
                itemScope
                itemType="https://schema.org/Article"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="headline">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed" itemProp="description">
                  {item.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Beneficios Principales:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Mejora de calidad y durabilidad</li>
                    <li>• Optimización de costes y presupuesto</li>
                    <li>• Servicio profesional garantizado</li>
                  </ul>
                </div>
                
                {/* Read more link for better SEO */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    href={`/blog/${item.slug}`}
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors"
                    aria-label={`Leer más sobre ${item.title}`}
                  >
                    Leer guía completa →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Schema Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 bg-gray-50 rounded-lg my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes sobre Reformas y Trasteros
          </h2>
          <div className="space-y-6">
            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cuánto cuesta una reforma integral?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text" className="text-gray-600">
                  El precio de una reforma integral varía según metros cuadrados y materiales. Contacta para presupuesto personalizado.
                </p>
              </div>
            </div>
            <div itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                ¿Qué ventajas tiene el cartón_yeso frente a otros materiales?
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text" className="text-gray-600">
                  El cartón_yeso ofrece rapidez de instalación, versatilidad, aislamiento acústico y térmico, y mayor limpieza en obra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="bg-gray-900 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-white mb-4">
              ¿Preparado para Tu Proyecto de Reformas?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Obtén un presupuesto personalizado sin compromiso con nuestros expertos en trasteros, cartón_yeso, pintura y reformas integrales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                onClick={(e) => handleNavigation(e, '/')}
                className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label="Volver a la página principal"
              >
                Volver al Inicio
              </Link>
              <a
                href="tel:+34643516352"
                className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Llamar al número de contacto"
              >
                📞 Llamar Ahora: +34 643 516 352
              </a>
            </div>
            
            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">⭐</span>
                <span>Servicio Garantizado</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🚀</span>
                <span>Respuesta Rápida</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💯</span>
                <span>Presupuesto Sin Compromiso</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}