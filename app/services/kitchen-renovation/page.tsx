import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Euro, Phone } from "lucide-react"

export const metadata = {
  title: "Kitchen Renovation Services in Spain | ConstructPro",
  description:
    "Professional kitchen renovation services across Spain. Custom designs, quality materials, expert installation. Transform your kitchen with ConstructPro.",
  keywords:
    "kitchen renovation Spain, kitchen remodeling, custom kitchen design, kitchen installation, modern kitchen renovation",
}

export default function KitchenRenovationPage() {
  const features = [
    "Custom cabinet design and installation",
    "Countertop replacement (granite, quartz, marble)",
    "Modern appliance integration",
    "Kitchen island construction",
    "Lighting design and installation",
    "Plumbing and electrical work",
    "Flooring installation",
    "Paint and finishing work",
  ]

  const process = [
    { step: "1", title: "Consultation", description: "Free in-home consultation and design planning" },
    { step: "2", title: "Design", description: "3D design mockups and material selection" },
    { step: "3", title: "Planning", description: "Project timeline and permit acquisition" },
    { step: "4", title: "Construction", description: "Professional installation and renovation work" },
    { step: "5", title: "Completion", description: "Final inspection and project handover" },
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
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Kitchen Renovation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Transform Your Kitchen with Modern Design
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create the kitchen of your dreams with our comprehensive renovation services. From custom cabinets to
                modern appliances, we handle every detail of your kitchen transformation.
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
                src="/modern-kitchen-renovation-with-white-cabinets-and.png"
                alt="Modern kitchen renovation"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive kitchen renovation service covers every aspect of your project
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

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final completion, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Basic Renovation</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  8,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Cabinet refacing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Countertop replacement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Basic appliance installation
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
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Complete Renovation</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  15,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Custom cabinet installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Premium countertops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Full appliance package
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Flooring installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Electrical and plumbing
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Luxury Renovation</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  <Euro className="inline h-8 w-8" />
                  25,000+
                </div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Designer custom cabinets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Premium stone countertops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    High-end appliances
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Kitchen island
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Custom lighting design
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
              <span>Typical project duration: 2-4 weeks</span>
            </div>
            <p className="text-sm text-muted-foreground">
              *Prices vary based on kitchen size, materials selected, and project complexity. Free consultation
              included.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your kitchen renovation project.
          </p>
          <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
