// Pintura.tsx
'use client'

import Head from 'next/head';
import { Paintbrush, MapPin, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const criticalCSS = `...`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ilmaticonstrucciones - Pintura Profesional",
  "description": "Pintura interior y exterior en Guadalajara y Madrid: acabados duraderos, pintura antihumedad y lacado de muebles.",
  "url": "https://www.trasterosyreformas.com/pintura",
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
      "name": "¿Qué tipo de pintura recomiendan para interiores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos pinturas base agua de calidad para interiores: mate para paredes y satinado para zonas con más roce."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen lacado de puertas y muebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos lacado y lijado profesional para puertas, ventanas y muebles con acabados duraderos."
      }
    }
  ]
};

export default function Pintura() {
  const [loading, setLoading] = useState(false);
  
  const externalResources = [
    {
      name: "Guía oficial de pinturas ecológicas",
      url: "https://www.idae.es/",
      description: "Instituto para la Diversificación y Ahorro de la Energía"
    },
    {
      name: "Normativas de construcción en Madrid",
      url: "https://www.comunidad.madrid/servicios/vivienda/reglamentacion-tecnica-edificacion",
      description: "Comunidad de Madrid"
    },
    {
      name: "Asociación Nacional de Fabricantes de Pinturas",
      url: "https://www.asefapi.com/",
      description: "ASEFAPI - Asociación sectorial"
    }
  ];

  return (
    <>
      <Head>
        <title>Pintura Profesional en Guadalajara | Ilmaticonstrucciones</title>
        <meta name="description" content="Pintura interior y exterior en Guadalajara y Madrid. Servicios profesionales, pintura antihumedad y lacado de muebles. Presupuesto rápido." />
        <meta name="keywords" content="pintura Guadalajara, pintura interior, lacado puertas, pintura exterior Madrid" />
        <link rel="canonical" href="https://www.trasterosyreformas.com/pintura" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </Head>

      {loading && <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50"><div className="h-full bg-orange-600 animate-pulse"></div></div>}

      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Pintura Profesional en Guadalajara y Madrid</h1>
          <p className="mb-6">Acabados duraderos, preparación de superficies y trabajos limpios. Pintura interior, exterior y tratamiento antihumedad.</p>
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Servicios de pintura</h2>
          <ul className="mb-6">
            <li>Pintura de interiores y exteriores.</li>
            <li>Tratamientos antihumedad y reparación de grietas.</li>
            <li>Lacado y barnizado de carpintería.</li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">Presupuesto sin compromiso</h3>
            <p className="mb-3">Medición exacta y presupuesto por m². Materiales de primera y mano de obra profesional.</p>
            <p className="font-semibold">Tel: <a href="tel:+34643516352" className="text-orange-500">+34 643 516 352</a></p>
            <p className="font-semibold">Email: <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500">ilmaticonstrucciones@gmail.com</a></p>
          </div>

          {/* External Resources Section */}
          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Recursos profesionales de pintura</h4>
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