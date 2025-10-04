// ReformasGenerales.tsx
'use client'

import Head from 'next/head';
import { Home, MapPin, Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const criticalCSS = `...`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ilmaticonstrucciones - Reformas Generales",
  "description": "Reformas generales en Guadalajara y Madrid: cocinas, baños, reformas integrales y pequeñas obras con presupuesto claro.",
  "url": "https://www.trasterosypladur.es/reformas-generales",
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
  "openingHours": "Mo-Su 08:00-20:00",
  "priceRange": "€€"
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una reforma general de piso en Guadalajara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende del alcance, pero una reforma completa de un piso medio puede variar entre 8.000€ y 25.000€. Ofrecemos presupuestos gratuitos y desglosados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito licencia para una reforma en un piso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de la obra. En reformas que afectan a elementos estructurales o zonas comunes normalmente se requiere comunicación o licencia municipal. Nosotros gestionamos los permisos si es necesario."
      }
    }
  ]
};

export default function ReformasGenerales() {
  const [loading, setLoading] = useState(false);

  const externalResources = [
    {
      name: "Colegio Oficial de Aparejadores de Madrid",
      url: "https://www.coaatm.org/",
      description: "Colegio profesional de arquitectura técnica"
    },
    {
      name: "Guía de reformas en comunidades",
      url: "https://www.cscae.com/",
      description: "Consejo Superior de Colegios de Arquitectos de España"
    },
    {
      name: "Ayudas para rehabilitación energética",
      url: "https://www.mitma.gob.es/vivienda/parque-vivienda/rehabilitacion",
      description: "Programas oficiales de ayudas"
    }
  ];

  return (
    <>
      <Head>
        <title>Reformas Generales en Guadalajara | Ilmaticonstrucciones</title>
        <meta name="description" content="Reformas generales en Guadalajara y Madrid: cocinas, baños y viviendas. Presupuestos claros, profesionales y garantía en el trabajo." />
        <meta name="keywords" content="reformas Guadalajara, reformas generales, reforma piso Guadalajara, reformas Madrid" />
        <link rel="canonical" href="https://www.trasterosypladur.es/reformas-generales" />
        <meta property="og:title" content="Reformas Generales en Guadalajara | Ilmaticonstrucciones" />
        <meta property="og:description" content="Transformamos pisos y casas en Guadalajara y Madrid. Especialistas en cocinas, baños y reformas integrales." />
        <meta property="og:url" content="https://www.trasterosypladur.es/reformas-generales" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </Head>

      {loading && <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50"><div className="h-full bg-orange-600 animate-pulse"></div></div>}

      <main className="min-h-screen bg-white">
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Reformas Generales en Guadalajara</h1>
          <p className="mb-6">En <strong>Ilmaticonstrucciones</strong> realizamos reformas generales para pisos y casas en Guadalajara, Madrid y localidades cercanas. Nos ocupamos de todo: proyecto, ejecución y entrega con garantía.</p>
        </section>

        <section className="px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Nuestros servicios de reforma</h2>
          <ul className="mb-6">
            <li>Reforma de cocinas: diseño, fontanería y electricidad.</li>
            <li>Reforma de baños: cambio de azulejos, ducha, sanitarios.</li>
            <li>Reformas integrales: redistribución y renovación completa.</li>
            <li>Pequeñas obras: suelos, puertas, ventanas y pintura.</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Por qué elegirnos</h3>
          <p className="mb-6">Equipo profesional, materiales certificados y comunicación clara. Presupuestos desglosados sin sorpresas y cumplimiento de plazos.</p>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">Contacto y presupuesto</h3>
            <p className="mb-3">Solicita tu presupuesto gratuito y sin compromiso. Trabajamos con contratos claros y pago por hitos.</p>
            <p className="font-semibold">Tel: <a href="tel:+34643516352" className="text-orange-500">+34 643 516 352</a></p>
            <p className="font-semibold">Email: <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500">ilmaticonstrucciones@gmail.com</a></p>
          </div>

          {/* External Resources Section */}
          <section className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
            <h4 className="font-bold mb-3">Recursos oficiales para reformas</h4>
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