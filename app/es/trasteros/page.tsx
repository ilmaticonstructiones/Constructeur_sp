// Trasteros.tsx
'use client'

import Head from 'next/head';
import { MapPin, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const criticalCSS = `...`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ilmaticonstrucciones - Trasteros y Almacenaje",
  "description": "Soluciones de trasteros, armarios empotrados y optimización de espacio en viviendas en Guadalajara y Madrid.",
  "url": "https://www.trasterosyreformas.com/trasteros",
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
      "name": "¿Cuánto cuesta construir un trastero o armario empotrado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El coste varía según tamaño y acabados, pero ofrecemos soluciones económicas y modulares para maximizar el espacio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Instalan trasteros en comunidades de vecinos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos con comunidades y adaptamos las soluciones a normativas y accesos comunitarios."
      }
    }
  ]
};

export default function Trasteros() {
  const [loading, setLoading] = useState(false);

  const externalResources = [
    {
      name: "Normativa de accesibilidad en viviendas",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-9272",
      description: "Documento Básico de Seguridad de Utilización"
    },
    {
      name: "Asociación Española de Fabricantes de Muebles",
      url: "https://www.anieme.es/",
      description: "ANIEME - Asociación sectorial"
    },
    {
      name: "Guía de organización del espacio en el hogar",
      url: "https://www.consumer.es/",
      description: "Organización y optimización de espacios"
    }
  ];

  return (
    <>
      <Head>
        <title>Trasteros y Armarios Empotrados en Guadalajara | Ilmaticonstrucciones</title>
        <meta name="description" content="Trasteros, armarios empotrados y soluciones de almacenaje en Guadalajara y Madrid. Optimiza tu espacio con diseño profesional." />
        <meta name="keywords" content="trasteros Guadalajara, trasteros baratos, armarios empotrados, almacenaje casa" />
        <link rel="canonical" href="https://www.trasterosyreformas.com/trasteros" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </Head>

      {loading && <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50"><div className="h-full bg-orange-600 animate-pulse"></div></div>}

      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Trasteros y Soluciones de Almacenaje</h1>
          <p className="mb-6">Diseñamos trasteros, armarios empotrados y soluciones a medida para aprovechar cada centímetro de tu vivienda.</p>
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Opciones de trasteros</h2>
          <ul className="mb-6">
            <li>Trasteros a medida dentro de viviendas.</li>
            <li>Armarios empotrados con puertas correderas.</li>
            <li>Sistemas modulares de almacenaje y estanterías.</li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">Solicita tu presupuesto</h3>
            <p className="mb-3">Medimos el espacio y proponemos soluciones prácticas y económicas para optimizar tu hogar.</p>
            <p className="font-semibold">Tel: <a href="tel:+34643516352" className="text-orange-500">+34 643 516 352</a></p>
            <p className="font-semibold">Email: <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500">ilmaticonstrucciones@gmail.com</a></p>
          </div>

          {/* External Resources Section */}
          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Recursos de organización y normativas</h4>
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