// components/critical-css.tsx
"use client"

import { useEffect } from 'react'

export function CriticalCSS() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/ilmati-logo.png', as: 'image' },
      { href: '/modern-construction-site-with-workers-renovating-a.png', as: 'image' },
    ]

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      document.head.appendChild(link)
    })
  }, [])

  return (
    <style jsx global>{`
      /* Critical above-the-fold CSS */
      .critical-loading {
        opacity: 0;
        transition: opacity 0.3s ease-in;
      }
      
      .critical-loaded {
        opacity: 1;
      }
      
      /* Prevent layout shifts */
      img {
        max-width: 100%;
        height: auto;
      }
    `}</style>
  )
}