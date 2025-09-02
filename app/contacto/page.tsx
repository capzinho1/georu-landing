'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FadeInUp, FadeInLeft, FadeInRight } from '../../components'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactoPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const tl = gsap.timeline()
      
      tl.fromTo(heroRef.current.querySelector('h1'), 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo(heroRef.current.querySelector('p'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
      )
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  <span className="text-emerald-600">Geo</span><span className="text-cyan-600">Ru</span>
                </h1>
                <p className="text-xs text-gray-500">Buses Rurales</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                Inicio
              </a>
              <a href="/equipo" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                Equipo
              </a>
              <a href="/contacto" className="text-emerald-600 font-medium">
                Contacto
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Descargar App
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre GeoRu? ¡Nos encantaría escucharte!
          </p>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeInLeft>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información del Proyecto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Institución</p>
                        <p className="text-gray-600">INACAP - Instituto Nacional de Capacitación Profesional</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Carrera</p>
                        <p className="text-gray-600">Ingeniería en Informática</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Tipo de Proyecto</p>
                        <p className="text-gray-600">Proyecto de Título</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Año</p>
                        <p className="text-gray-600">2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contáctanos</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:georu.app@gmail.com" className="text-emerald-600 hover:text-emerald-700 transition duration-300">
                          georu.app@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Ubicación</p>
                        <p className="text-gray-600">Talca, Chile</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Horario de Atención</p>
                        <p className="text-gray-600">Lunes a Viernes, 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="mailto:nicolas.munoz147@inacapmail.cl,jose.concha17@inacapmail.cl" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center">
                      Enviar Mensaje al Equipo
                    </a>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white text-lg font-semibold mb-2">Nicolás Muñoz-Jose Concha</p>
            <p className="text-gray-400">Proyecto de Título – INACAP</p>
            <p className="text-gray-500 text-sm mt-4">© 2024 GeoRu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
