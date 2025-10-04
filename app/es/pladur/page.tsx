// Pladur.tsx
'use client'

import Head from 'next/head';
import { MapPin, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const criticalCSS = `...`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ilmaticonstrucciones - Pladur y Tabiques",
  "description": "Instalación y soluciones Pladur en Guadalajara y Madrid: tabiques, techos desmontables y aislamiento acústico.",
  "url": "https://www.trasterosypladur.es/pladur",
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
      "name": "¿Qué es pladur y para qué sirve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El pladur es una placa de yeso laminado que se usa para crear tabiques, falsos techos y acabados rápidos con buen aislamiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se tarda en instalar un falso techo de pladur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un falso techo de pladur en una habitación media suele instalarse en 1-2 días, dependiendo del acabado y el acceso."
      }
    }
  ]
};

export default function Pladur() {
  const [loading, setLoading] = useState(false);

  const externalResources = [
    {
      name: "Normativa técnica de construcción CTE",
      url: "https://www.codigotecnico.org/",
      description: "Código Técnico de la Edificación oficial"
    },
    {
      name: "Asociación de Fabricantes de Yeso",
      url: "https://www.atedy.es/",
      description: "Asociación técnica de yesos y escayolas"
    },
    {
      name: "Guía de aislamiento acústico",
      url: "https://www.mitma.gob.es/",
      description: "Ministerio de Transportes, Movilidad y Agenda Urbana"
    }
  ];

  return (
    <>
      <Head>
        <title>Pladur en Guadalajara y Madrid | Ilmaticonstrucciones</title>
        <meta name="description" content="Instalación de pladur: tabiques, techos y soluciones para reformas en Guadalajara y Madrid. Presupuesto rápido y garantía." />
        <meta name="keywords" content="pladur Guadalajara, pladur Madrid, falso techo pladur, tabiques pladur" />
        <link rel="canonical" href="https://www.trasterosypladur.es/pladur" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      </Head>

      {loading && <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50"><div className="h-full bg-orange-600 animate-pulse"></div></div>}

      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Pladur: Tabiques, Techos y Aislamiento</h1>
          <p className="mb-6">Trabajamos con soluciones pladur para reformas en Guadalajara y la Comunidad de Madrid. Rapidez, limpieza y acabados profesionales.</p>
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Instalaciones comunes</h2>
          <ul className="mb-6">
            <li>Tabiques interiores para redistribución.</li>
            <li>Falsos techos para ocultar instalaciones.</li>
            <li>Aislamiento térmico y acústico con pladur y lana mineral.</li>
          </ul>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">Solicitud de presupuesto</h3>
            <p className="mb-3">Presupuesto detallado por m² y opciones según acabados. Servicio profesional y limpio.</p>
            <p className="font-semibold">Tel: <a href="tel:+34643516352" className="text-orange-500">+34 643 516 352</a></p>
            <p className="font-semibold">Email: <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500">ilmaticonstrucciones@gmail.com</a></p>
          </div>

          {/* External Resources Section */}
          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Recursos técnicos de construcción</h4>
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