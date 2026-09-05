# OLLIN Maps · Independiente 02

**Se mueve contigo.**

Prototipo web autónomo, preparado para un repositorio propio y para publicar en Vercel. También incluye un flujo manual de GitHub Pages para demostraciones no comerciales.

## Empezar

Requiere Node.js 22 o superior.

```sh
npm run build
```

La carpeta `dist/` es el sitio listo para alojamiento estático.

## Lo que contiene

- Identidad OLLIN blanca sobre negro, acentos verdes, rojos, azules y amarillos.
- Motor cartográfico 2D original, una sola instancia persistente, sin iframe ni alternancia entre dos motores.
- Modo nocturno aplicado a la cartografía.
- Búsqueda de lugares y selección de destino.
- Cafeterías, restaurantes, parques, museos, gasolineras y servicios de salud.
- Ruta en auto y alternativas cuando el proveedor las devuelve.
- Instrucciones derivadas de maniobras reales con nombre del usuario opcional.
- Vista OLLIN Drive separada con distancia, tiempo y llegada estimada.
- Perfil, foto local, Casa, Trabajo y Guardados.
- Contexto cercano obtenido de Wikipedia.
- Colecciones personales: Centro de Chalco, Lomas de Chalco, América mexicana e Isla cubana mexicana.
- Manifest e icono PWA propio.

## Publicar

Este repositorio es la fuente oficial de OLLIN. Las actualizaciones futuras deben mantenerse aquí y publicarse sobre el mismo proyecto de Vercel.

Los servicios públicos incluidos son de demostración y capacidad limitada; para escalar se deberán conectar proveedores comerciales o infraestructura propia para mapas, tráfico, peajes, voces neuronales y búsqueda.
