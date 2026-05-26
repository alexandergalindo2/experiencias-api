# 📊 Arquitectura del Proyecto - Hoja de Vida Full Stack

## 🏗️ Estructura General

```
ARQUITECTURA COMPLETA
═══════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────┐
│                    NAVEGADOR DEL USUARIO                 │
│              (http://localhost:3000)                      │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│               FRONTEND - REACT + VITE                    │
│                  (PUERTO 3000)                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │  App.jsx (Enrutador principal)                  │   │
│  │  - Navegación entre Home y AdminPanel           │   │
│  └──────────────────┬──────────────────────────────┘   │
│                     │                                    │
│        ┌────────────┴────────────┐                      │
│        ▼                         ▼                      │
│  ┌──────────────┐         ┌──────────────────┐        │
│  │    Home      │         │  AdminPanel      │        │
│  │  (Pública)   │         │   (Privada)      │        │
│  └──────────────┘         └──────────────────┘        │
│        │                          │                     │
│        └────────────┬─────────────┘                     │
│                     ▼                                    │
│        ┌────────────────────────┐                      │
│        │  ExperienciasList      │                      │
│        │  (Mostrar tarjetas)    │                      │
│        └────────────────────────┘                      │
│                     │                                    │
│        ┌────────────┴────────────┐                     │
│        ▼                         ▼                      │
│  ┌──────────────┐         ┌──────────────────┐        │
│  │ExperienciaCard│         │ExperienciaForm   │        │
│  │(Visualizar)   │         │(Crear/Editar)    │        │
│  └──────────────┘         └──────────────────┘        │
│                                                         │
│  ┌──────────────────────────────────────────────────┐ │
│  │          HOOKS & SERVICES LAYER                  │ │
│  │  - useExperiencias()      (Custom Hook)          │ │
│  │  - experienciasAPI        (Axios Client)         │ │
│  └──────────────────────────────────────────────────┘ │
│                     │                                   │
│                     ▼ (HTTP Requests)                  │
└─────────────────────┬───────────────────────────────────┘
                      │
                      │ CORS Enabled
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│              BACKEND - EXPRESS + MONGOOSE                │
│                  (PUERTO 4000)                           │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Routes:                                                 │
│  - GET    /api/experiencias                             │
│  - GET    /api/experiencias/:id                         │
│  - POST   /api/experiencias                             │
│  - PUT    /api/experiencias/:id                         │
│  - DELETE /api/experiencias/:id                         │
│                                                           │
│              ┌───────────────────────┐                  │
│              │  experienciaController │                  │
│              │  (Lógica de negocios)  │                  │
│              └───────────────────────┘                  │
│                        │                                 │
│                        ▼                                 │
│              ┌───────────────────────┐                  │
│              │ Experiencia Model     │                  │
│              │ (Schema Mongoose)     │                  │
│              └───────────────────────┘                  │
│                        │                                 │
│                        ▼                                 │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
          ┌───────────────────────┐
          │   MongoDB Database    │
          │  (Almacenamiento)     │
          └───────────────────────┘
```

## 🔄 Flujo de Datos

### 1. Listar Experiencias (GET)
```
Frontend → API /api/experiencias → MongoDB
  ↓           ↓
[useExperiencias] → [getAllExperiencias] → [find()]
  ↓           ↓
[setExperiencias] → [ExperienciasList] → [ExperienciaCard]
```

### 2. Crear Experiencia (POST)
```
Formulario ↓
[ExperienciaForm] → [createExperiencia] → POST /api/experiencias
  ↓                    ↓
[Validación]        [MongoDB save()]
  ↓                    ↓
[setExperiencias]  [Actualizar lista]
```

### 3. Actualizar Experiencia (PUT)
```
[Editar Click] → [Cargar en formulario]
  ↓              ↓
[ExperienciaForm] → PUT /api/experiencias/:id
  ↓                 ↓
[findByIdAndUpdate] → [setExperiencias]
```

### 4. Eliminar Experiencia (DELETE)
```
[Eliminar Click] ↓
[Confirmación] → DELETE /api/experiencias/:id
  ↓              ↓
[findByIdAndDelete] → [Actualizar lista]
```

## 📁 Estructura de Carpetas Detallada

```
ExperienciasApi/
│
├── frontend/                    ← NUEVO FRONTEND REACT
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExperienciaCard.jsx      (Tarjeta individual)
│   │   │   ├── ExperienciaCard.css
│   │   │   ├── ExperienciaForm.jsx      (Formulario CRUD)
│   │   │   ├── ExperienciaForm.css
│   │   │   ├── ExperienciasList.jsx     (Listado)
│   │   │   └── ExperienciasList.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx                 (Página pública)
│   │   │   ├── Home.css
│   │   │   ├── AdminPanel.jsx           (Panel administrativo)
│   │   │   └── AdminPanel.css
│   │   │
│   │   ├── hooks/
│   │   │   └── useExperiencias.js       (Lógica de datos)
│   │   │
│   │   ├── services/
│   │   │   └── api.js                   (Cliente HTTP)
│   │   │
│   │   ├── App.jsx                      (Componente raíz)
│   │   ├── App.css
│   │   ├── main.jsx                     (Punto de entrada)
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
│
├── controllers/
│   └── experienciaController.js          ← API EXISTENTE
│
├── models/
│   └── Experiencia.js
│
├── routes/
│   └── experienciaRoutes.js
│
├── app.js                                (Servidor Express)
├── package.json                          (Actualizado)
│
├── SETUP-GUIA.md                         (Instrucciones completas)
├── README.md                             (Documentación original)
├── start-all.bat                         (Script Windows)
├── start-all.sh                          (Script Unix)
├── install-frontend.bat                  (Script instalación Windows)
└── install-frontend.sh                   (Script instalación Unix)
```

## 🔐 Seguridad e Integración

### CORS Configuration
```javascript
// En API (app.js)
app.use(cors());  // Permite requests desde frontend
```

### Variables de Entorno
```env
# Backend
PORT=4000
MONGO_URI=mongodb://...

# Frontend (.env)
VITE_API_URL=http://localhost:4000/api
```

## 📊 Flujo de Componentes React

```
┌─ App.jsx
│  │
│  ├─ Navbar (Navegación)
│  │  └─ Links: Home | Admin
│  │
│  ├─ Router (Conditionally Renders)
│  │  │
│  │  ├─ Home Page
│  │  │  └─ ExperienciasList (isAdmin=false)
│  │  │     └─ ExperienciaCard (readonly)
│  │  │
│  │  └─ AdminPanel Page
│  │     ├─ ExperienciaForm (crear/editar)
│  │     └─ ExperienciasList (isAdmin=true)
│  │        ├─ ExperienciaCard (+ edit/delete buttons)
│  │        └─ useExperiencias Hook
│  │           └─ experienciasAPI Service
│  │
│  └─ Footer
```

## 🎯 Endpoints de la API

```
METHOD   ENDPOINT                 DESCRIPCIÓN
────────────────────────────────────────────────
GET      /api/experiencias        Obtener todas las experiencias
GET      /api/experiencias/:id    Obtener una experiencia
POST     /api/experiencias        Crear experiencia
PUT      /api/experiencias/:id    Actualizar experiencia
DELETE   /api/experiencias/:id    Eliminar experiencia
```

## 💾 Estructura de Datos (Documento MongoDB)

```javascript
{
  _id: ObjectId,
  cargo: String,                  // "Desarrollador Fullstack"
  empresa: String,                // "Tech Solutions S.A."
  descripcion: String,            // Texto descriptivo
  fechaInicio: Date,              // "2022-01-15"
  fechaFin: Date,                 // "2024-03-30" (nullable)
  actualmente: Boolean,           // true/false
  ubicacion: String,              // "Bogotá, Colombia" (opcional)
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Flujo de Deployment

```
LOCAL DEVELOPMENT
├── API:      npm run dev (puerto 4000)
├── Frontend: npm run dev (puerto 3000)
└── MongoDB:  Local o Atlas

PRODUCTION
├── API:      Node.js Server (Heroku, AWS, etc)
├── Frontend: Static Hosting (Vercel, Netlify, etc)
└── MongoDB:  MongoDB Atlas
```

---

**Arquitectura moderna, escalable y profesional para tu hoja de vida** 🎉
