# Assets - GeoRu Landing Page

Esta carpeta contiene los recursos visuales para la landing page de GeoRu.

## Estructura de Carpetas

### `/logo`
Coloca aquí el logo de GeoRu en formato PNG, SVG o JPG.
- **Recomendado**: Logo en formato PNG con fondo transparente
- **Tamaño sugerido**: 512x512px o superior para alta calidad

### `/mockups`
Coloca aquí las imágenes que se mostrarán dentro de los mockups de iPhone y MacBook.

#### Archivos necesarios:
- **`iphone-screenshot.jpg`** o **`iphone-screenshot.png`**: Captura de pantalla de la app para mostrar en el mockup de iPhone
  - Tamaño recomendado: 390x844px (iPhone 13 Pro)
  - Formato: PNG o JPG con buena calidad
  
- **`macbook-screenshot.jpg`** o **`macbook-screenshot.png`**: Captura de pantalla o diseño para mostrar en el mockup de MacBook
  - Tamaño recomendado: 1920x1080px o superior
  - Formato: PNG o JPG con buena calidad

### `/apk`
Coloca aquí el archivo APK de la aplicación Android para descarga directa.

#### Archivo necesario:
- **`app-debug.apk`**: Archivo APK de la aplicación GeoRu
  - Este archivo se descargará directamente cuando los usuarios hagan clic en el botón "Descargar App"
  - Asegúrate de que el archivo esté firmado y listo para instalar
  - El archivo se descargará con el nombre `georu.apk` para el usuario

## Notas
- Si no colocas las imágenes, los mockups mostrarán un placeholder con el logo de GeoRu
- Las imágenes se cargarán automáticamente cuando las coloques en estas carpetas
- Asegúrate de que los nombres de archivo coincidan exactamente con los mencionados arriba
- El APK debe estar en la carpeta `/apk` con el nombre exacto `app-debug.apk` para que la descarga funcione correctamente

