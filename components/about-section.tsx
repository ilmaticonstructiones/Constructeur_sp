"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { Award, Users, Clock } from "lucide-react"

export function AboutSection() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Clock,
      number: "15+",
      label: t("about.experience"),
    },
    {
      icon: Award,
      number: "500+",
      label: t("about.projects"),
    },
    {
      icon: Users,
      number: "450+",
      label: t("about.clients"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.title")}</h2>
            <p className="text-xl text-primary mb-6">{t("about.subtitle")}</p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{t("about.description")}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/professional-construction-team-working-on-home-ren.png" alt="Our construction team" className="rounded-lg shadow-lg w-full" />
            <Card className="absolute -bottom-6 -left-6 bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
