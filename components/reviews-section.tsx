"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { Star } from "lucide-react"

export function ReviewsSection() {
  const { t } = useTranslation()

  const reviews = [
    {
      name: "Elena Rodriguez",
      location: "Madrid",
      rating: 5,
      text: "Outstanding kitchen renovation! The team was professional, punctual, and delivered exactly what we envisioned. The quality of work exceeded our expectations.",
      textEs:
        "¡Renovación de cocina excepcional! El equipo fue profesional, puntual y entregó exactamente lo que habíamos imaginado. La calidad del trabajo superó nuestras expectativas.",
      image: "/professional-woman-smiling-headshot.png",
    },
    {
      name: "Miguel Santos",
      location: "Barcelona",
      rating: 5,
      text: "Complete bathroom transformation that turned our outdated space into a modern sanctuary. Excellent craftsmanship and attention to detail throughout the project.",
      textEs:
        "Transformación completa del baño que convirtió nuestro espacio anticuado en un santuario moderno. Excelente artesanía y atención al detalle durante todo el proyecto.",
      image: "/professional-man-smiling-headshot.png",
    },
    {
      name: "Carmen Jiménez",
      location: "Valencia",
      rating: 5,
      text: "From initial consultation to final cleanup, the entire process was seamless. Our home renovation was completed on time and within budget. Highly recommend!",
      textEs:
        "Desde la consulta inicial hasta la limpieza final, todo el proceso fue perfecto. La renovación de nuestra casa se completó a tiempo y dentro del presupuesto. ¡Muy recomendable!",
      image: "/blank-profile-picture.webp",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("reviews.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("reviews.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {t("nav.home") === "Home" ? review.text : review.textEs}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
