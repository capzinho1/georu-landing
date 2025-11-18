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
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleDownloadClick}
        className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-14 px-10 text-lg font-semibold rounded-lg inline-flex items-center justify-center"
      >
        <Download className="mr-2 h-5 w-5" />
        Descargar App
      </button>
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Smartphone className="h-4 w-4 text-emerald-600" />
        <span className="font-medium">Solo disponible para</span>
        <span className="font-bold text-emerald-600">Android</span>
      </div>
    </div>
  )
}

