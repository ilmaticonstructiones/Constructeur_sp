import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Construction & Renovation Services in Spain | ConstructPro",
  description:
    "Comprehensive construction and renovation services across Spain. Kitchen remodeling, bathroom renovations, flooring, painting, electrical, and plumbing services.",
  keywords:
    "construction services Spain, renovation services, kitchen remodeling, bathroom renovation, flooring installation, interior painting, electrical work, plumbing services",
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Kitchen Renovation",
      slug: "kitchen-renovation",
      description: "Transform your kitchen with modern designs and quality materials",
      features: [
        "Custom cabinet installation",
        "Countertop replacement",
        "Modern appliance integration",
        "Lighting design",
      ],
      image: "/modern-kitchen-renovation-with-white-cabinets-and.png",
    },
    {
      title: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      description: "Complete bathroom transformations with contemporary fixtures",
      features: ["Tile installation", "Fixture replacement", "Shower/bathtub renovation", "Ventilation systems"],
      image: "/modern-bathroom-renovation-with-contemporary-fixtu.png",
    },
    {
      title: "Flooring Installation",
      slug: "flooring-installation",
      description: "Professional installation of various flooring materials",
      features: ["Hardwood flooring", "Tile installation", "Laminate flooring", "Floor preparation"],
      image: "/professional-flooring-installation-hardwood-tiles.png",
    },
    {
      title: "Interior Painting",
      slug: "interior-painting",
      description: "Professional painting services to refresh your space",
      features: ["Wall preparation", "Premium paint application", "Color consultation", "Trim and detail work"],
      image: "/professional-interior-painting-service-modern-ho.png",
    },
    {
      title: "Electrical Work",
      slug: "electrical-work",
      description: "Safe and reliable electrical installations and repairs",
      features: [
        "Wiring installation",
        "Outlet and switch replacement",
        "Lighting installation",
        "Electrical panel upgrades",
      ],
      image: "/professional-electrician-working-on-home-wiring.png",
    },
    {
      title: "Plumbing Services",
      slug: "plumbing-services",
      description: "Complete plumbing solutions for residential properties",
      features: ["Pipe installation", "Fixture replacement", "Leak repairs", "Water heater installation"],
      image: "/professional-plumber-working-on-residential-pipe.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Professional Construction & Renovation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Comprehensive solutions for all your construction and renovation needs across Spain. Quality
              craftsmanship, reliable service, and competitive pricing.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experienced team is ready to bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call Now: +34 XXX XXX XXX
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
