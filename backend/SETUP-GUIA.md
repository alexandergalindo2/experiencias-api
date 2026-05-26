# 🚀 Migración de Hoja de Vida a React

¡Felicidades! He migrado tu sitio web de hoja de vida a **React con Vite**, incluido un panel administrativo completo para gestionar experiencias profesionales.

## 📋 Qué se ha creado

### Frontend React (`frontend/`)
- ✅ Aplicación React completa con Vite
- ✅ Interfaz moderna y responsiva
- ✅ Página pública para visualizar experiencias
- ✅ Panel administrativo con CRUD completo
- ✅ Estilos atractivos con CSS3
- ✅ Validación de formularios
- ✅ Consumo de tu API

## 🛠️ Instalación y Configuración

### Paso 1: Instalar dependencias del frontend

#### En Windows (PowerShell):
```powershell
cd frontend
npm install
```

#### En Mac/Linux:
```bash
cd frontend
npm install
```

O simplemente ejecuta el script:
- **Windows**: `install-frontend.bat`
- **Mac/Linux**: `install-frontend.sh`

### Paso 2: Asegurar que la API está corriendo

La API debe estar ejecutándose en el puerto 4000:

```bash
# En otra terminal, desde la carpeta raíz
npm run dev
```

O:
```bash
node app.js
```

### Paso 3: Iniciar el frontend

```bash
cd frontend
npm run dev
```

El navegador abrirá automáticamente en: **http://localhost:3000**

## 🎯 Características Principales

### 📄 Página de Inicio (Pública)
- Muestra todas las experiencias profesionales
- Diseño limpio y profesional
- Información bien estructurada
- Perfecta para presentar tu CV

### 🔧 Panel Administrativo
- **Crear**: Agrega nuevas experiencias
- **Leer**: Visualiza todas las experiencias
- **Actualizar**: Edita experiencias existentes
- **Eliminar**: Elimina experiencias con confirmación
- **Validaciones**: Validación de formularios en tiempo real

### 📱 Diseño Responsivo
- Funciona en desktop, tablet y móvil
- Interfaz adaptativa y moderna
- Colores atractivos (gradiente azul-morado)

## 📊 Estructura del Proyecto

```
ExperienciasApi/
├── app.js                          # API Express
├── package.json                    # Dependencias API
├── controllers/
├── models/
├── routes/
└── frontend/                       # NUEVO - Frontend React
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── components/             # Componentes reutilizables
        │   ├── ExperienciaCard.jsx
        │   ├── ExperienciaForm.jsx
        │   └── ExperienciasList.jsx
        ├── pages/                  # Páginas principales
        │   ├── Home.jsx
        │   └── AdminPanel.jsx
        ├── hooks/                  # Custom hooks
        │   └── useExperiencias.js
        ├── services/               # Servicios de API
        │   └── api.js
        └── App.jsx
```

## 🔌 Integración con la API

El frontend consume tu API automáticamente:

- **Obtener experiencias**: `GET /api/experiencias`
- **Crear experiencia**: `POST /api/experiencias`
- **Actualizar**: `PUT /api/experiencias/:id`
- **Eliminar**: `DELETE /api/experiencias/:id`

La conexión es totalmente automática. Solo asegúrate de que ambos servidores estén ejecutándose.

## 🌐 Variables de Entorno

El archivo `.env.example` está configurado con:
```
VITE_API_URL=http://localhost:4000/api
```

Si necesitas cambiar la URL de la API, copia el archivo:
```bash
cp .env.example .env
```

Y edita `.env` con tu URL.

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

## ✨ Validaciones y Características Especiales

### Validación de Formularios
- Campos requeridos
- Fechas consistentes
- Validación de cargo y empresa

### Estados Visuales
- Loading: Spinner mientras se cargan datos
- Error: Mensajes de error claros
- Success: Confirmaciones de acciones
- Empty: Mensaje cuando no hay experiencias

### Usabilidad
- Edición en línea sin recarga
- Confirmación antes de eliminar
- Mensajes de éxito automáticos
- Scroll automático al editar

## 🚀 Deployment (Próximos Pasos)

Para desplegar en producción:

1. **Build del frontend**:
   ```bash
   npm run build
   ```

2. **Opciones de hosting**:
   - Vercel (recomendado para Vite)
   - Netlify
   - GitHub Pages
   - Tu propio servidor

3. **Variables de entorno en producción**:
   Actualiza `VITE_API_URL` con tu API en producción

## 📝 Notas Importantes

✅ La API y el frontend están completamente integrados
✅ CORS está habilitado en la API
✅ Validaciones en cliente y servidor
✅ Responsive design
✅ Manejo de errores completo
✅ Interfaz intuitiva

## 🐛 Troubleshooting

### Puerto 3000 en uso
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000
```

### CORS errors
- Verifica que la API tiene `cors()` habilitado
- Confirma que la URL de API es correcta en `.env`

### Dependencias faltantes
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Soporte

- API: http://localhost:4000
- Frontend: http://localhost:3000
- Documentación API: http://localhost:4000/api-docs (si Swagger está configurado)

---

**¡Tu hoja de vida en React está lista para usar!** 🎉

Para más información, revisa los archivos README en la carpeta `frontend/`.
