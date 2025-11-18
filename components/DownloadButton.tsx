'use client'

import { Download, Smartphone } from 'lucide-react'

export function DownloadButton() {
  const handleDownloadClick = () => {
    // Descarga directa del APK
    const link = document.createElement('a')
    link.href = '/assets/apk/app-debug.apk'
    link.download = 'georu.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
      <button
        onClick={handleDownloadClick}
        className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 active:from-emerald-800 active:to-cyan-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-base sm:text-lg font-semibold rounded-lg inline-flex items-center justify-center w-full sm:w-auto"
      >
        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <span>Descargar App</span>
      </button>
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
        <Smartphone className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 flex-shrink-0" />
        <span className="font-medium whitespace-nowrap">Solo disponible para</span>
        <span className="font-bold text-emerald-600 whitespace-nowrap">Android</span>
      </div>
    </div>
  )
}

