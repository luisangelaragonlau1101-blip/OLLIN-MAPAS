# Integración beta 05

En AppDeploy, conservar el index y mapa Visual04.1. Incluir site/beta.css después de visual.css y site/beta-hooks.js después de visual.js. Añadir src/account.ts como entrada type=module compilada por Vite. Copiar backend/index.ts y appdeploy.auth-login.json en sus posiciones raíz de plataforma. El SDK se inyecta por AppDeploy: no agregar paquetes @appdeploy a package.json. El script de sincronización debe descargar archivos por commit inmutable y verificar hashes.

La versión estática del directorio site sin este adaptador no implementa OAuth ni almacenamiento remoto. Nunca anunciar cuentas activas en un alojamiento sin backend/configuración correspondientes.
