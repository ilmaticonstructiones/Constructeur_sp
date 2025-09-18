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
})

export const metadata: Metadata = {
  alternates: {
    canonical: "https://trasterosypladur.es",
  },
  metadataBase: new URL("https://www.trasterosypladur.es"),
  title: "ILMATI Construcciones - Construcción, Reformas, Pladur y Tresores en España",
  description:
    "ILMATI Construcciones ofrece servicios profesionales de construcción, reformas integrales, pladur y tresores en toda España. Reformas de cocinas y baños, instalación de suelos, pintura interior, electricidad y fontanería. Con más de 15 años de experiencia y más de 500 proyectos realizados, garantizamos calidad, confianza y resultados a medida. Solicite su presupuesto gratuito hoy mismo. | Servicios de construcción, instalación de trasteros y pladur en España.",
  keywords: [
    "construcción España",
    "servicios de reformas Madrid",
    "pladur España",
    "instalación de pladur Madrid",
    "trabajos de pladur Barcelona",
    "tresores España",
    "instalación de tresores Madrid",
    "reformas de cocinas Barcelona",
    "reformas de baños Valencia",
    "instalación de suelos España",
    "servicios de pintura interior",
    "trabajos de electricidad Madrid",
    "servicios de fontanería España",
    "contratistas de reformas",
    "empresa de construcción España",
    "ILMATI Construcciones",
    "contratistas profesionales España",
  ].join(", "),
  authors: [{ name: "ILMATI Construcciones", url: "https://www.trasterosypladur.es/" }],
  creator: "ILMATI Construcciones",
  publisher: "ILMATI Construcciones",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    title:
      "ILMATI Construcciones - Construcción, Reformas, Pladur y Tresores en España",
    description:
      "Expertos en construcción, reformas, pladur y tresores en España. Más de 15 años de experiencia y 500 proyectos completados con éxito. Calidad y garantía en cada trabajo.",
    siteName: "Trestores y Pladur",
    url: "https://www.trasterosypladur.es/",
    images: [
      {
        url: "/modern-construction-site-with-workers-renovating-a.png",
        width: 1200,
        height: 630,
        alt: "Equipo profesional especializado en pladur, tresores y reformas integrales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ILMATI_Construcciones_es",
    creator: "@ILMATI_Construcciones_es",
    title:
      "ILMATI Construcciones - Construcción, Reformas, Pladur y Tresores en España",
    description:
      "Especialistas en construcción, reformas, pladur y tresores en España. Más de 15 años de experiencia ofreciendo confianza y calidad.",
    images: ["/modern-construction-site-with-workers-renovating-a.png"],
  },
  alternates: {
    canonical: "https://www.trasterosypladur.es/",
    languages: {
      "es-ES": "https://www.trasterosypladur.es/",
    },
  },
  category: "Servicios de Construcción, Reformas, Pladur y Tresores",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}
        {/* <Analytics /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ilmati Construcciones",
              url: "https://trasterosypladur.es",
              telephone: "+34 643 516 352",
              email: "ilmaticonstrucciones@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C. Occidente",
                postalCode: "19242",
                addressLocality: "Hiendelaencina",
                addressRegion: "Guadalajara",
                addressCountry: "España",
              },
              serviceType: ["Construcción", "Pladur", "Trasteros"],
            }),
          }}
        />

      </body>
    </html>
  )
}
