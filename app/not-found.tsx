import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-red-500 text-gray-900 font-sans px-6">
      {/* Big 404 */}
      <div className="text-8xl font-extrabold drop-shadow-lg mb-4">404</div>

      {/* Subtitle */}
      <div className="text-2xl md:text-3xl font-semibold mb-8">
        Página en construcción 🚧
      </div>

      {/* Card */}
      <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 flex items-center gap-4 max-w-lg">
        {/* Hammer Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-14 h-14 text-red-500"
        >
          <path d="M2 21l1-1 5.5-5.5 1.5 1.5L4.5 21H2zm9.707-9.707l1.5 1.5-7.5 7.5H4.5v-1.207l7.207-7.793zM21 5.414l-2.121 2.121-2.829-2.829L18.171 2.585a2 2 0 012.829 2.829zM6.343 13.657l8.486-8.486 2.829 2.829-8.486 8.486-2.829-2.829z" />
        </svg>

        {/* Text */}
        <span className="text-lg text-gray-700 leading-relaxed">
          Lo sentimos, la página que buscas aún no está disponible.  
          <br />¡Nuestro equipo está trabajando duro para construirla! 🏗️
        </span>
      </div>

      {/* Button */}
      <a
        href="/"
        className="mt-8 px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold shadow-md transition"
      >
        Volver al inicio
      </a>
    </div>
  );
}
