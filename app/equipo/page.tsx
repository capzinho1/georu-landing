'use client'

import { useState } from 'react'
import { GlassCard } from '../../components/GlassCard'

export default function EquipoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-emerald-100">
      {/* Header with Liquid Glass Effect */}
      <header 
        className="sticky top-0 z-50 border-b border-white/40 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center py-4">
            {/* Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap">
                Inicio
              </a>
              <a href="/equipo" className="text-emerald-600 font-medium whitespace-nowrap">
                Equipo
              </a>
              <a href="/contacto" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap">
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300 absolute right-0"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden border-b border-white/40 shadow-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
              >
                Inicio
              </a>
              <a 
                href="/equipo" 
                onClick={closeMobileMenu}
                className="text-emerald-600 font-medium py-2"
              >
                Equipo
              </a>
              <a 
                href="/contacto" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Estudiantes de INACAP desarrollando tecnología para el bien social
          </p>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="relative bg-white/50 backdrop-blur-sm py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <GlassCard variant="default" className="p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                  <span className="text-white font-bold text-3xl md:text-4xl">N</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Nicolás Muñoz</h3>
                <p className="text-emerald-600 font-medium mb-3">Desarrollador Full Stack</p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Especializado en desarrollo frontend y experiencia de usuario. Encargado de la arquitectura de la aplicación y de la integración con APIs de mapas.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:nicolas.munoz147@inacapmail.cl" className="text-emerald-600 hover:text-emerald-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </GlassCard>
              <GlassCard variant="strong" className="p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                  <span className="text-white font-bold text-3xl md:text-4xl">J</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Jose Concha</h3>
                <p className="text-cyan-600 font-medium mb-3">Desarrollador Full Stack</p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Orientado al desarrollo backend, con conocimientos en frontend. Responsable del diseño de la aplicación y de la investigación con usuarios rurales
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:jose.concha17@inacapmail.cl" className="text-cyan-600 hover:text-cyan-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </GlassCard>
              <GlassCard variant="default" className="p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl">
                  <span className="text-white font-bold text-3xl md:text-4xl">C</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Constanza Castillo</h3>
                <p className="text-purple-600 font-medium mb-3">Diseñadora</p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Especializada en diseño de interfaces y experiencia de usuario. Responsable del diseño visual de la aplicación y de la identidad de marca.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:constanza.castillo@inacapmail.cl" className="text-purple-600 hover:text-purple-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </GlassCard>
            </div>
            <div className="text-center mt-8 md:mt-12">
              <GlassCard variant="default" className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Proyecto de Título</h3>
                <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                  Este proyecto forma parte de nuestro trabajo de título en la carrera de 
                  <strong> Ingeniería en Informática</strong> en <strong>INACAP</strong>.
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  Nuestro objetivo es crear una solución tecnológica que realmente impacte 
                  positivamente en la vida de las comunidades rurales de Chile.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white text-lg font-semibold mb-2">Nicolás Muñoz - Jose Concha - Constanza Castillo</p>
            <p className="text-gray-400">Proyecto de Título – INACAP</p>
            <p className="text-gray-500 text-sm mt-4">© 2025 GeoRu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
