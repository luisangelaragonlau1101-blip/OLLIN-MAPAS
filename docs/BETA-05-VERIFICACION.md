# Verificación de OLLIN beta 05

La beta web se publicó sobre el mismo proyecto `ollin-maps-idhj0d`, con código fuente importado de GitHub por commit inmutable `320d741273b4e42d55f5e73fca73186823e9beaa`. El estado del despliegue fue ready; la instantánea automática no reportó errores de frontend o red. No devolvió resultados de pruebas E2E completas.

## Pruebas de lógica ejecutadas
Se ejecutaron 20 pruebas locales con Node: 12 de backend y 8 del cliente. Todas aprobaron. Se simularon OAuth, transporte API, middleware y base de datos; no se ingresó a una cuenta real de Google, Apple o X para verificarlas.

Backend: rechazo de GET, PUT y DELETE anónimos; crear/leer perfil propio; aislamiento entre dos usuarios; ignorar identificadores de propietario enviados por el cliente; actualización; rechazo de nombre vacío; coordenadas válidas; límite de favoritos; exclusión de foto/GPS/token; eliminación de datos sin afectar otro usuario.

Cliente: botón de acceso invitado; separación del perfil de cuenta; escape del texto de identidad; no subir datos solo por iniciar sesión; sincronización explícita sin foto; restauración del invitado al salir; recuperación del perfil propio; eliminación y cierre de sesión.

## Pendiente de verificar en dispositivo
Inicio de sesión completo con cada proveedor, restauración en un segundo iPhone, cancelación de popup, denegación de GPS, carga y legibilidad reales de las calles, consumo de datos y batería, accesibilidad y funcionamiento durante conexión inestable. No se pudo realizar una inspección visual independiente de las capturas de QA desde esta sesión.

## Límites
No es una entrega para App Store o Google Play. No ofrece tráfico vivo, tarifas de casetas, mapas descargados, giro a giro en vivo o seguimiento familiar. Los alias conservados son personales. La síntesis usa voces del dispositivo. El borrado del perfil remoto elimina los datos de OLLIN, no la identidad global del servicio de acceso.
