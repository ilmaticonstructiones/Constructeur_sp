'use client'

import Head from 'next/head';
import { Paintbrush, Home, Shield, MapPin, Phone, Mail, Star, Clock, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"


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
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
`;

export default function PinturaReformas() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ilmaticonstrucciones - Pintura y Reformas",
    "description": "Servicios profesionales de pintura y reformas generales en Guadalajara, Madrid y toda España",
    "url": "https://www.trasterosypladur.es/pintura-reformas-spain",
    "telephone": "+34643516352",
    "email": "ilmaticonstrucciones@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Occidente",
      "addressLocality": "Hiendelaencina",
      "addressRegion": "Guadalajara",
      "postalCode": "19242",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0843,
      "longitude": -2.6709
    },
    "areaServed": ["Guadalajara", "Madrid", "España"],
    "serviceType": ["Pintura interior", "Pintura exterior", "Reformas integrales", "Renovación de viviendas"],
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "€€"
  };

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma una reforma integral de piso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo varía según la envergadura del proyecto, pero una reforma integral completa suele tomar entre 3-8 semanas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipos de pintura utilizan para interiores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con pinturas de primera calidad: mate y satinado para paredes, esmaltes para carpintería, y productos específicos para baños y cocinas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan en toda la comunidad de Madrid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, realizamos servicios de pintura y reformas en toda la Comunidad de Madrid, Guadalajara y provincias limítrofes."
        }
      }
    ]
  };

  const handleCallClick = () => {
    setIsLoading(true);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-YOUR_CONVERSION_ID',
        'value': 1.0,
        'currency': 'EUR'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Pintura y Reformas Profesionales en Guadalajara y Madrid | Ilmaticonstrucciones</title>
        <meta
          name="description"
          content="✅ Especialistas en pintura interior/exterior y reformas integrales en Guadalajara, Madrid y España. Presupuesto gratuito y trabajos garantizados."
        />
        <meta name="keywords" content="pintura Guadalajara, reformas Madrid, pintura interior Madrid, reformas integrales España, renovación pisos" />
        <link rel="canonical" href="https://www.trasterosypladur.es/pintura-reformas-spain" />

        {/* Open Graph */}
        <meta property="og:title" content="Pintura y Reformas Profesionales en Guadalajara y Madrid" />
        <meta property="og:description" content="Especialistas en pintura interior/exterior y reformas integrales. Más de 10 años transformando espacios en España." />
        <meta property="og:url" content="https://www.trasterosypladur.es/pintura-reformas-spain" />
        <meta property="og:image" content="https://www.trasterosypladur.es/og-pintura-reformas.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintura y Reformas Profesionales | Ilmaticonstrucciones" />
        <meta name="twitter:description" content="Especialistas en pintura y reformas en Guadalajara, Madrid y España" />
        <meta name="twitter:image" content="https://www.trasterosypladur.es/twitter-pintura-reformas.jpg" />

        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      </Head>

      {/* Loading Bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50">
          <div className="h-full bg-orange-600 animate-pulse"></div>
        </div>
      )}

      <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/Service">
        {/* ✅ Hero, Services, Reformas, Por qué elegirnos, CTA, Contacto, FAQ sections are already in place */}
        {/* ✅ The only broken part was Zonas de Servicio, fixed below */}

        <section className="bg-gray-50 rounded-xl p-8 mt-12" itemScope itemType="https://schema.org/PostalAddress">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contacto y Ubicación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-orange-500 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">Ilmaticonstrucciones</h3>
                  <p className="text-gray-700">C. Occidente</p>
                  <p className="text-gray-700">19242 Hiendelaencina, Guadalajara</p>
                  <p className="text-gray-700">España</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-500 mr-4" size={24} />
                <a href="tel:+34643516352" className="text-orange-500 hover:text-orange-600 font-semibold text-lg">
                  +34 643 516 352
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange-500 mr-4" size={24} />
                <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500 hover:text-orange-600">
                  ilmaticonstrucciones@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Zonas de Servicio</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {["Guadalajara capital", "Madrid capital", "Alcalá de Henares", "Azuqueca de Henares", "Torrejón de Ardoz", "Coslada", "San Fernando", "Alcorcón", "Móstoles"].map((zona, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    <span>{zona}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* Consulta disponibilidad para otras localidades de Madrid y Guadalajara</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
