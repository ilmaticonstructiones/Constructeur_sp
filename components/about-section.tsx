"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: "Años de Experiencia",
    },
    {
      icon: Award,
      number: "500+",
      label: "Proyectos Realizados",
    },
    {
      icon: Users,
      number: "450+",
      label: "Clientes Satisfechos",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre ILMATI Construcciones
            </h2>
            <p className="text-xl text-primary mb-6">
              Construyendo Confianza con Calidad
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              En <strong>ILMATI Construcciones</strong> somos especialistas en 
              <strong> construcción, reformas integrales, instalación de pladur y tresores </strong> 
              en toda España. Con más de 15 años de experiencia y más de 500 proyectos 
              finalizados con éxito, ofrecemos <em>profesionalidad, garantía y resultados 
              adaptados</em> a las necesidades de cada cliente.
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
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <h3 className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <img
              src="/professional-construction-team-working-on-home-ren.png"
              alt="Equipo profesional de construcción y reformas trabajando en España"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
              decoding="async"
            />
            <Card className="absolute -bottom-6 -left-6 bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
