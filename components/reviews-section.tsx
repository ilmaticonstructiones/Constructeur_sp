"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'

export function ReviewsSection() {
  const { t } = useTranslation()
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true 
  })
  const autoplayRef = useRef(null)

  const reviews = [
    {
      name: "Elena Rodríguez",
      location: "Madrid",
      rating: 5,
      text: "Outstanding kitchen renovation! The team was professional, punctual, and delivered exactly what we envisioned.",
      textEs:
        "¡Renovación de cocina excepcional! El equipo fue profesional, puntual y entregó exactamente lo que habíamos imaginado.",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Miguel Santos",
      location: "Barcelona",
      rating: 5,
      text: "Complete bathroom transformation that turned our outdated space into a modern sanctuary. Excellent craftsmanship.",
      textEs:
        "Transformación completa del baño que convirtió nuestro espacio anticuado en un santuario moderno. Excelente trabajo.",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Carmen Jiménez",
      location: "Valencia",
      rating: 5,
      text: "From consultation to cleanup, the process was seamless. Renovation was on time and within budget. Highly recommend!",
      textEs:
        "Desde la consulta inicial hasta la limpieza final, todo el proceso fue perfecto. ¡Muy recomendable!",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "José Martínez",
      location: "Guadalajara",
      rating: 5,
      text: "They built custom storage rooms in record time. Strong, practical, and perfect for our needs.",
      textEs:
        "Construyeron trasteros a medida en tiempo récord. Fuertes, prácticos y perfectos para nuestras necesidades.",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Laura Fernández",
      location: "Toledo",
      rating: 5,
      text: "We hired them for plasterboard walls and ceilings. Excellent finish and professional team.",
      textEs:
        "Los contratamos para paredes y techos de pladur. Acabado excelente y equipo muy profesional.",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Andrés Gómez",
      location: "Zaragoza",
      rating: 4,
      text: "Great painting work for our house. Very clean and fast, although one wall needed a second touch-up.",
      textEs:
        "Muy buen trabajo de pintura en nuestra casa. Limpio y rápido, aunque una pared necesitó un retoque.",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Patricia López",
      location: "Sevilla",
      rating: 4,
      text: "Full home renovation. They handled everything: floors, painting, and walls. Stress-free experience!",
      textEs:
        "Reforma integral de la vivienda. Se encargaron de todo: suelos, pintura y tabiquería. ¡Sin preocupaciones!",
      image: "/blank-profile-picture.webp",
    },
    {
      name: "Raúl Ortega",
      location: "Bilbao",
      rating: 4,
      text: "Civil works project completed perfectly. Clear communication and reliable team from start to finish.",
      textEs:
        "Proyecto de obra civil realizado a la perfección. Comunicación clara y equipo fiable de principio a fin.",
      image: "/blank-profile-picture.webp",
    },
  ]

  // Initialize embla carousel events
  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrentReviewIndex(emblaApi.selectedScrollSnap())
      }
      
      emblaApi.on('select', onSelect)
      onSelect() // Set initial index
      
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi])

  // Auto-advance reviews carousel
  useEffect(() => {
    if (!isCarouselPaused && emblaApi) {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000) // 5 seconds
      
      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current)
        }
      }
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isCarouselPaused, emblaApi])

  const nextReview = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  const prevReview = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const goToReview = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index)
    }
  }

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("reviews.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700"
              aria-label={isCarouselPaused ? "Reanudar carrusel de reseñas" : "Pausar carrusel de reseñas"}
            >
              {isCarouselPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
            </button>
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700"
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full mr-4">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-card-foreground">
                          {review.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {t("nav.home") === "Home"
                        ? review.text
                        : review.textEs}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentReviewIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-12'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 w-2'
              }`}
              aria-label={`Ver reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}