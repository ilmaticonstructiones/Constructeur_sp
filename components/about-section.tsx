"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

export function AboutSection() {
  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "Años de Experiencia en Construcción",
    },
    {
      icon: Award,
      number: "500+",
      label: "Proyectos de Reformas y Pladur Realizados",
    },
    {
      icon: Users,
      number: "450+",
      label: "Clientes Satisfechos en España",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-muted/30"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <article>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Sobre ILMATI Construcciones
            </h2>
            <p className="text-xl text-primary mb-6">
              Empresa de construcción y reformas integrales en España
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              En <strong>ILMATI Construcciones</strong> somos especialistas en{" "}
              <strong>
                reformas, instalación de pladur, trasteros a medida y obra civil
              </strong>{" "}
              en Guadalajara y toda España. Con más de 15 años de experiencia y
              más de 500 proyectos finalizados con éxito, ofrecemos{" "}
              <em>
                profesionalidad, garantía y resultados adaptados a cada cliente
              </em>
              . Nuestro compromiso es construir confianza a través de la calidad
              y la satisfacción del cliente.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <h3 className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </h3>
                  </div>
                )
              })}
            </div>
          </article>

          {/* Imagen */}
          <div className="relative">
            <img 
              src="/professional-construction-team-working-on-home-ren.png"
              alt="Equipo profesional de construcción, reformas y pladur en Guadalajara, España"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <Card className="absolute -bottom-6 -left-6 bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfacción del Cliente
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 🔹 LocalBusiness Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ILMATI Construcciones",
            image:
              "https://www.trasterosypladur.es/professional-construction-team-working-on-home-ren.png",
            url: "https://www.trasterosypladur.es",
            telephone: "+34 643 516 352",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C. Occidente, 19242 Hiendelaencina",
              addressLocality: "Guadalajara",
              addressRegion: "Castilla-La Mancha",
              postalCode: "19242",
              addressCountry: "ES",
            },
            description:
              "ILMATI Construcciones - expertos en construcción, reformas integrales, pladur y trasteros a medida en Guadalajara y toda España.",
          }),
        }}
      />
    </section>
  )
}