// components/unified-carousel.tsx
"use client"

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface CarouselProps {
  items: any[]
  autoPlayInterval?: number
  renderItem: (item: any, isActive: boolean) => React.ReactNode
  className?: string
}

export function UnifiedCarousel({ 
  items, 
  autoPlayInterval = 5000, 
  renderItem,
  className = "" 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isPaused && items.length > 1) {
      const interval = setInterval(next, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [isPaused, next, autoPlayInterval, items.length])

  return (
    <div className={`relative ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={isPaused ? "Reanudar" : "Pausar"}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 block'
                : 'opacity-0 hidden'
            }`}
          >
            {renderItem(item, index === currentIndex)}
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Ir a elemento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}