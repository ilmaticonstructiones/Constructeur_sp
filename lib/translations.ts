export const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      services: "Servicios",
      reviews: "Reseñas",
      about: "Nosotros",
      contact: "Contacto",
    },
    // Hero Section
    hero: {
      title: "Fabricación e instalación de trasteros de Pladur a medida",
      subtitle:
        "Empresa de construcción y reformas integrales: obra civil, trasteros, pintura profesional y rehabilitación. Presupuesto gratis y sin compromiso",
      phone: "Llamar Ahora",
    },
    // Services
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de construcción y renovación",
    },
    // Reviews
    reviews: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Confianza de propietarios en toda España",
    },
    // About
    about: {
      title: "Sobre Nuestra Empresa",
      subtitle: "Tu socio de construcción de confianza en España",
      description:
        "Con más de 15 años de experiencia en construcción y renovación, nos enorgullecemos de ofrecer calidad excepcional y servicio al cliente. Nuestro equipo de profesionales cualificados está comprometido a transformar tu espacio con atención al detalle y artesanía duradera.",
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
    },
    // Contact
    contact: {
      title: "Ponte en Contacto",
      subtitle: "¿Listo para comenzar tu proyecto? Contáctanos hoy para una consulta gratuita.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        message: "Descripción del Proyecto",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar mensaje. Por favor, inténtalo de nuevo.",
      },
      info: {
        address: "C. Occidente, 19242 Hiendelaencina, Guadalajara, España",
        phone: "+34 643 516 352",
        email: "ilmaticonstrucciones@gmail.com",
        hours: "Lun-Sáb: 8:00 AM - 6:00 PM",
      },
    },
    // Footer
    footer: {
      description: "Servicios profesionales de construcción y renovación en toda España.",
      rights: "Todos los derechos reservados.",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
    },
  },
} as const

export type Locale = keyof typeof translations
export type TranslationKey = keyof typeof translations.es

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".")
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
