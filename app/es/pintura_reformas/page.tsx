import Head from 'next/head';
import { Paintbrush, Home, Shield, MapPin, Phone, Mail, Star } from 'lucide-react';

export default function PinturaReformas() {
  return (
    <>
      <Head>
        <title>Pintura y Reformas en Guadalajara y Madrid | Ilmaticonstrucciones</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura y reformas generales en Guadalajara, Madrid y alrededores. Mejora tu hogar o negocio con Ilmaticonstrucciones."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="pintura Guadalajara, reformas Madrid, pintura España, reformas España, Ilmaticonstrucciones, renovación de pisos" />
        <link rel="canonical" href="https://www.trasterosypladur.es/pintura-reformas-spain" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-orange-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pintura y Reformas Generales Profesionales
            </h1>
            <p className="text-xl text-orange-50">
              Transformamos espacios en Guadalajara, Madrid y toda España
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Pintura Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios de Pintura</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ofrecemos <strong>pintura interior y exterior</strong> con acabados duraderos y de alta calidad en Guadalajara, Madrid y alrededores.  
              Nuestro equipo garantiza resultados impecables y atención a cada detalle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Pintura Interior</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dormitorios y salones</li>
                  <li>• Cocinas y baños</li>
                  <li>• Acabados mate y satinados</li>
                  <li>• Pintura lavable y resistente</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Pintura Exterior</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fachadas de edificios</li>
                  <li>• Impermeabilización</li>
                  <li>• Protección contra clima</li>
                  <li>• Pinturas especializadas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Reformas Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reformas Generales</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Realizamos <strong>reformas completas</strong> de pisos, oficinas y locales comerciales, adaptadas a tu presupuesto y necesidades.  
              Cada proyecto se ejecuta de manera profesional y eficiente.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Pisos Completos</h3>
                <p className="text-sm text-gray-600">Reforma integral de viviendas</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Oficinas</h3>
                <p className="text-sm text-gray-600">Espacios de trabajo modernos</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Locales</h3>
                <p className="text-sm text-gray-600">Comercios y negocios</p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Commitment Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestro Compromiso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-orange-500 text-4xl mb-3">⭐</div>
                <h3 className="font-bold text-gray-900 mb-2">Profesionales Certificados</h3>
                <p className="text-sm text-gray-600">
                  Equipo con amplia experiencia trabajando por toda España
                </p>
              </div>
              <div className="text-center">
                <div className="text-orange-500 text-4xl mb-3">👥</div>
                <h3 className="font-bold text-gray-900 mb-2">Atención Personalizada</h3>
                <p className="text-sm text-gray-600">
                  Nos adaptamos a las necesidades específicas de cada cliente
                </p>
              </div>
              <div className="text-center">
                <div className="text-orange-500 text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Garantía de Calidad</h3>
                <p className="text-sm text-gray-600">
                  Satisfacción total garantizada en cada proyecto realizado
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Contact Section */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contacta con Nosotros</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
                <p className="text-gray-700">C. Occidente, 19242 Hiendelaencina, Guadalajara, España</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                <a href="tel:+34643516352" className="text-orange-500 hover:text-orange-600">
                  +34 643 516 352
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <a href="mailto:ilmaticonstrucciones@gmail.com" className="text-orange-500 hover:text-orange-600 break-all">
                  ilmaticonstrucciones@gmail.com
                </a>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="tel:+34643516352"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                Solicitar Presupuesto Gratis
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}