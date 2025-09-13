import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ILMATI_Construcciones - Professional Construction & Renovation Services in Spain",
  description:
    "Expert construction and renovation services across Spain. Specializing in kitchen remodeling, bathroom renovations, flooring installation, interior painting, electrical work, and plumbing services. 15+ years of experience, 500+ completed projects. Get your free quote today.",
  keywords: [
    "construction Spain",
    "renovation services Madrid",
    "kitchen remodeling Barcelona",
    "bathroom renovation Valencia",
    "flooring installation Spain",
    "interior painting services",
    "electrical work Madrid",
    "plumbing services Spain",
    "home renovation contractors",
    "construction company Spain",
    "ILMATI_Construcciones",
    "professional contractors Spain"
  ].join(", "),
  authors: [{ name: "ILMATI_Construcciones", url: "https://ILMATI_Construcciones.es" }],
  creator: "ILMATI_Construcciones",
  publisher: "ILMATI_Construcciones",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    title: "ILMATI_Construcciones - Professional Construction & Renovation Services in Spain",
    description:
      "Expert construction and renovation services across Spain. Transform your space with quality craftsmanship. 15+ years experience, 500+ completed projects.",
    siteName: "ILMATI_Construcciones",
    url: "https://ILMATI_Construcciones.es",
    images: [
      {
        url: "/modern-construction-site-with-workers-renovating-a.png",
        width: 1200,
        height: 630,
        alt: "Professional construction team working on home renovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ILMATI_Construcciones_es",
    creator: "@ILMATI_Construcciones_es",
    title: "ILMATI_Construcciones - Professional Construction & Renovation Services in Spain",
    description:
      "Expert construction and renovation services across Spain. Transform your space with quality craftsmanship.",
    images: ["/modern-construction-site-with-workers-renovating-a.png"],
  },
  alternates: {
    canonical: "https://ILMATI_Construcciones.es",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  category: "Construction & Renovation Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="font-sans antialiased">
        {children}

      </body>
    </html>
  )
}
