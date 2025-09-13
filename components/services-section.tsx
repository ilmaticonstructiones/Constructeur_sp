"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Hammer,
  Wrench,
  Zap,
  Droplets,
  Paintbrush,
  Home,
  TreePine,
  Waves,
  Palette,
  Square,
  Building,
  Wind,
  Drill,
  Sparkles,
  HardHat,
  Settings,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react"

export function ServicesSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isServicesPaused, setIsServicesPaused] = useState(false)
  const [isImagesPaused, setIsImagesPaused] = useState(false)

  // Mock translation function for demo
  const t = (key) => {
    const translations = {
      "services.title": "Nuestros Servicios",
      "services.subtitle": "Profesionales cualificados en todas las áreas"
    }
    return translations[key] || key
  }

  const services = [
    {
      icon: Hammer,
      title: "Manitas",
      description: "Servicios generales de reparación y mantenimiento para el hogar.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HardHat,
      title: "Obrero de construcción",
      description: "Trabajos de construcción general y edificación.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "Peón",
      description: "Ayuda general en obras y proyectos de construcción.",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Drill,
      title: "Trabajador cualificado",
      description: "Oficiales especializados en diferentes oficios de construcción.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Sparkles,
      title: "Soldador",
      description: "Soldadura profesional de estructuras metálicas y reparaciones.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Droplets,
      title: "Fontanero",
      description: "Instalación y reparación de sistemas de fontanería y agua.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Square,
      title: "Albañil",
      description: "Construcción con ladrillo, piedra y trabajos de mampostería.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Electricista",
      description: "Instalaciones eléctricas seguras y reparaciones.",
      color: "from-yellow-400 to-yellow-500"
    }
  ]

  // Updated images with proper titles and descriptions based on file names
  const images = [
    {
      url: "/pool_before.png",
      title: "Renovación de Piscina - Antes",
      description: "Estado inicial del proyecto de renovación de piscina"
    },
    {
      url: "/pool_after_2.png",
      title: "Renovación de Piscina - Proceso",
      description: "Trabajos en progreso de la renovación de piscina"
    },
    {
      url: "/pool_after.png",
      title: "Renovación de Piscina - Después",
      description: "Resultado final de la renovación de piscina completada"
    },
    {
      url: "/magasin_before.png",
      title: "Reforma de Local Comercial - Antes",
      description: "Estado inicial del local comercial antes de la reforma"
    },
    {
      url: "/magasin_after_2.png",
      title: "Reforma de Local Comercial - Proceso",
      description: "Trabajos de reforma en progreso del local comercial"
    },
    {
      url: "/magasin_after.png",
      title: "Reforma de Local Comercial - Después",
      description: "Local comercial completamente renovado y modernizado"
    },
    {
      url: "/roof_before.png",
      title: "Reparación de Tejado - Antes",
      description: "Estado inicial del tejado antes de las reparaciones"
    },
    {
      url: "/roof_after.png",
      title: "Reparación de Tejado - Después",
      description: "Tejado completamente reparado y restaurado"
    },
    {
      url: "/wall_before.png",
      title: "Reforma de Pared en Pladur - Antes",
      description: "Estado inicial de la pared antes de la reforma con pladur"
    },
    {
      url: "/wall_after.png",
      title: "Reforma de Pared en Pladur - Después",
      description: "Pared completamente renovada con acabados profesionales en pladur"
    },    
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Construcción Moderna",
      description: "Proyectos de construcción con técnicas avanzadas"
    }
  ]
  
  // Auto-advance services carousel - slower speed
  useEffect(() => {
    if (!isServicesPaused) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length)
      }, 5000) // Increased from 3000 to 5000ms (5 seconds)
      return () => clearInterval(interval)
    }
  }, [isServicesPaused, services.length])

  // Auto-advance images carousel - slower speed
  useEffect(() => {
    if (!isImagesPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 6000) // Increased from 4000 to 6000ms (6 seconds)
      return () => clearInterval(interval)
    }
  }, [isImagesPaused, images.length])

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle image load error
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src)
    // You could set a fallback image here
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg animate-bounce">
            <Hammer className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Services Carousel */}
          <div className="relative px-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Servicios Profesionales</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsServicesPaused(!isServicesPaused)}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label={isServicesPaused ? "Reanudar carrusel de servicios" : "Pausar carrusel de servicios"}
                >
                  {isServicesPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                </button>
                <button
                  onClick={prevService}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label="Servicio anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextService}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label="Siguiente servicio"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl" style={{ height: '320px' }}>
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = index === currentServiceIndex
                return (
                  <div
                    key={`${service.title}-${index}`}
                    className={`absolute inset-0 transition-all duration-800 ease-in-out transform ${
                      isActive
                        ? 'opacity-100 translate-x-0 scale-100'
                        : index < currentServiceIndex
                          ? 'opacity-0 -translate-x-full scale-95'
                          : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    <Card className="h-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-slate-800"></div>
                      
                      <CardHeader className="text-center pb-6 pt-8 relative z-10">
                        <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                          <Icon className="h-10 w-10 text-white drop-shadow-sm" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 mb-3">
                          {service.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="text-center px-8 pb-8 relative z-10">
                        <CardDescription className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                          {service.description}
                        </CardDescription>
                      </CardContent>

                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                    </Card>
                  </div>
                )
              })}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentServiceIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-12'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 w-2'
                  }`}
                  aria-label={`Ver servicio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Images Carousel */}
          <div className="relative px-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Nuestro Trabajo</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsImagesPaused(!isImagesPaused)}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label={isImagesPaused ? "Reanudar carrusel de imágenes" : "Pausar carrusel de imágenes"}
                >
                  {isImagesPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                </button>
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:cursor-pointer hover:bg-gray-300"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
              {images.map((image, index) => (
                <div
                  key={`${image.title}-${index}`}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentImageIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              ))}

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Image Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 w-12'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 w-2'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  )
}