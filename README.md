# ERP Aeroportuario por subsistemas y dominios

Estructura: `src/subsistemas/{subsistema}/dominios/{dominio}/{model,controller,routes,service,repository}.js`.

La autorización se realiza únicamente por roles en las rutas: `ADMIN_GENERAL`, `ADMIN_AEROPUERTO`, `EMPLEADO` y `PILOTO`. Se eliminó el catálogo de permisos y la relación rol-permiso.

## Ejecutar
1. Copiar `.env.example` a `.env`.
2. `npm install`
3. `npm run db:generate`
4. `npm run db:migrate`
5. `npm run db:seed`
6. `npm run dev`

Los HTTP están en la carpeta `http`, uno por subsistema.
