"use client"

import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  // Lista optimizada de servicios principales en español (SEO)
  const services = [
    "Pladur y tabiquería seca",
    "Tresores y sistemas de seguridad",
    "Reformas de cocinas",
    "Reformas de baños",
    "Instalación de suelos",
    "Pintura interior",
    "Trabajos eléctricos",
    "Servicios de fontanería",
  ]

  const company = [t("nav.about"), t("nav.reviews"), t("nav.contact")]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/ilmati-logo.png"
                alt="ILMATI Construcciones - Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <h3 className="text-xl font-bold">ILMATI</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/ilmaticonstructiones/"
                aria-label="ILMATI Construcciones en LinkedIn"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>C. Occidente, 19242 Hiendelaencina, Guadalajara, España</p>
              <p><a href="tel:+34643516352" className="hover:underline">+34 643 516 352</a></p>
              <p><a href="mailto:ilmaticonstrucciones@gmail.com" className="hover:underline">ilmaticonstrucciones@gmail.com</a></p>
              <p>Lun-Sáb: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 ILMATI Construcciones. {t("footer.rights")} | Expertos en Pladur y Tresores en España
          </p>
        </div>
      </div>
    </footer>
  )
}
