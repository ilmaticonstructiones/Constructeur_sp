// app/not-found.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/ilmati-logo.png"
            alt="ILMATI Construcciones"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">ILMATI CONSTRUCCIONES</h1>
        </div>

        {/* 404 Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Página No Encontrada</h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe. Puede que haya sido movida o eliminada.
          </p>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link href="#contact" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Contactar Ahora
              </Link>
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">¿Necesita ayuda inmediata con su proyecto?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34643516352" className="text-primary hover:underline font-medium">
              +34 643 516 352
            </a>
            <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-primary hover:underline font-medium">
              ilmaticonstrucciones@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}