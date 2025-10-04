"use client"

import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  const services = [
    "Pladur y tabiquería seca",
    "trasteros y sistemas de seguridad",
    "Reformas de cocinas",
    "Reformas de baños",
    "Instalación de suelos",
    "Pintura interior",
    "Trabajos eléctricos",
    "Servicios de fontanería",
  ]

  const company = [
    { name: t("nav.about"), href: "about" },
    { name: t("nav.services"), href: "services" },
    { name: t("nav.reviews"), href: "reviews" },
    { name: t("nav.contact"), href: "contact" },
  ]

  const resources = [
    { name: "Trasteros y Pladur", href: "/trasteros_pladur" },
    { name: "Pintura y Reformas", href: "/pintura_reformas" },
    { name: "Blog y Guías", href: "/blog" },
    { name: "pintura", href: "/pintura" },
    { name: "pladur", href: "/pladur" },
    { name: "reformas integrales", href: "/reformasIntegrales" },
    { name: "reformas generales", href: "/reformasGenerales" },
    { name: "trasteros", href: "/trasteros" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Información de la empresa */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="/ilmati-logo.png"
                alt="ILMATI Construcciones - Logo"
                className="h-6 w-auto brightness-0 invert"
              />
              <h3 className="text-lg font-bold">ILMATI</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3 pt-1">
              <Link
                href="https://facebook.com/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en LinkedIn"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-base font-semibold mb-3">{t("footer.services")}</h4>
            <ul className="space-y-1 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors line-clamp-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-base font-semibold mb-3">{t("footer.company")}</h4>
            <ul className="space-y-1 text-sm">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.href.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-base font-semibold mb-3">Recursos</h4>
            <ul className="space-y-1 text-sm">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-base font-semibold mb-3">{t("footer.contact")}</h4>
            <div className="space-y-1 text-sm text-primary-foreground/80">
              <p className="line-clamp-2">C. Occidente, 19242 Hiendelaencina, Guadalajara, España</p>
              <p><a href="tel:+34643516352" className="hover:underline">+34 643 516 352</a></p>
              <p><a href="mailto:ilmaticonstrucciones@gmail.com" className="hover:underline">ilmaticonstrucciones@gmail.com</a></p>
              <p>Lun-Sáb: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 ILMATI Construcciones. {t("footer.rights")} | Expertos en Pladur y trasteros en España
          </p>
        </div>
      </div>
    </footer>
  )
}