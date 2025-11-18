'use client'

import { useState } from 'react'
import { GlassCard } from '../../components/GlassCard'

export default function ContactoPage() {
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
        className="sticky top-0 z-50 border-b border-white/30 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(80px) saturate(300%)',
          WebkitBackdropFilter: 'blur(80px) saturate(300%)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative flex items-center justify-center py-3 md:py-4 min-h-[48px] md:min-h-0">
            {/* Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a href="/" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                Inicio
              </a>
              <a href="/equipo" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                Equipo
              </a>
              <a href="/contacto" className="text-emerald-600 font-medium whitespace-nowrap text-sm lg:text-base">
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/80 active:bg-gray-200/80 transition duration-200 absolute right-4 z-10"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 top-[57px]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[57px] z-40 border-b border-white/30 shadow-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(80px) saturate(300%)',
            WebkitBackdropFilter: 'blur(80px) saturate(300%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Inicio
              </a>
              <a 
                href="/equipo" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Equipo
              </a>
              <a 
                href="/contacto" 
                onClick={closeMobileMenu}
                className="text-emerald-600 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
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
            Contacto
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            ¿Tienes preguntas sobre GeoRu? ¡Nos encantaría escucharte!
          </p>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="relative bg-white/50 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <GlassCard variant="default" className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Información del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Institución</p>
                      <p className="text-gray-700 text-sm md:text-base">INACAP - Instituto Nacional de Capacitación Profesional</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Carrera</p>
                      <p className="text-gray-700 text-sm md:text-base">Ingeniería en Informática</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Tipo de Proyecto</p>
                      <p className="text-gray-700 text-sm md:text-base">Proyecto de Título</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Año</p>
                      <p className="text-gray-700 text-sm md:text-base">2025</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              <GlassCard variant="strong" className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Contáctanos</h3>
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Email</p>
                      <a href="mailto:georu.app@gmail.com" className="text-emerald-600 hover:text-emerald-700 text-sm md:text-base">
                        georu.app@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Ubicación</p>
                      <p className="text-gray-700 text-sm md:text-base">Talca, Chile</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">Horario de Atención</p>
                      <p className="text-gray-700 text-sm md:text-base">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <a href="mailto:nicolas.munoz147@inacapmail.cl,jose.concha17@inacapmail.cl" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg text-center">
                    Enviar Mensaje al Equipo
                  </a>
                </div>
              </GlassCard>
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
            <p className="text-gray-500 text-sm mt-4">© 2025 GeoRu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
