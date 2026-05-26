# ✅ Checklist de Inicio - Hoja de Vida React

## 🎯 Objetivo
Migrar tu sitio web de hoja de vida a React con un panel administrativo CRUD para gestionar experiencias profesionales consumiendo tu API REST.

## ✨ Lo que se ha completado

### ✅ Frontend React (Nuevo)
- [x] Proyecto React configurado con Vite
- [x] Estructura MVC (páginas, componentes, servicios)
- [x] Página de inicio (Home) - visualización pública
- [x] Panel administrativo - CRUD completo
- [x] Componentes reutilizables
- [x] Custom hooks para gestión de estado
- [x] Validación de formularios
- [x] Integración con API
- [x] Diseño responsivo (mobile, tablet, desktop)
- [x] Estilos CSS modernos y atractivos
- [x] Manejo de errores y estados de carga
- [x] Feedback visual (mensajes de éxito)

### ✅ Backend API (Existente + Mejorado)
- [x] Express server con CORS habilitado
- [x] CRUD de experiencias profesionales
- [x] MongoDB con Mongoose
- [x] Validaciones
- [x] Documentación Swagger

### ✅ Scripts y Documentación
- [x] Scripts de instalación (Windows y Unix)
- [x] Script para iniciar ambos servidores
- [x] Documentación completa (SETUP-GUIA.md)
- [x] Diagrama de arquitectura (ARQUITECTURA.md)
- [x] README para frontend
- [x] Variables de entorno configuradas

---

## 🚀 Pasos para Empezar

### Paso 1️⃣: Verificar Node.js
```bash
node --version  # Debe ser v16+
npm --version   # Debe ser v7+
```

### Paso 2️⃣: Instalar Dependencias del Frontend
```bash
# Opción A: Ejecutar script
install-frontend.bat      # Windows
# o
./install-frontend.sh     # Mac/Linux

# Opción B: Manual
cd frontend
npm install
cd ..
```

### Paso 3️⃣: Configurar Variables de Entorno
```bash
# Frontend (opcional si usas localhost)
cd frontend
cp .env.example .env
# Edita .env si necesitas cambiar la URL de la API
cd ..
```

### Paso 4️⃣: Iniciar Servidores

#### Opción A: Script automático (Recomendado)
```bash
# Windows
start-all.bat

# Mac/Linux
./start-all.sh
```

#### Opción B: Dos terminales separadas

**Terminal 1 - API:**
```bash
npm run dev
# O
node app.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Paso 5️⃣: Acceder a la Aplicación
- **Frontend**: http://localhost:3000
- **API**: http://localhost:4000
- **Swagger API Docs**: http://localhost:4000/api-docs

---

## 🎮 Cómo Usar la Aplicación

### 📄 Página de Inicio (Home)
1. Ve a "Inicio" en la navegación
2. Visualiza todas tus experiencias profesionales
3. Información presentada de forma profesional
4. Perfecta para compartir tu CV

### 🔧 Panel Administrativo
1. Haz clic en "Panel Administrativo"
2. Verás todas tus experiencias

#### Crear Experiencia
```
1. Click en "+ Nueva Experiencia"
2. Completa el formulario:
   - Cargo (requerido)
   - Empresa (requerido)
   - Descripción (requerido)
   - Fecha Inicio (requerido)
   - Fecha Fin (opcional si está en cargo actual)
   - Ubicación (opcional)
   - Marcar "Actualmente trabajo aquí"
3. Click en "Crear"
4. ✅ Experiencia agregada
```

#### Editar Experiencia
```
1. Haz click en "✏️ Editar" en la tarjeta
2. Modifica los campos que necesites
3. Click en "Actualizar"
4. ✅ Cambios guardados
```

#### Eliminar Experiencia
```
1. Haz click en "🗑️ Eliminar"
2. Confirma la eliminación
3. ✅ Experiencia removida
```

---

## 📊 Estructura de Directorios

```
ExperienciasApi/
├── frontend/                    ← Tu nuevo frontend React
│   ├── src/
│   │   ├── components/         ← Componentes reutilizables
│   │   ├── pages/              ← Páginas (Home, AdminPanel)
│   │   ├── hooks/              ← Lógica de datos (useExperiencias)
│   │   ├── services/           ← API client
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── app.js                       ← API Express
├── controllers/                 ← Lógica backend
├── models/                      ← Modelos MongoDB
├── routes/                      ← Rutas API
│
├── SETUP-GUIA.md               ← Guía de instalación
├── ARQUITECTURA.md             ← Diagrama técnico
├── CHECKLIST.md                ← Este archivo
│
├── install-frontend.bat        ← Script instalación
├── install-frontend.sh
├── start-all.bat               ← Script para iniciar todo
└── start-all.sh
```

---

## 🔍 Solucionar Problemas

### ❌ Error: "Cannot find module"
```bash
# Solución: Reinstalar dependencias
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### ❌ Puerto 3000 en uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### ❌ Puerto 4000 en uso
```bash
# Mismo procedimiento que arriba
# O cambiar puerto en app.js: const PORT = 5000
```

### ❌ CORS Error
```
Verificar:
✓ La API tiene app.use(cors())
✓ VITE_API_URL en .env es correcta
✓ Ambos servidores están corriendo
```

### ❌ MongoDB Connection Error
```
Verificar:
✓ MongoDB está ejecutándose
✓ MONGO_URI en .env es correcto
✓ Credenciales de MongoDB son válidas
```

---

## 📚 Recursos y Documentación

### Archivos Importantes
- **SETUP-GUIA.md** - Instalación y configuración
- **ARQUITECTURA.md** - Diagrama técnico
- **frontend/README.md** - Documentación del frontend
- **.env.example** - Variables de entorno

### Tecnologías Usadas
- **React 18.2** - UI Framework
- **Vite 5.0** - Build tool
- **Axios** - HTTP Client
- **Express 4.18** - Backend
- **MongoDB** - Base de datos
- **Mongoose** - ODM

---

## 🎯 Próximos Pasos (Opcionales)

### Mejorar el Frontend
- [ ] Agregar autenticación
- [ ] Agregar búsqueda y filtrado
- [ ] Agregar paginación
- [ ] Agregar dark mode
- [ ] Agregar animaciones más sofisticadas

### Mejorar el Backend
- [ ] Agregar autenticación JWT
- [ ] Agregar validaciones más estrictas
- [ ] Agregar logs
- [ ] Agregar testing

### Deployment
- [ ] Desplegar API (Heroku, Railway, etc)
- [ ] Desplegar Frontend (Vercel, Netlify, etc)
- [ ] Configurar MongoDB Atlas
- [ ] Configurar dominio personalizado

---

## 📞 Preguntas Frecuentes

### ¿Puedo cambiar los colores?
Sí, edita los archivos CSS en `src/` o en `App.css`

### ¿Cómo agrego más campos al formulario?
1. Actualiza el schema en `models/Experiencia.js`
2. Actualiza `ExperienciaForm.jsx`
3. Actualiza la validación

### ¿Puedo usar una base de datos diferente?
Sí, actualiza la conexión en `app.js` y el modelo en `models/`

### ¿Cómo hago login/autenticación?
Requiere cambios en API y Frontend. Documentación disponible bajo demanda.

---

## ✅ Verificación Final

Ejecuta esta lista antes de considerar tu proyecto "listo":

- [ ] API ejecutándose en puerto 4000
- [ ] Frontend ejecutándose en puerto 3000
- [ ] Puedo ver la página de inicio
- [ ] Panel administrativo está accesible
- [ ] Puedo crear una experiencia
- [ ] Puedo editar una experiencia
- [ ] Puedo eliminar una experiencia
- [ ] Puedo ver cambios en tiempo real
- [ ] Formulario tiene validaciones
- [ ] Diseño se ve bien en móvil

---

## 🎉 ¡Listo!

Tu hoja de vida en React está completamente funcional y lista para usar. 

**¡Felicidades por tu nuevo sitio profesional!** 🚀

---

**Última actualización**: 22 de mayo de 2026
**Versión**: 1.0.0
**Status**: ✅ Producción Ready
