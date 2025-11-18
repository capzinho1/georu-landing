'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface DeviceMockupProps {
  device: 'iphone' | 'macbook'
  imageSrc?: string
  className?: string
}

export function DeviceMockup({ device, imageSrc, className }: DeviceMockupProps) {
  const [imageError, setImageError] = useState(false)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (imageSrc && !imageError) {
      const img = new window.Image()
      img.onload = () => {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
      }
      img.onerror = () => {
        setImageError(true)
      }
      img.src = imageSrc
    }
  }, [imageSrc, imageError])

  if (device === 'iphone') {
    // Calcular el tamaño del mockup basado en la imagen
    // Proporción típica de iPhone: ~9:19.5 (ancho:alto)
    const iphoneAspectRatio = 9 / 19.5
    let mockupWidth = 280
    let mockupHeight = 580

    if (imageDimensions) {
      const imageAspectRatio = imageDimensions.width / imageDimensions.height
      
      // Escalar basado en el ancho de la imagen, con límites razonables
      const baseScale = 0.35 // Factor de escala para ajustar el tamaño
      const maxWidth = 500
      const minWidth = 250
      const maxHeight = 1000
      const minHeight = 500
      
      // Calcular dimensiones basadas en la imagen
      const calculatedWidth = imageDimensions.width * baseScale
      const calculatedHeight = imageDimensions.height * baseScale
      
      // Ajustar para mantener proporción de iPhone si es necesario
      if (imageAspectRatio > iphoneAspectRatio) {
        // Imagen más ancha - usar ancho como referencia
        mockupWidth = Math.min(maxWidth, Math.max(minWidth, calculatedWidth))
        mockupHeight = mockupWidth / iphoneAspectRatio
      } else {
        // Imagen más alta - usar altura como referencia
        mockupHeight = Math.min(maxHeight, Math.max(minHeight, calculatedHeight))
        mockupWidth = mockupHeight * iphoneAspectRatio
      }
    }

    return (
      <div className={className}>
        <div 
          className="relative mx-auto"
          style={{ 
            width: `${mockupWidth}px`, 
            height: `${mockupHeight}px`,
            maxWidth: '100%'
          }}
        >
          {/* iPhone Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full relative">
                {imageSrc && !imageError ? (
                  <img
                    src={imageSrc}
                    alt="App Screenshot"
                    className="w-full h-full object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="relative w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                        <Image
                          src="/assets/logo/georu.png"
                          alt="GeoRu Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">Imagen de la app</p>
                      <p className="text-gray-500 text-xs mt-2">Coloca tu imagen en /public/assets/mockups/iphone-screenshot.jpg o .png</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (device === 'macbook') {
    return (
      <div className={className}>
        <div className="relative mx-auto w-full max-w-4xl">
          {/* MacBook Frame */}
          <div className="relative">
            {/* Screen */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-2 shadow-2xl">
              <div className="bg-black rounded-t-xl overflow-hidden aspect-video relative">
                {/* Camera notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-b-lg z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full relative">
                  {imageSrc && !imageError ? (
                    <img
                      src={imageSrc}
                      alt="App Screenshot"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                          <Image
                            src="/assets/logo/georu.png"
                            alt="GeoRu Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-gray-600">Imagen de la app</p>
                        <p className="text-gray-500 text-sm mt-2">Coloca tu imagen en /public/assets/mockups/macbook-screenshot.jpg o .png</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Keyboard Base */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-4 rounded-b-2xl shadow-xl"></div>
            <div className="bg-gradient-to-br from-gray-600 to-gray-700 h-2 rounded-b-xl mx-auto w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

