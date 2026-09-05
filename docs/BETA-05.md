# OLLIN beta 05

Actualización de pruebas web. Conserva el mapa Leaflet de Visual 04.1, sin recrearlo al abrir pantallas. Se añade una capa visual verde/cian/roja; el dorado se reserva para puntos turísticos. No se aplican tintes amarillos a la cartografía.

## Alcance
- Perfil de invitado local y perfil de cuenta separados. Acceso OAuth gestionado por AppDeploy; no hay contraseñas almacenadas por OLLIN.
- GET/PUT/DELETE /api/me usan requireAuth y una tabla limitada por userId verificado. Sin acceso por identificadores enviados desde el cliente.
- Guardado y recuperación de nombre, Casa, Trabajo y favoritos mediante acción explícita. No se sincronizan GPS ni fotos.
- Eliminar mis datos borra los registros de perfil de OLLIN y cierra sesión; no elimina la identidad de AppDeploy ni la cuenta del proveedor.
- Reportes de prueba descargables; no se envían automáticamente.
- Vista de ruta a pantalla completa, expresamente de planificación y no de navegación giro a giro.

## Antes de tiendas
No es una publicación App Store o Google Play. Completar identidad legal del responsable, términos y aviso de privacidad propios; eliminación de identidad y revocación de proveedor; empaquetado y firma nativos; prueba con dispositivos físicos y accesibilidad; proveedores con capacidad y licencias comerciales; navegación real, tráfico, tarifas de casetas y ubicación familiar segura.

Documentación de referencia: https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/ ; https://developer.apple.com/app-store/review/guidelines/ ; https://developer.apple.com/support/offering-account-deletion-in-your-app/

No se promete equivalencia de funciones con Google Maps. Las voces regionales actuales cambian vocabulario y usan síntesis del dispositivo, no locuciones humanas licenciadas.
