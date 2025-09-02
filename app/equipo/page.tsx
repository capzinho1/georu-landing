'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '../../components'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EquipoPage() {
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
              <a href="/equipo" className="text-emerald-600 font-medium">
                Equipo
              </a>
              <a href="/contacto" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
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
            Nuestro Equipo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estudiantes de INACAP desarrollando tecnología para el bien social
          </p>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScaleIn delay={0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-white font-bold text-4xl">N</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Nicolás Muñoz</h3>
                  <p className="text-emerald-600 font-medium mb-3">Desarrollador Full Stack</p>
                  <p className="text-gray-600 mb-4">
                  Especializado en desarrollo frontend y experiencia de usuario. Encargado de la arquitectura de la aplicación y de la integración con APIs de mapas.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="mailto:nicolas.munoz147@inacapmail.cl" className="text-emerald-600 hover:text-emerald-700 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-white font-bold text-4xl">J</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Jose Concha</h3>
                  <p className="text-cyan-600 font-medium mb-3">Desarrollador Full Stack</p>
                  <p className="text-gray-600 mb-4">
                  Orientado al desarrollo backend, con conocimientos en frontend. Responsable del diseño de la aplicación y de la investigación con usuarios rurales
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="mailto:jose.concha17@inacapmail.cl" className="text-cyan-600 hover:text-cyan-700 transition duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </ScaleIn>
            </div>
            <FadeInUp delay={0.3}>
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Proyecto de Título</h3>
                  <p className="text-gray-600 mb-4">
                    Este proyecto forma parte de nuestro trabajo de título en la carrera de 
                    <strong> Ingeniería en Informática</strong> en <strong>INACAP</strong>.
                  </p>
                  <p className="text-gray-600">
                    Nuestro objetivo es crear una solución tecnológica que realmente impacte 
                    positivamente en la vida de las comunidades rurales de Chile.
                  </p>
                </div>
              </div>
            </FadeInUp>
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
