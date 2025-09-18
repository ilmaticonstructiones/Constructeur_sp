import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function HomePage() {
  const structuredDataES = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ILMATI Construcciones",
    "description": "Empresa especializada en construcción, reformas, pladur y tresores en toda España. Más de 15 años de experiencia y 500+ proyectos completados con éxito.",
    "url": "https://www.trasterosypladur.es/",
    "telephone": "+34 643 516 352",
    "email": "contacto@trasterosypladur.es",
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
      "latitude": 41.0823674,
      "longitude": -3.0049051
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "image": "https://www.trasterosypladur.es/ilmati-logo.png",
    "logo": "https://www.trasterosypladur.es/ilmati-logo.png",
    "sameAs": [
      "https://www.facebook.com/ilmaticonstrucciones",
      "https://www.instagram.com/ilmaticonstrucciones",
      "https://www.linkedin.com/company/ilmaticonstrucciones",
      "https://www.google.com/maps/place/?q=place_id:ChIJC1NBLU17Qw0Rx1xHN9rS5R8"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Construcción y Reformas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pladur",
            "description": "Instalación profesional de pladur para interiores, techos y tabiques, con acabados de alta calidad."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tresores",
            "description": "Servicios especializados en tresores con soluciones duraderas y estéticas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reformas de cocinas",
            "description": "Diseño y renovación completa de cocinas modernas con materiales de calidad."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reformas de baños",
            "description": "Transformación integral de baños con acabados contemporáneos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalación de suelos",
            "description": "Colocación profesional de suelos cerámicos, parquet y laminados."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pintura interior",
            "description": "Servicios de pintura interior para renovar y modernizar cualquier espacio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electricidad",
            "description": "Instalaciones y reparaciones eléctricas seguras y certificadas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fontanería",
            "description": "Soluciones completas de fontanería para viviendas y locales."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Elena Rodríguez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Excelente reforma de cocina. El equipo fue muy profesional, puntual y entregó exactamente lo que queríamos. La calidad del trabajo superó nuestras expectativas."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Miguel Santos" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Reforma completa del baño que convirtió un espacio anticuado en un lugar moderno y funcional. Gran atención al detalle y acabados impecables."
      }
    ]
  }

  const structuredDataEN = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ILMATI Construcciones",
    "description": "Professional company specialized in construction, renovations, plasterboard (pladur), and tresores across Spain. Over 15 years of experience and more than 500 successful projects.",
    "url": "https://www.trasterosypladur.es/en",
    "telephone": "+34 643 516 352",
    "email": "contact@trasterosypladur.es",
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
      "latitude": 41.0823674,
      "longitude": -3.0049051
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "image": "https://www.trasterosypladur.es/ilmati-logo.png",
    "logo": "https://www.trasterosypladur.es/ilmati-logo.png",
    "sameAs": [
      "https://www.facebook.com/ilmaticonstrucciones",
      "https://www.instagram.com/ilmaticonstrucciones",
      "https://www.linkedin.com/company/ilmaticonstrucciones",
      "https://www.google.com/maps/place/?q=place_id:YOUR_PLACE_ID"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Spain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction and Renovation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plasterboard (Pladur)", "description": "Professional plasterboard installation for interiors, ceilings, and partitions with high-quality finishes." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tresores", "description": "Specialized tresores solutions with durable and aesthetic finishes." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Renovation", "description": "Modern kitchen designs with premium materials and expert installation." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling", "description": "Complete bathroom transformations with contemporary fixtures and finishes." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Installation", "description": "Professional installation of ceramic tiles, hardwood, and laminate flooring." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting", "description": "Professional painting services to refresh and modernize your space." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Work", "description": "Safe and reliable electrical installations and repairs." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Services", "description": "Complete plumbing solutions for residential and commercial properties." } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Elena Rodriguez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Outstanding kitchen renovation! The team was professional, punctual, and delivered exactly what we envisioned. The quality of work exceeded our expectations."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Miguel Santos" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Complete bathroom transformation that turned our outdated space into a modern sanctuary. Excellent craftsmanship and attention to detail throughout the project."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataES) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataEN) }}
      />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </>
  )
}
