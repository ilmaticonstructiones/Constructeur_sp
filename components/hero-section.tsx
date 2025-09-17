"use client"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { Phone } from "lucide-react"

export function HeroSection() {
  const { t } = useTranslation()
  
  const handlePhoneClick = () => {
    window.location.href = "tel:+34643516352"
  }
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen">
      {/* Main Hero Content */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-construction-site-with-workers-renovating-a.png"
            alt="Empresa de construcción y reformas integrales en España"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Call Button */}
              <Button
                onClick={handlePhoneClick}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t("hero.phone")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 - Pladur */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Tabiquerías, Techos y Murales en Pladur – Instalación Profesional en España
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/hero3.jpg"
                  alt="Antes de la instalación de techos y murales en pladur"
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* After Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/hero4.jpg"
                  alt="Después de la instalación de techos y murales en pladur"
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Realizamos tabiquerías, techos y murales en pladur en toda España, 
                ofreciendo soluciones profesionales y personalizadas en construcción en seco.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Trasteros */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Fabricación de Trasteros en Pladur y Metal – Reformas y Almacenamiento Profesional
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg md:order-2">
                <img
                  src="/hero1.jpg"
                  alt="Espacio vacío antes de la construcción de trasteros en pladur y metal"
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* After Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg md:order-1">
                <img
                  src="/hero2.jpg"
                  alt="Trasteros terminados en pladur y metal listos para usar"
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Description Text */}
            <p className="mt-8 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Empresa de construcción y reformas integrales: obra civil, trasteros, pintura profesional y rehabilitación. Presupuesto gratis y sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
