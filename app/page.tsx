import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"


export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ilmati Construcciones",
    "description": "Professional construction and renovation services across Spain. Specializing in kitchen remodeling, bathroom renovations, flooring installation, interior painting, electrical work, and plumbing services.",
    "url": "https://constructpro.es",
    "telephone": "+34 643 516 352",
    "email": "contact@constructpro.es",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Mayor 123",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "postalCode": "28013",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      latitude: 41.0823674,
      longitude: -3.0049051
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "€€",
    "image": "https://constructpro.es/modern-construction-site-with-workers-renovating-a.png",
    "logo": "https://constructpro.es/placeholder-logo.png",
    "sameAs": [
      "https://www.facebook.com/constructpro.es",
      "https://www.instagram.com/constructpro_es",
      "https://www.linkedin.com/company/constructpro-spain"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Spain"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Renovation",
            "description": "Modern kitchen designs with quality materials and expert installation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Remodeling",
            "description": "Complete bathroom transformations with contemporary fixtures and finishes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Installation",
            "description": "Professional installation of tiles, hardwood, and laminate flooring."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Professional painting services to refresh and modernize your space."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Work",
            "description": "Safe and reliable electrical installations and repairs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing Services",
            "description": "Complete plumbing solutions for residential and commercial properties."
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
        "author": {
          "@type": "Person",
          "name": "Elena Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding kitchen renovation! The team was professional, punctual, and delivered exactly what we envisioned. The quality of work exceeded our expectations."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Miguel Santos"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Complete bathroom transformation that turned our outdated space into a modern sanctuary. Excellent craftsmanship and attention to detail throughout the project."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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