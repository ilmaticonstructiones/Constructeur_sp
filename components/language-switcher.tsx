"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, switchLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={locale === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("en")}
        className="h-8 px-2 text-xs"
      >
        EN
      </Button>
      <Button
        variant={locale === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("es")}
        className="h-8 px-2 text-xs"
      >
        ES
      </Button>
    </div>
  )
}
