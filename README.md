# OLLIN Maps · Visual 04.1

**Se mueve contigo.**

Interfaz web de mapa a pantalla completa, identidad blanca sobre negro, panel ampliable, buscador flotante y puntos de interés en dorado. El código de esta versión está en `site/index.html`, `site/visual.css` y `site/visual.js`. Conserva una sola instancia Leaflet.

## Estado

Código subido y comprobado en GitHub. La publicación de esta revisión en Vercel no ha sido confirmada: la herramienta de despliegue devolvió un error de validación y la consulta del alias anterior devolvió Deployment not found. No se proporciona una URL de aplicación como si ya estuviera publicada.

## Publicación

Importar este repositorio en Vercel. Directorio raíz: raíz del repositorio. Framework: Other. Comando de compilación: `npm run build`. Directorio de salida: `dist`. La configuración está en `vercel.json`.

El script de compilación comprueba la sintaxis de `site/visual.js` y copia `site/` a `dist/`. Requiere Node.js 22.

## Funciones de esta revisión

- Mapa nocturno con alternativa OpenStreetMap si falla la cartografía inicial.
- GPS solicitado por el usuario, sin origen ficticio para las rutas.
- Búsqueda y planificación de ruta con distancia y tiempo estimados.
- Categorías cercanas al área consultada, lugares turísticos y contexto con enlace a Wikipedia.
- Perfil y foto locales, dirección de Casa y destinos guardados.
- Personalidades regionales y muestras con el nombre del usuario usando voz sintética del dispositivo.
- Alias personales para Centro de Chalco / Lomas de Chalco, América mexicana e Isla cubana mexicana. No cambian fronteras ni direcciones oficiales.

## Límites

Esta revisión es de exploración y planificación. No integra tráfico en vivo, tarifas de casetas, cuentas sincronizadas, seguimiento de otras personas ni navegación giro a giro. La voz no es una grabación humana ni clonación. Los datos externos dependen de servicios con capacidad limitada. No se ofrece ruta a cumbres volcánicas como supuesto acceso seguro.

Se mantienen atribuciones del mapa y enlaces de las fuentes; no hay marcas de agua decorativas.

## Verificación

Sintaxis JavaScript comprobada y 10 verificaciones de lógica con DOM, Leaflet y red simulados aprobadas. Esto no sustituye pruebas reales en iPhone ni verifica disponibilidad de los proveedores. Detalles en `docs/QA-visual.md` y `docs/visual-test-results.txt`.
