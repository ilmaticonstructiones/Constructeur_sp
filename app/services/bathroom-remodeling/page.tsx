import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Euro, Phone } from "lucide-react"

export const metadata = {
  title: "Bathroom Remodeling Services in Spain | ConstructPro",
  description:
    "Professional bathroom renovation services across Spain. Modern fixtures, tile installation, complete bathroom transformations. Expert bathroom remodeling.",
  keywords:
    "bathroom remodeling Spain, bathroom renovation, bathroom installation, modern bathroom design, tile installation",
}

export default function BathroomRemodelingPage() {
  const features = [
    "Complete tile installation and design",
    "Modern fixture replacement",
    "Shower and bathtub renovation",
    "Vanity and storage solutions",
    "Lighting and ventilation systems",
    "Plumbing and electrical updates",
    "Waterproofing and moisture control",
    "Accessibility modifications",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Bathroom Remodeling</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Create Your Perfect Bathroom Retreat
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your bathroom into a modern, functional space with our comprehensive remodeling services. From
                luxury fixtures to efficient layouts, we create bathrooms that combine style and functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-bathroom-renovation-with-contemporary-fixtu.png"
                alt="Modern bathroom renovation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Bathroom Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your bathroom renovation handled by our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bathroom Remodeling Packages</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Essential Refresh</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  5,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fixture replacement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Basic tile work
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Vanity installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Paint and finishing
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Complete Remodel</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  12,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Full tile installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Modern fixtures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Custom vanity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Shower/tub renovation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Lighting and ventilation
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Luxury Spa</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  20,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Premium tile and stone
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    High-end fixtures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Custom shower systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Heated flooring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Smart home integration
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center text-muted-foreground mb-4">
              <Clock className="h-5 w-5 mr-2" />
              <span>Typical project duration: 1-3 weeks</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
