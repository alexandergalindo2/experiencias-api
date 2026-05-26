# Experiencias Profesionales API

API REST para administrar experiencias profesionales de una hoja de vida.

## Tecnologías

- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger UI

## Instalación

1. Abre PowerShell con permisos y ejecuta (si la política de ejecución bloquea npm, configura la política temporalmente):

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

2. Copia `.env.example` a `.env` y ajusta la conexión a MongoDB.

3. Inicia el servidor:

```powershell
npm run dev
```

4. Abre la documentación Swagger en:

```
http://localhost:4000/api-docs
```

## Endpoints principales

- `GET /api/experiencias`
- `GET /api/experiencias/:id`
- `POST /api/experiencias`
- `PUT /api/experiencias/:id`
- `DELETE /api/experiencias/:id`

## Ejemplo de documento JSON para crear experiencia

```json
{
  "cargo": "Desarrollador Fullstack",
  "empresa": "Mi Empresa",
  "descripcion": "Desarrollo de aplicaciones web con Node.js y MongoDB.",
  "fechaInicio": "2022-01",
  "fechaFin": "2024-04",
  "actualmente": false,
  "ubicacion": "Bogotá, Colombia"
}
```

## Prueba con Postman o Swagger

- Postman: importa una colección o crea solicitudes manuales usando los endpoints anteriores.
- Swagger: abre `http://localhost:4000/api-docs` y prueba los endpoints directamente desde la UI.
