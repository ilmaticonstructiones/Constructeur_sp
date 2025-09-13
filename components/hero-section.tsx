"use client"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { Phone, ArrowDown } from "lucide-react"

export function HeroSection() {
  const { t } = useTranslation()
  
  const handlePhoneClick = () => {
    // Try to make a phone call first
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
            alt="Construction and renovation work"
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

      {/* Before/After Section 1 - Roof and Plasterboard Work */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Tabiquerías, techos y murales en pladur – Servicio profesional en toda España
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/hero3.jpg"
                    alt="Antes de la instalación de pladur"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* After Image */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/hero4.jpg"
                    alt="Después de la instalación de pladur"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />

                </div>
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Se realizan tabiquerías, techos y murales en pladur. Trabajamos por toda España ofreciendo soluciones profesionales en construcción en seco.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Section 2 - Storage Division */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Fabricación de trasteros y montaje profesional
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Before Image */}
              <div className="space-y-4 md:order-2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/hero1.jpg"
                    alt="Antes de la división de trasteros"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* After Image */}
              <div className="space-y-4 md:order-1">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/hero2.jpg"
                    alt="Después de la división de trasteros"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />

                </div>
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Fabricación de trasteros y montaje profesional. Creamos espacios de almacenamiento funcionales y bien organizados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}