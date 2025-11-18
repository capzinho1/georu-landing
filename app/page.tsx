'use client'

import { useState } from 'react'
import { GlassCard } from '../components/GlassCard'
import { DeviceMockup } from '../components/DeviceMockup'
import { DownloadButton } from '../components/DownloadButton'

export default function Home() {
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
              <a href="#problema" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                El Problema
              </a>
              <a href="#solucion" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                La Solución
              </a>
              <a href="#funciona" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                Cómo Funciona
              </a>
              <a href="/equipo" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
                Equipo
              </a>
              <a href="/contacto" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium whitespace-nowrap text-sm lg:text-base">
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
                href="#problema" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                El Problema
              </a>
              <a 
                href="#solucion" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                La Solución
              </a>
              <a 
                href="#funciona" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Cómo Funciona
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
                className="text-gray-700 hover:text-emerald-600 active:text-emerald-700 transition duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section with Liquid Glass */}
      <section className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-80px)] flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            <span className="text-emerald-600">Geo</span><span className="text-cyan-600">Ru</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-6 px-4">
            Aplicación móvil para localización de buses rurales
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Conecta a las comunidades rurales con información en tiempo real sobre la ubicación de los buses, 
            eliminando la incertidumbre y mejorando la planificación de viajes.
          </p>
          
          {/* Download Button */}
          <div className="px-4">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* El Problema Section with Glass Cards */}
      <section id="problema" className="relative bg-gradient-to-br from-emerald-50/60 via-cyan-50/60 to-emerald-100/60 backdrop-blur-sm pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-16 scroll-mt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">El Problema</h2>
            <GlassCard variant="default" className="p-6 sm:p-8 md:p-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                En las zonas rurales, los buses no tienen paraderos fijos ni horarios claros. 
                Las personas deben esperar sin información sobre cuándo llegará el próximo bus, 
                generando incertidumbre y pérdida de tiempo valioso en sus desplazamientos diarios.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Cómo se Generó el Problema Section */}
      <section className="relative bg-gradient-to-r from-white/80 via-emerald-50/60 to-cyan-50/60 backdrop-blur-sm py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-emerald-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">¿Cómo Identificamos Este Problema?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <GlassCard variant="default" className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Investigación de Campo</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-sm sm:text-base text-gray-800">Entrevistas con 50+ usuarios de transporte rural en diferentes comunas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-sm sm:text-base text-gray-800">Observación directa en paraderos rurales durante 3 meses</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-sm sm:text-base text-gray-800">Análisis de datos de transporte público rural en Chile</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard variant="strong" className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Hallazgos Clave</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">⏰</span>
                    <p className="text-sm sm:text-base text-gray-800"><strong>85%</strong> de los usuarios esperan más de 30 minutos</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">📱</span>
                    <p className="text-sm sm:text-base text-gray-800"><strong>92%</strong> tiene acceso a smartphones</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">🚌</span>
                    <p className="text-sm sm:text-base text-gray-800"><strong>78%</strong> depende del transporte rural diariamente</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">😰</span>
                    <p className="text-sm sm:text-base text-gray-800"><strong>67%</strong> reporta estrés por la incertidumbre</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución Section */}
      <section id="solucion" className="relative bg-gradient-to-r from-emerald-50/70 via-cyan-50/70 to-emerald-100/70 backdrop-blur-sm py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">La Solución</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <GlassCard variant="strong" className="p-6 sm:p-8 md:p-12 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">GeoRu</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-6">
                  GeoRu permite a los pasajeros ver la ubicación del bus en tiempo real a través de un mapa interactivo, 
                  utilizando puntos de referencia comunitarios conocidos por los usuarios locales.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-gray-800">App móvil intuitiva y ligera</span>
                </div>
              </GlassCard>
              <div className="flex justify-center order-1 lg:order-2">
                <DeviceMockup 
                  device="iphone" 
                  imageSrc="/assets/mockups/iphone-screenshot.jpg"
                  className="w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section id="funciona" className="relative bg-gradient-to-br from-white/70 via-emerald-50/50 to-cyan-50/50 backdrop-blur-sm py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <GlassCard variant="default" className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Conductor Comparte Ubicación</h3>
                <p className="text-sm sm:text-base text-gray-700">El conductor activa la función de ubicación en tiempo real desde su dispositivo móvil</p>
              </GlassCard>
              <GlassCard variant="strong" className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-cyan-600">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Datos en la Nube</h3>
                <p className="text-sm sm:text-base text-gray-700">La aplicación guarda y procesa la información de ubicación en la nube de forma segura</p>
              </GlassCard>
              <GlassCard variant="default" className="p-6 sm:p-8 text-center sm:col-span-2 md:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Pasajero Ve el Mapa</h3>
                <p className="text-sm sm:text-base text-gray-700">Los pasajeros pueden ver la ubicación exacta del bus en el mapa con puntos de referencia locales</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos del Proyecto Section */}
      <section id="objetivos" className="relative bg-gradient-to-r from-cyan-50/70 via-emerald-50/70 to-cyan-100/70 backdrop-blur-sm py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">Objetivos del Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <GlassCard variant="default" className="p-6 sm:p-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-base sm:text-lg text-gray-800">Mejorar la planificación de viajes en zonas rurales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-base sm:text-lg text-gray-800">Reducir la incertidumbre en el transporte público rural</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard variant="strong" className="p-6 sm:p-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-base sm:text-lg text-gray-800">Crear una aplicación ligera que funcione con baja señal</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1 shadow-lg"></div>
                    <p className="text-base sm:text-lg text-gray-800">Conectar comunidades rurales con tecnología accesible</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Section */}
      <section id="tecnologias" className="relative bg-gradient-to-br from-white/70 via-emerald-50/50 to-cyan-50/50 backdrop-blur-sm py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-emerald-200/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">Tecnologías</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <GlassCard variant="default" className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">F</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Flutter + Dart</h3>
                <p className="text-xs sm:text-sm text-gray-700">Desarrollo móvil multiplataforma</p>
              </GlassCard>
              <GlassCard variant="strong" className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-orange-600">🔥</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Firebase</h3>
                <p className="text-xs sm:text-sm text-gray-700">Backend y base de datos en tiempo real</p>
              </GlassCard>
              <GlassCard variant="default" className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">🗺️</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Google Maps API</h3>
                <p className="text-xs sm:text-sm text-gray-700">Mapas y geolocalización</p>
              </GlassCard>
              <GlassCard variant="strong" className="p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">🤖</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">IA para Predicción</h3>
                <p className="text-xs sm:text-sm text-gray-700">Estimación inteligente de tiempos</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section with Liquid Glass */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-cyan-600 py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">Beneficios</h2>
            <GlassCard variant="strong" className="p-6 sm:p-8 md:p-12 bg-white/20 border-white/40">
              <p className="text-xl sm:text-2xl text-white leading-relaxed mb-4 sm:mb-6">
                Menos espera, más certeza, más conectividad para las zonas rurales.
              </p>
              <p className="text-base sm:text-lg text-emerald-50">
                GeoRu transforma la experiencia del transporte rural, brindando información confiable 
                y accesible para mejorar la calidad de vida de las comunidades.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white text-lg font-semibold mb-2">Nicolás Muñoz-Jose Concha-Constanza Castillo</p>
            <p className="text-gray-400">Proyecto de Título – INACAP</p>
            <p className="text-gray-500 text-sm mt-4">© 2025 GeoRu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
