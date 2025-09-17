import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
// import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trestoresypladur.es"),
  title: "ILMATI Construcciones - Construcción, Reformas, Pladur y Tresores en España",
  description:
    "ILMATI Construcciones ofrece servicios profesionales de construcción, reformas integrales, pladur y tresores en toda España. Reformas de cocinas y baños, instalación de suelos, pintura interior, electricidad y fontanería. Con más de 15 años de experiencia y más de 500 proyectos realizados, garantizamos calidad, confianza y resultados a medida. Solicite su presupuesto gratuito hoy mismo.",
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
  authors: [{ name: "ILMATI Construcciones", url: "https://www.trestoresypladur.es/" }],
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
    url: "https://www.trestoresypladur.es/",
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
    canonical: "https://www.trestoresypladur.es/",
    languages: {
      "es-ES": "https://www.trestoresypladur.es/es",
      "en-US": "https://www.trestoresypladur.es/en",
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
      </body>
    </html>
  )
}
