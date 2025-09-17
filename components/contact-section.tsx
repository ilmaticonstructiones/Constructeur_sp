"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/hooks/use-translation"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    emailjs.init("T2U9gpignInmK9iHN") // Public key EmailJS
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const templateParams = {
        from_name: formData.get('name') as string,
        from_email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        to_name: 'Ilmati Construcciones',
      }

      const response = await emailjs.send(
        'service_mk4a7tc',
        'template_uiskggw',
        templateParams
      )

      console.log('✅ Email enviado correctamente:', response)
      setSubmitStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('❌ Error al enviar Email:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address"),
      value: "C. Occidente, 19242 Hiendelaencina, Guadalajara, España",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+34 643 516 352",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "ilmaticonstrucciones@gmail.com",
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      value: "Lun-Sáb: 8:00 AM - 6:00 PM",
    },
  ]

  return (
    <section id="contact" lang="es" className="py-20 bg-background" aria-label="Sección de contacto Ilmati Construcciones">
      {/* LocalBusiness Schema.org for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ilmati Construcciones - Pladur y Tresores",
          "image": "https://www.trestoresypladur.es/ilmati-logo.png",
          "@id": "https://www.trestoresypladur.es",
          "url": "https://www.trestoresypladur.es",
          "telephone": "+34 643 516 352",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C. Occidente",
            "addressLocality": "Hiendelaencina",
            "addressRegion": "Guadalajara",
            "postalCode": "19242",
            "addressCountry": "ES"
          },
          "openingHours": "Mo-Sa 08:00-18:00",
          "email": "ilmaticonstrucciones@gmail.com",
          "sameAs": [
            "https://www.facebook.com/ilmaticonstrucciones",
            "https://www.instagram.com/ilmaticonstrucciones",
            "https://www.twitter.com/ilmaticonstrucciones"
          ]
        })
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact.title")} – Pladur y Tresores en Guadalajara
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")} | Expertos en construcción, instalación de pladur y servicios de tresores en Hiendelaencina, Guadalajara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card aria-label="Formulario de contacto">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">
                {t("contact.form.submit")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de contacto de Ilmati Construcciones">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input id="name" name="name" required aria-required="true" autoComplete="name" className="mt-1 border border-solid border-black" disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input id="email" name="email" type="email" required aria-required="true" autoComplete="email" className="mt-1 border border-solid border-black" disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input id="phone" name="phone" type="tel" required aria-required="true" autoComplete="tel" className="mt-1 border border-solid border-black" disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea id="message" name="message" rows={4} required aria-required="true" className="mt-1 border border-solid border-black" disabled={isSubmitting} />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting} aria-label="Enviar formulario de contacto">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.form.submit")}
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md" role="status">
                    <p className="text-green-800 text-center font-medium">✅ {t("contact.form.success")}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md" role="alert">
                    <p className="text-red-800 text-center font-medium">❌ {t("contact.form.error")}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <aside className="space-y-8" aria-label="Información de contacto Ilmati Construcciones">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              )
            })}

            {/* Google Maps Embed */}
            <div className="mt-8">
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8234567891!2d-3.0071051!3d41.0823674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd437b4d2d41530b%3A0x1fe5d2da37475cc7!2sIlmati%20construcciones!5e0!3m2!1ses!2ses!4v1693827456789!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación Ilmati Construcciones en Hiendelaencina Guadalajara"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Ilmati Construcciones – Expertos en pladur y tresores en Guadalajara
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}