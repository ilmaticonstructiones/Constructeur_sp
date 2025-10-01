// components/optimized-image.tsx
"use client"

import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  // Tailwind CSS classes
  className?: string
  containerClassName?: string
  imageClassName?: string
  loadingClassName?: string
  // Common styling props
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition?: string
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  // Layout props
  aspectRatio?: "auto" | "square" | "video" | "wide" | "ultrawide"
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  // Tailwind classes
  className = "",
  containerClassName = "",
  imageClassName = "",
  loadingClassName = "",
  // Styling props
  objectFit = "cover",
  objectPosition = "center",
  rounded = "none",
  shadow = "none",
  aspectRatio = "auto"
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Convert to WebP format when possible
  const getOptimizedSrc = (imageSrc: string) => {
    if (imageSrc.startsWith('/')) {
      return imageSrc
    }
    return imageSrc
  }

  // Map props to Tailwind classes
  const getObjectFitClass = () => {
    const map = {
      "contain": "object-contain",
      "cover": "object-cover",
      "fill": "object-fill",
      "none": "object-none",
      "scale-down": "object-scale-down"
    }
    return map[objectFit]
  }

  const getRoundedClass = () => {
    const map = {
      "none": "",
      "sm": "rounded-sm",
      "md": "rounded-md",
      "lg": "rounded-lg",
      "xl": "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      "full": "rounded-full"
    }
    return map[rounded]
  }

  const getShadowClass = () => {
    const map = {
      "none": "",
      "sm": "shadow-sm",
      "md": "shadow-md",
      "lg": "shadow-lg",
      "xl": "shadow-xl",
      "2xl": "shadow-2xl"
    }
    return map[shadow]
  }

  const getAspectRatioClass = () => {
    const map = {
      "auto": "",
      "square": "aspect-square",
      "video": "aspect-video",
      "wide": "aspect-[16/9]",
      "ultrawide": "aspect-[21/9]"
    }
    return map[aspectRatio]
  }

  const baseContainerClasses = `relative ${getAspectRatioClass()} ${containerClassName} ${className}`
  const baseImageClasses = `
    transition-opacity duration-300
    ${getObjectFitClass()}
    ${getRoundedClass()}
    ${getShadowClass()}
    ${isLoading ? 'opacity-0' : 'opacity-100'}
    ${hasError ? 'bg-gray-200' : ''}
    w-full h-full
    ${imageClassName}
  `.trim().replace(/\s+/g, ' ')

  const baseLoadingClasses = `
    absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center
    ${getRoundedClass()}
    ${loadingClassName}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={baseContainerClasses}>
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={baseImageClasses}
        style={{ objectPosition }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
      {isLoading && (
        <div className={baseLoadingClasses}>
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}