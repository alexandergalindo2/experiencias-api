const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const experienciaRoutes = require('./routes/experienciaRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({
  origin: 'https://frontend-28grog45p-alexandergalindo2s-projects.vercel.app',
  credentials: true
}));
app.use(express.json());
app.use('/api/experiencias', experienciaRoutes);

// Endpoint para servir datos del CV desde data/cv.json
app.get('/api/cv', (req, res) => {
  try {
    const file = path.join(__dirname, 'data', 'cv.json');
    if (!fs.existsSync(file)) {
      return res.status(404).json({ message: 'CV no encontrado' });
    }
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error al leer CV', error: error.message });
  }
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Experiencias Profesionales API',
      version: '1.0.0',
      description: 'CRUD de experiencias profesionales para hoja de vida'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['./routes/*.js'],
  customCss: `
    body {
      background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
    }
    .swagger-ui {
      background: rgba(255, 255, 255, 0.98);
      border-radius: 20px;
      margin: 30px auto;
      max-width: 1300px;
      box-shadow: 0 15px 35px rgba(15, 12, 41, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .swagger-ui .topbar {
      display: none;
    }
    .swagger-ui .info .title {
      color: #302b63;
      font-size: 2.8em;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
    }
    .swagger-ui .info .description {
      color: #666;
      font-size: 1.1em;
      line-height: 1.6;
    }
    .swagger-ui .opblock-summary-method {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      font-weight: bold;
      border-radius: 5px 0 0 5px;
    }
    .swagger-ui .btn {
      background: linear-gradient(45deg, #ff6b6b, #ffa500);
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .swagger-ui .btn:hover {
      background: linear-gradient(45deg, #ffa500, #ff6b6b);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
    .swagger-ui .opblock {
      border-radius: 10px;
      margin-bottom: 15px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    .swagger-ui .opblock-summary {
      background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 10px 10px 0 0;
    }
    .swagger-ui .tab li a {
      color: #302b63;
      font-weight: 500;
    }
    .swagger-ui .tab li a:hover {
      color: #667eea;
    }
    .swagger-ui .response-col_status {
      font-weight: bold;
    }
    .swagger-ui .response-col_status[data-status="201"] {
      color: #28a745;
    }
    .swagger-ui .response-col_status[data-status="200"] {
      color: #007bff;
    }
    .swagger-ui .response-col_status[data-status="400"] {
      color: #dc3545;
    }
    .swagger-ui .response-col_status[data-status="404"] {
      color: #fd7e14;
    }
    .swagger-ui .parameter__name {
      font-weight: 600;
      color: #302b63;
    }
    .swagger-ui .model-title {
      color: #667eea;
      font-weight: bold;
    }
  `
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Hoja de Vida - Alexander Galindo</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--accent:#6ee7b7;--muted:#9aa4b2;--glass: rgba(255,255,255,0.04);--shadow: 0 8px 30px rgba(2,6,23,0.7);font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#071021 0%, #0f1724 100%);color:#e6eef6}
    .container{max-width:1100px;margin:40px auto;padding:28px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:16px;padding:28px;box-shadow:var(--shadow);border:1px solid rgba(255,255,255,0.03)}
    header{display:flex;align-items:center;gap:20px}
    .avatar{width:110px;height:110px;border-radius:16px;background:linear-gradient(135deg,var(--accent),#60a5fa);flex:0 0 110px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#07203a;font-size:28px}
    h1{margin:0;font-size:28px}
    .meta{color:var(--muted);margin-top:6px}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:24px;margin-top:22px}
    .section{margin-bottom:20px}
    .section h2{margin:0 0 12px 0;font-size:16px;color:var(--accent)}
    .profile p{color:var(--muted);line-height:1.5}
    .experience .item{background:var(--glass);padding:14px;border-radius:10px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.02)}
    .item h3{margin:0;font-size:15px}
    .item .meta{font-size:13px}
    .education .item{padding:12px;border-radius:8px;background:transparent;border-left:3px solid rgba(255,255,255,0.03);margin-bottom:10px}
    .skills{display:flex;flex-wrap:wrap;gap:8px}
    .skill{background:rgba(255,255,255,0.03);padding:8px 10px;border-radius:999px;color:var(--muted);font-size:13px}
    @media (max-width:900px){.grid{grid-template-columns:1fr;}.avatar{width:86px;height:86px}}
    .contact{display:flex;gap:12px;flex-wrap:wrap}
    .btn{background:transparent;border:1px solid rgba(255,255,255,0.04);padding:8px 12px;border-radius:8px;color:var(--muted);font-size:13px}
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <header>
        <div class="avatar">AG</div>
        <div>
          <h1>Alexander Galindo</h1>
          <div class="meta">Desarrollador Fullstack · Arquitecto de Software · Open to remote</div>
          <div class="contact" style="margin-top:10px">
            <div class="btn">alexander@example.com</div>
            <div class="btn">Bogotá, Colombia</div>
          </div>
        </div>
      </header>

      <div class="grid">
        <main>
          <section class="section profile" id="perfil">
            <h2>Perfil</h2>
            <p>Ingeniero de software con más de 5 años diseñando y desarrollando aplicaciones web escalables. Experiencia en Node.js, Express, React y arquitecturas basadas en microservicios. Apasionado por la calidad de código, buenas prácticas y crear experiencias de usuario confiables.</p>
          </section>

          <section class="section experience" id="experiencia">
            <h2>Experiencia Laboral</h2>
            <div class="item">
              <h3>Desarrollador Fullstack — Tech Solutions S.A.</h3>
              <div class="meta">Ene 2022 — Mar 2024 · Bogotá, Colombia</div>
              <p style="color:var(--muted);margin-top:8px">Lideré el desarrollo de la plataforma principal usando React, Node.js y MongoDB. Implementé APIs REST, pruebas automáticas y despliegues continuos que mejoraron la confiabilidad en producción.</p>
            </div>

            <div class="item">
              <h3>Ingeniero de Software — Innovate Corp</h3>
              <div class="meta">Jun 2020 — Dic 2021 · Remoto</div>
              <p style="color:var(--muted);margin-top:8px">Diseño y construcción de microservicios, integración con terceros y optimización de rendimiento en servicios backend.</p>
            </div>
          </section>

          <section class="section education" id="educacion">
            <h2>Educación</h2>
            <div class="item">
              <strong>Ingeniería de Sistemas</strong>
              <div class="meta">Universidad Nacional · 2015 — 2020</div>
            </div>
            <div class="item">
              <strong>Cursos:</strong>
              <div class="meta">Arquitectura de software, DevOps básico, Diseño de APIs</div>
            </div>
          </section>

          <section class="section skills" id="habilidades">
            <h2>Habilidades</h2>
            <div class="skills">
              <div class="skill">Node.js</div>
              <div class="skill">Express</div>
              <div class="skill">React</div>
              <div class="skill">MongoDB</div>
              <div class="skill">TypeScript</div>
              <div class="skill">Docker</div>
              <div class="skill">Testing</div>
              <div class="skill">CI/CD</div>
            </div>
          </section>
        </main>

        <aside>
          <section class="section" style="padding:12px;background:rgba(255,255,255,0.02);border-radius:12px">
            <h2>Contacto</h2>
            <div style="color:var(--muted);margin-top:8px">alexander@example.com<br>https://linkedin.com/in/alexandergalindo</div>
          </section>

          <section class="section" style="margin-top:14px;padding:12px;background:rgba(255,255,255,0.02);border-radius:12px">
            <h2>Resumen</h2>
            <div style="color:var(--muted);margin-top:8px">Ingeniero con foco en soluciones backend, liderazgo técnico y entrega de proyectos a producción con calidad.</div>
          </section>
        </aside>
      </div>
    </div>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
});

async function startServer() {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/experienciasdb';

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
  }
}

startServer();
