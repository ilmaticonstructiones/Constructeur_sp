"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { translations, type Locale, getTranslation } from "@/lib/translations"

export function useTranslation() {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>("es")

  useEffect(() => {
    // Always use Spanish
    setLocale("es")
  }, [pathname])

  const t = (key: string): string => {
    return getTranslation(locale, key)
  }

  const switchLanguage = (newLocale: Locale) => {
    // No language switching - always Spanish
    return
  }

  return {
    t,
    locale,
    switchLanguage,
    translations: translations[locale],
  }
}
