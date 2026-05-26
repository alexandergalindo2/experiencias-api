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
  `
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  let photoUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop';
  try {
    const file = path.join(__dirname, 'data', 'cv.json');
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      const cv = JSON.parse(raw);
      const customPhoto = cv.persona?.foto;
      if (customPhoto && customPhoto !== 'POR_PEGAR_URL_O_SUBIR_POR_WHATSAPP') {
        photoUrl = customPhoto;
      }
    }
  } catch (error) {
    console.error('Error leyendo la foto del CV:', error.message);
  }

  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Hoja de Vida - Alexander Galindo</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--accent:#2ea0ff;--accent-gradient: linear-gradient(135deg,#6ee7b7,#60a5fa);--muted:#9aa4b2;--glass: rgba(255,255,255,0.03);--shadow: 0 12px 40px rgba(2,6,23,0.7);--radius: 14px;font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#071021 0%, #0f1724 100%);color:#e6eef6;-webkit-font-smoothing:antialiased}
    a{color:inherit}
    .wrap{max-width:1100px;margin:32px auto;padding:22px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border:1px solid rgba(255,255,255,0.03)}
    header{display:flex;align-items:center;gap:20px}
    .avatar{width:110px;height:110px;border-radius:16px;background:var(--accent-gradient);flex:0 0 110px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:2px solid rgba(255,255,255,0.06)}
    .avatar img{width:100%;height:100%;object-fit:cover;display:block}
    h1{margin:0;font-size:28px}
    .title{color:var(--muted);margin-top:6px;font-size:14px}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:24px;margin-top:22px;align-items:start}
    .section{margin-bottom:18px}
    .section h2{margin:0 0 12px 0;font-size:14px;color:var(--accent);letter-spacing:0.6px}
    .profile p{color:var(--muted);line-height:1.6}
    .item{background:var(--glass);padding:14px;border-radius:10px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.02)}
    .item h3{margin:0;font-size:15px}
    .item .meta{font-size:13px;color:var(--muted);margin-top:6px}
    .education .item{padding:12px;border-radius:10px;background:transparent;border-left:3px solid rgba(255,255,255,0.03);margin-bottom:10px}
    .skills{display:flex;flex-wrap:wrap;gap:8px}
    .skill{background:rgba(255,255,255,0.03);padding:8px 12px;border-radius:999px;color:var(--muted);font-size:13px}
    .contact{display:flex;flex-direction:column;gap:6px;margin-top:10px}
    .contact a{color:#cfeefe;text-decoration:none;font-weight:600}
    .contact-form{display:grid;gap:12px}
    .contact-input,.contact-textarea{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;color:#f8fbff;padding:12px;font-size:14px}
    .contact-input:focus,.contact-textarea:focus{outline:none;border-color:rgba(46,160,255,0.7);box-shadow:0 0 0 3px rgba(46,160,255,0.12)}
    .contact-textarea{min-height:130px;resize:vertical}
    .contact-button{margin-top:10px;background:var(--accent);color:#08101f;border:none;padding:12px 18px;border-radius:12px;font-weight:700;cursor:pointer;transition:.2s}
    .contact-button:hover{opacity:.95}
    .form-message{margin-top:10px;color:#a9e2ff;font-size:14px}
    .meta-block{color:var(--muted);font-size:13px}
    .aside-card{padding:14px;border-radius:12px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.02)}
    @media (max-width:920px){.grid{grid-template-columns:1fr;}.avatar{width:86px;height:86px}}
    .phone{display:inline-block;background:rgba(255,255,255,0.02);padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);color:var(--muted);font-size:13px}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <header>
        <div class="avatar">
          <img src="${photoUrl}" alt="Alexander Galindo">
        </div>
        <div style="flex:1">
          <h1>Alexander Galindo</h1>
          <div class="title">Estudiante de Tecnología / Desarrollador Web</div>
          <div class="contact" style="margin-top:10px">
            <a href="mailto:galindocontrerasalexander@gmail.com">galindocontrerasalexander@gmail.com</a>
            <div class="phone">Tel: 3113602478</div>
            <div class="meta-block">Ubicación: Sincelejito, Bolívar</div>
          </div>
        </div>
      </header>

      <div class="grid" style="margin-top:22px">
        <main>
          <section class="section profile" id="perfil">
            <h2>Perfil</h2>
            <p>Soy técnico en sistemas y actualmente estudio Ingeniería de Software en la Universidad de Cartagena - UDEC. Me enfoco en desarrollo web, construcción de APIs y aplicaciones con buenas prácticas.</p>
          </section>

          <section class="section experience" id="experiencia">
            <h2>Experiencia - Desarrollador Fullstack</h2>

            <div class="item">
              <h3>Desarrollador Fullstack — Proyecto Personal / Prácticas</h3>
              <div class="meta">Trabajo con React, Node.js y MongoDB en proyectos personales y académicos.</div>
              <p style="color:var(--muted);margin-top:8px">Construcción de interfaces interactivas con React, desarrollo de APIs REST con Express y persistencia en MongoDB. Implementación de operaciones CRUD, consumo de APIs y despliegues simples.</p>
            </div>

            <div class="item">
              <h3>Proyectos Académicos</h3>
              <div class="meta">Desarrollo de aplicaciones web y prácticas de laboratorio</div>
              <p style="color:var(--muted);margin-top:8px">Participación en proyectos colaborativos, integración de servicios y mejoras de UX/UI en aplicaciones universitarias.</p>
            </div>
          </section>

          <section class="section education" id="educacion">
            <h2>Educación</h2>
            <div class="item">
              <strong>Técnico en Sistemas</strong>
              <div class="meta">Formación técnica en sistemas</div>
            </div>
            <div class="item">
              <strong>Ingeniería de Software — En curso</strong>
              <div class="meta">Universidad de Cartagena - UDEC</div>
            </div>
          </section>

          <section class="section contact-section" id="contacto">
            <h2>¡Escríbeme! 📬</h2>
            <p style="color:var(--muted);line-height:1.6">Deja tu nombre, correo y mensaje. Al enviar, se abrirá tu correo para escribirme directamente.</p>
            <div class="item">
              <form id="contactForm" class="contact-form">
                <input id="contactName" type="text" placeholder="Nombre" required class="contact-input" />
                <input id="contactEmail" type="email" placeholder="Correo Electrónico" required class="contact-input" />
                <textarea id="contactMessage" rows="5" placeholder="Mensaje" required class="contact-textarea"></textarea>
                <button type="submit" class="contact-button">Enviar Mensaje</button>
                <div id="contactResult" class="form-message"></div>
              </form>
            </div>
          </section>

          <section class="section skills" id="habilidades">
            <h2>Habilidades y Tecnologías</h2>
            <div class="skills">
              <div class="skill">React.js</div>
              <div class="skill">HTML5</div>
              <div class="skill">CSS3</div>
              <div class="skill">JavaScript (ES6+)</div>
              <div class="skill">Consumo de APIs REST</div>
              <div class="skill">Operaciones CRUD</div>
              <div class="skill">Git</div>
              <div class="skill">Resolución de problemas</div>
            </div>
          </section>
        </main>

        <aside>
          <div class="aside-card">
            <h2>Contacto</h2>
            <div style="margin-top:10px;color:var(--muted)">
              <div><strong>Email:</strong> <a href="mailto:galindocontrerasalexander@gmail.com">galindocontrerasalexander@gmail.com</a></div>
              <div style="margin-top:6px"><strong>Teléfono:</strong> <span class="meta-block">3113602478</span></div>
              <div style="margin-top:6px"><strong>Ubicación:</strong> <span class="meta-block">Sincelejito, Bolívar</span></div>
            </div>
          </div>

          <div class="aside-card" style="margin-top:14px">
            <h2>Resumen</h2>
            <div style="color:var(--muted);margin-top:8px">Desarrollador web en formación con interés en back-end y front-end, buenas prácticas y despliegues. En constante aprendizaje de tecnologías modernas y metodologías ágiles.</div>
          </div>
        </aside>
      </div>
    </div>
  </div>

  <script>
    (function(){
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('contactName').value.trim();
          const email = document.getElementById('contactEmail').value.trim();
          const message = document.getElementById('contactMessage').value.trim();
          const result = document.getElementById('contactResult');

          if (!name || !email || !message) {
            result.textContent = 'Por favor completa todos los campos.';
            return;
          }

          const subject = encodeURIComponent('Contacto desde CV - ' + name);
          const body = encodeURIComponent('Nombre: ' + name + '\nCorreo: ' + email + '\n\n' + message);
          window.location.href = 'mailto:galindocontrerasalexander@gmail.com?subject=' + subject + '&body=' + body;
        });
      }

      window.copyToClipboard = function(text){
        try {
          navigator.clipboard.writeText(text);
          alert('Copiado: ' + text);
        } catch(e) {
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          alert('Copiado: ' + text);
        }
      };
    })();
  </script>
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
