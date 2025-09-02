'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from '../components'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Hero animations
    if (heroRef.current && logoRef.current) {
      const tl = gsap.timeline()
      
      tl.fromTo(logoRef.current, 
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)" }
      )
      .fromTo(heroRef.current.querySelector('h1'), 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5"
      )
      .fromTo(heroRef.current.querySelector('h2'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
      )
      .fromTo(heroRef.current.querySelector('p'), 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
      )
      .fromTo(heroRef.current.querySelector('.flex'), 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
      )

      // Parallax effect for hero background
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
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
              <a href="#problema" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                El Problema
              </a>
              <a href="#solucion" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                La Solución
              </a>
              <a href="#funciona" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                Cómo Funciona
              </a>
              <a href="/equipo" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                Equipo
              </a>
              <a href="/contacto" className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium">
                Contacto
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Descargar App
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300"
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
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#problema" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
              >
                El Problema
              </a>
              <a 
                href="#solucion" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
              >
                La Solución
              </a>
              <a 
                href="#funciona" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
              >
                Cómo Funciona
              </a>
              <a 
                href="/equipo" 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium py-2"
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
              <button 
                onClick={closeMobileMenu}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center mt-4"
              >
                Descargar App
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 pt-96 pb-32">
        <div className="text-center">
          <div ref={logoRef} className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <span className="text-white font-bold text-4xl">G</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">Geo</span><span className="text-cyan-600">Ru</span>
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Aplicación móvil para localización de buses rurales
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conecta a las comunidades rurales con información en tiempo real sobre la ubicación de los buses, 
            eliminando la incertidumbre y mejorando la planificación de viajes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg transform hover:scale-105">
              Descargar App
            </button>
            <a href="/equipo" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg transform hover:scale-105 inline-block">
              Conoce más
            </a>
          </div>
        </div>
      </section>

      {/* El Problema Section */}
      <section id="problema" className="bg-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">El Problema</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed">
                En las zonas rurales, los buses no tienen paraderos fijos ni horarios claros. 
                Las personas deben esperar sin información sobre cuándo llegará el próximo bus, 
                generando incertidumbre y pérdida de tiempo valioso en sus desplazamientos diarios.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Cómo se Generó el Problema Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">¿Cómo Identificamos Este Problema?</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeInLeft>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Investigación de Campo</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <p className="text-gray-700">Entrevistas con 50+ usuarios de transporte rural en diferentes comunas</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <p className="text-gray-700">Observación directa en paraderos rurales durante 3 meses</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                      <p className="text-gray-700">Análisis de datos de transporte público rural en Chile</p>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Hallazgos Clave</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⏰</span>
                      <p className="text-gray-700"><strong>85%</strong> de los usuarios esperan más de 30 minutos</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <p className="text-gray-700"><strong>92%</strong> tiene acceso a smartphones</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚌</span>
                      <p className="text-gray-700"><strong>78%</strong> depende del transporte rural diariamente</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">😰</span>
                      <p className="text-gray-700"><strong>67%</strong> reporta estrés por la incertidumbre</p>
                    </div>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución Section */}
      <section id="solucion" className="bg-gradient-to-r from-emerald-50 to-cyan-50 py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInLeft>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">La Solución</h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    GeoRu permite a los pasajeros ver la ubicación del bus en tiempo real a través de un mapa interactivo, 
                    utilizando puntos de referencia comunitarios conocidos por los usuarios locales.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">App móvil intuitiva y ligera</span>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="w-72 h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-between px-6 text-white text-xs">
                          <span>9:41</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                            <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                            <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
                          </div>
                        </div>
                        
                        {/* App Content */}
                        <div className="p-6 h-full">
                          {/* Header */}
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                              <span className="text-white font-bold text-2xl">G</span>
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">GeoRu</h4>
                            <p className="text-sm text-gray-600">Buses Rurales</p>
                          </div>

                          {/* Map Area */}
                          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-4 mb-4 h-48 relative overflow-hidden">
                            {/* Map Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                            
                            {/* Roads */}
                            <div className="absolute inset-0">
                              {/* Main Road (horizontal) */}
                              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -translate-y-1/2"></div>
                              {/* Secondary Road (vertical) */}
                              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>
                              {/* Curved Road */}
                              <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-gray-400 rounded-full border-t-0 border-r-0"></div>
                            </div>
                            
                            {/* Landmarks */}
                            <div className="absolute inset-0">
                              {/* Plaza */}
                              <div className="absolute top-8 left-8 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                                <span className="text-xs">🏛️</span>
                              </div>
                              {/* School */}
                              <div className="absolute top-16 right-12 w-5 h-5 bg-blue-300 rounded flex items-center justify-center">
                                <span className="text-xs">🏫</span>
                              </div>
                              {/* Store */}
                              <div className="absolute bottom-12 left-16 w-5 h-5 bg-orange-300 rounded flex items-center justify-center">
                                <span className="text-xs">🏪</span>
                              </div>
                              {/* Church */}
                              <div className="absolute bottom-8 right-8 w-5 h-5 bg-purple-300 rounded flex items-center justify-center">
                                <span className="text-xs">⛪</span>
                              </div>
                            </div>
                            
                            {/* Bus Location */}
                            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="relative">
                                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                                <div className="absolute -top-1 -left-1 w-6 h-6 bg-emerald-500/20 rounded-full animate-ping"></div>
                                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            
                            {/* Route Line */}
                            <div className="absolute top-1/2 left-1/4 right-1/3 h-0.5 bg-emerald-500 transform -translate-y-1/2 opacity-60"></div>
                            
                            {/* Map Controls */}
                            <div className="absolute top-2 right-2 flex flex-col space-y-1">
                              <div className="w-6 h-6 bg-white/80 rounded flex items-center justify-center">
                                <span className="text-xs">+</span>
                              </div>
                              <div className="w-6 h-6 bg-white/80 rounded flex items-center justify-center">
                                <span className="text-xs">-</span>
                              </div>
                            </div>
                            
                            {/* Location Info */}
                            <div className="absolute bottom-2 left-2 right-2">
                              <div className="bg-white/90 rounded-lg p-2">
                                <div className="text-xs text-gray-600 mb-1">Próximo bus</div>
                                <div className="text-sm font-semibold text-gray-900">Llegada: 12 min</div>
                                <div className="text-xs text-emerald-600">Cerca de la plaza</div>
                              </div>
                            </div>
                          </div>

                          {/* Bus Info */}
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-xl p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">Bus Rural #15</div>
                                  <div className="text-xs text-gray-600">Hacia el centro</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-semibold text-emerald-600">12 min</div>
                                  <div className="text-xs text-gray-500">2.3 km</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">En movimiento</div>
                                  <div className="text-xs text-emerald-600">Actualizado hace 30 seg</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section id="funciona" className="bg-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Cómo Funciona</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScaleIn delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Conductor Comparte Ubicación</h3>
                  <p className="text-gray-600">El conductor activa la función de ubicación en tiempo real desde su dispositivo móvil</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-cyan-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos en la Nube</h3>
                  <p className="text-gray-600">La aplicación guarda y procesa la información de ubicación en la nube de forma segura</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Pasajero Ve el Mapa</h3>
                  <p className="text-gray-600">Los pasajeros pueden ver la ubicación exacta del bus en el mapa con puntos de referencia locales</p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>



      {/* Objetivos del Proyecto Section */}
      <section id="objetivos" className="bg-gradient-to-r from-cyan-50 to-emerald-50 py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Objetivos del Proyecto</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInLeft delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-gray-700">Mejorar la planificación de viajes en zonas rurales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-gray-700">Reducir la incertidumbre en el transporte público rural</p>
                  </div>
                </div>
              </FadeInLeft>
              <FadeInRight delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-gray-700">Crear una aplicación ligera que funcione con baja señal</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                    <p className="text-lg text-gray-700">Conectar comunidades rurales con tecnología accesible</p>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </section>



      {/* Tecnologías Section */}
      <section id="tecnologias" className="bg-white py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Tecnologías</h2>
            </FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScaleIn delay={0.1}>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">F</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Flutter + Dart</h3>
                  <p className="text-sm text-gray-600">Desarrollo móvil multiplataforma</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.2}>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">🔥</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Firebase</h3>
                  <p className="text-sm text-gray-600">Backend y base de datos en tiempo real</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.3}>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">🗺️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Google Maps API</h3>
                  <p className="text-sm text-gray-600">Mapas y geolocalización</p>
                </div>
              </ScaleIn>
              <ScaleIn delay={0.4}>
                <div className="text-center transform hover:scale-105 transition duration-300">
                  <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">IA para Predicción</h3>
                  <p className="text-sm text-gray-600">Estimación inteligente de tiempos</p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-cyan-600 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-white mb-8">Beneficios</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-2xl text-emerald-100 leading-relaxed">
                Menos espera, más certeza, más conectividad para las zonas rurales.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-lg text-emerald-100 mt-6">
                GeoRu transforma la experiencia del transporte rural, brindando información confiable 
                y accesible para mejorar la calidad de vida de las comunidades.
              </p>
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
            <p className="text-gray-500 text-sm mt-4">© 2025 GeoRu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
