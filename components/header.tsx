"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.reviews"), href: "#reviews" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo with SEO alt */}
          <div className="flex items-center">
            <Link href="#home" className="flex items-center space-x-3">
              <img 
                src="/ilmati-logo.png" 
                alt="ILMATI Construcciones - Expertos en Pladur y Tresores en Guadalajara" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-primary hidden sm:block">
                ILMATI CONSTRUCCIONES
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8" 
            role="navigation" 
            aria-label="Main Navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+34643516352" 
              className="flex items-center gap-2 border px-3 py-1 rounded-md text-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {t("hero.phone")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen} 
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile Navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
