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
  res.send('API de experiencias profesionales funcionando');
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
