// ReformasIntegrales.tsx
'use client'

import Head from 'next/head';
import { Home, MapPin, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const criticalCSS = `...`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ilmaticonstrucciones - Reformas Integrales",
  "description": "Reformas integrales de viviendas: diseño, ejecución y entrega llave en mano en Guadalajara y Madrid.",
  "url": "https://www.trasterosyreformas.com/reformas-integrales",
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
  "areaServed": ["Guadalajara", "Madrid", "España"],
  "openingHours": "Mo-Su 08:00-20:00"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué incluye una reforma integral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una reforma integral incluye demolición, instalaciones eléctricas y de fontanería, alicatados, suelos, carpintería, pintura y acabados finales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen garantía en las reformas integrales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, damos garantía sobre la mano de obra y los materiales según la normativa vigente y nuestros acuerdos."
      }
    }
  ]
};

export default function ReformasIntegrales() {
  const [loading, setLoading] = useState(false);

  const externalResources = [
    {
      name: "Reglamento Electrotécnico Baja Tensión",
      url: "https://www.boe.es/buscar/doc.php?id=DOUE-L-2014-82157",
      description: "Normativa eléctrica oficial"
    },
    {
      name: "Colegio Oficial de Arquitectos de Madrid",
      url: "https://www.coam.org/",
      description: "Colegio profesional de arquitectura"
    },
    {
      name: "Guía de eficiencia energética en viviendas",
      url: "https://www.idae.es/",
      description: "Instituto para la Diversificación y Ahorro de la Energía"
    }
  ];

  return (
    <>
      <Head>
        <title>Reformas Integrales en Guadalajara | Ilmaticonstrucciones</title>
        <meta name="description" content="Reformas integrales llave en mano en Guadalajara y Madrid. Gestión de proyectos, materiales y equipos profesionales." />
        <meta name="keywords" content="reformas integrales Guadalajara, reforma llave en mano, reforma vivienda Madrid" />
        <link rel="canonical" href="https://www.trasterosyreformas.com/reformas-integrales" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </Head>

      {loading && <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50"><div className="h-full bg-orange-600 animate-pulse"></div></div>}

      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Reformas Integrales y Llave en Mano</h1>
          <p className="mb-6">Gestionamos tu reforma integral desde el proyecto hasta la entrega. Control de costes, tiempos y calidad en cada etapa.</p>
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Proceso de trabajo</h2>
          <ol className="mb-6">
            <li>Visita y medición.</li>
            <li>Proyecto y presupuesto detallado.</li>
            <li>Ejecución por equipos especializados.</li>
            <li>Entrega y garantía.</li>
          </ol>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">Consigue tu proyecto llave en mano</h3>
            <p className="mb-3">Coordinamos arquitectos, suministros y ejecución para que no tengas que preocuparte de nada.</p>
            <p className="font-semibold">Tel: <a href="tel:+34643516352" className="text-orange-500">+34 643 516 352</a></p>
            <p className="font-semibold">Email: <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500">ilmaticonstrucciones@gmail.com</a></p>
          </div>

          {/* External Resources Section */}
          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Normativas y recursos técnicos</h4>
            <div className="space-y-3">
              {externalResources.map((resource, index) => (
                <div key={index} className="flex items-start">
                  <ExternalLink size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {resource.name}
                    </a>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Zonas de servicio</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Guadalajara", "Madrid", "Azuqueca de Henares", "Alcalá de Henares", "Torrejón de Ardoz", "Coslada"].map((z, i) => (
                <div key={i} className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />{z}</div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}