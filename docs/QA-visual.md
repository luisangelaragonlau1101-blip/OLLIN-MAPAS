# OLLIN Visual 04.1

Esta publicación mantiene un solo mapa Leaflet y usa el diseño de mapa a pantalla completa, buscador flotante, panel ampliable y puntos turísticos dorados. No requiere iframe ni WebGL.

Antes del commit se comprobó la sintaxis JavaScript con Node.js. Las pruebas locales no sustituyen una prueba en un iPhone conectado a los proveedores.

## Pruebas de aceptación

1. Abrir sin permiso GPS: debe verse México sin fingir que es la ubicación del usuario. Mover, acercar y abrir Perfil; regresar debe mantener la instancia.
2. Buscar una dirección, seleccionar, activar GPS y calcular: ruta y tiempo estimado deben aparecer. Sin GPS reciente no se calcula desde una ubicación ficticia.
3. Abrir un punto turístico dorado, consultar historia, seguir su fuente, guardar y abrir Guardados. Los puntos volcánicos no deben ofrecer rutas a una cumbre como acceso seguro.
4. Cambiar el nombre y personalidad; escuchar ejemplo. Debe decir que la voz es sintética y que la muestra no es una indicación real.
5. Fallo de tiles nocturnos: cambia una vez a OpenStreetMap con filtro nocturno. Si también falla, muestra el error; no declara el mapa listo usando un temporizador.

## Límites explícitos

Sin tráfico, tarifas de casetas ni navegación giro a giro en vivo. Las voces son del dispositivo. Las búsquedas y mapas dependen de servicios externos de capacidad limitada. Los alias son nombres personales, no cambios de fronteras ni direcciones oficiales. La atribución de proveedores permanece visible.
