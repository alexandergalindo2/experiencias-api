# 🏃 Primeros Pasos - Comienza Aquí

## ⏱️ 5 Minutos para Tener Todo Funcionando

### Paso 1: Verifica Node.js (30 segundos)
```powershell
# PowerShell (Windows) o Terminal (Mac/Linux)
node -v
npm -v
```
✅ Debe mostrar versiones (v16+ y npm 7+)

---

### Paso 2: Instala Dependencias del Frontend (2 minutos)
```powershell
# Desde la carpeta ExperienciasApi
cd frontend
npm install
cd ..
```

💡 **Tip**: Espera a que termine. Mientras tanto, abre otra terminal.

---

### Paso 3: Inicia la API (En terminal nueva)
```powershell
# Desde ExperienciasApi
npm run dev
```

✅ Verás: `Server running on http://localhost:4000`

---

### Paso 4: Inicia el Frontend (En otra terminal nueva)
```powershell
# Desde ExperienciasApi
cd frontend
npm run dev
```

✅ Verás: `Local: http://localhost:3000`

---

### Paso 5: Abre tu navegador
```
http://localhost:3000
```

🎉 **¡Listo! Tu aplicación está funcionando**

---

## 🎯 Ahora Prueba Cada Feature

### 1️⃣ Página de Inicio
- Haz click en **"Inicio"** en la barra de navegación
- Deberías ver tus experiencias profesionales (si las tenías en la BD)

### 2️⃣ Panel Administrativo  
- Haz click en **"Panel Administrativo"**
- Click en **"+ Nueva Experiencia"**

### 3️⃣ Crear una Experiencia
```
Completa el formulario:
├─ Cargo: "Desarrollador Senior"
├─ Empresa: "Mi Empresa"
├─ Ubicación: "Bogotá"
├─ Descripción: "Trabajé en proyectos interesantes"
├─ Fecha Inicio: Elige una fecha
├─ Marcas "Actualmente trabajo aquí"
└─ Click "Crear"

✅ La experiencia aparece en la lista inmediatamente
```

### 4️⃣ Editar una Experiencia
```
Click en "✏️ Editar" en cualquier tarjeta
Modifica lo que quieras
Click "Actualizar"
✅ Los cambios se guardan al instante
```

### 5️⃣ Eliminar una Experiencia
```
Click en "🗑️ Eliminar"
Confirma la eliminación
✅ La experiencia desaparece
```

---

## 🎨 Entendiendo la Interfaz

```
┌─────────────────────────────────────────┐
│  Mi Hoja de Vida  |  [Inicio] [Admin]   │ ← Navegación
├─────────────────────────────────────────┤
│                                          │
│  [Hero Section con Título y Descripción]│
│                                          │
│  ┌─────────────────────────────────────┐│
│  │ Cargo: Desarrollador                ││ ← Tarjeta de Experiencia
│  │ Empresa: Tech Solutions              ││
│  │ 📅 15 ene 2022 - Actualidad         ││
│  │ 📍 Bogotá, Colombia                  ││
│  │ Descripción de lo que hice...        ││
│  │ [✏️ Editar] [🗑️ Eliminar]           ││ ← En panel admin
│  └─────────────────────────────────────┘│
│                                          │
│  (más tarjetas...)                       │
│                                          │
└─────────────────────────────────────────┘
        ↓ Footer con Copyright
```

---

## 🆘 Algo no funciona?

### ❌ Veo error "Cannot connect to server"
```
Verificar que:
✓ API esté corriendo (terminal 1)
✓ Frontend esté corriendo (terminal 2)
✓ MongoDB esté iniciado (si usas local)
```

### ❌ Veo error CORS
```
✓ La API debe tener CORS habilitado ✅ (ya está)
✓ Frontend debe apuntar a http://localhost:4000 ✅ (configurado)
```

### ❌ No aparecen las experiencias
```
✓ Verifica que la API esté corriendo
✓ Intenta crear una nueva desde el panel admin
✓ Si aún no aparecen, abre la consola (F12) para ver errores
```

### ❌ El formulario no funciona
```
✓ Completa todos los campos requeridos (con asterisco *)
✓ Verifica que las fechas sean válidas
✓ Si hay error, verás un mensaje rojo debajo del campo
```

---

## 📊 Confirmación de Éxito

Cuando todo está funcionando, verás:

```
✅ Navegación funciona (cambia entre Inicio y Admin)
✅ Puedes ver experiencias en la página de inicio
✅ Panel admin muestra botones [Editar] y [Eliminar]
✅ Puedes crear una nueva experiencia
✅ Formulario valida (campos requeridos)
✅ Cambios se guardan inmediatamente
✅ No hay errores en la consola (F12)
✅ URLs correctas:
   - Frontend: http://localhost:3000
   - API: http://localhost:4000
```

---

## 🎓 Después de Verificar que Funciona

Lee estos archivos en este orden:

1. **RESUMEN.md** - Entender qué se hizo
2. **ARQUITECTURA.md** - Cómo está estructurado
3. **SETUP-GUIA.md** - Configuración detallada
4. **frontend/README.md** - Documentación del frontend
5. **CHECKLIST.md** - Lista de verificación

---

## 💻 Atajos Útiles

### Abre las Developer Tools
```
Windows/Linux: F12 o Ctrl+Shift+I
Mac: Cmd+Option+I
```

### Ir a la Consola
```
En Developer Tools → Tab "Console"
Aquí ves errores y logs
```

### Limpiar Cache del Navegador
```
En Frontend: Ctrl+Shift+Delete
O: Ctrl+F5 (Hard Refresh)
```

### Matar un Puerto (si está en uso)
```powershell
# Windows - Ver qué usa el puerto
netstat -ano | findstr :3000

# Matar el proceso
taskkill /PID 12345 /F

# En Frontend (alternativa)
# Cambiar puerto en vite.config.js
server: { port: 3001 }
```

---

## 🚀 Próximos Pasos Opcionales

### Si quieres mejorar la aplicación:

**Agregar funcionalidad:**
- [ ] Búsqueda de experiencias
- [ ] Filtrar por empresa
- [ ] Descargar CV como PDF
- [ ] Importar experiencias

**Mejorar la seguridad:**
- [ ] Agregar login/registro
- [ ] Solo admin puede ver panel
- [ ] Tokens JWT en la API

**Mejorar la apariencia:**
- [ ] Dark mode
- [ ] Más animaciones
- [ ] Cambiar colores
- [ ] Agregar fotos

**Desplegar:**
- [ ] Subir a Vercel o Netlify (frontend)
- [ ] Subir a Heroku o Railway (API)
- [ ] Usar MongoDB Atlas

---

## ✨ Guía Rápida de Archivos

| Archivo | Propósito | Cuándo Usarlo |
|---------|-----------|--------|
| **SETUP-GUIA.md** | Instalación | Primera vez |
| **ARQUITECTURA.md** | Entender estructura | Quiero aprender |
| **frontend/README.md** | Documentación React | Modificar frontend |
| **start-all.bat/.sh** | Iniciar todo | Desarrollo |
| **frontend/.env** | Variables de entorno | Cambiar API URL |

---

## 🎯 Objetivo Alcanzado

```
┌────────────────────────────────────────────┐
│  ✅ FRONTEND REACT FUNCIONANDO             │
│  ✅ API INTEGRADA                          │
│  ✅ CRUD COMPLETO                          │
│  ✅ RESPONSIVE DESIGN                      │
│  ✅ VALIDACIONES                           │
│  ✅ DOCUMENTACIÓN COMPLETA                 │
└────────────────────────────────────────────┘

Tu hoja de vida ahora es una aplicación web moderna,
profesional y completamente funcional.
```

---

## 📞 Contacto y Soporte

Si algo no funciona:
1. Revisa la consola (F12)
2. Busca el error en SETUP-GUIA.md
3. Verifica que ambos servidores estén corriendo
4. Intenta reiniciar todo

---

**¡Bienvenido a tu nueva hoja de vida en React!** 🎉

Ejecuta estos comandos ahora mismo:
```powershell
cd frontend
npm install
cd ..
npm run dev
# En otra terminal:
cd frontend && npm run dev
```

Y accede a: **http://localhost:3000**

---

*Última actualización: 22 de mayo de 2026*
