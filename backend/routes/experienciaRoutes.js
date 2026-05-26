const express = require('express');
const router = express.Router();
const {
  getAllExperiencias,
  getExperienciaById,
  createExperiencia,
  updateExperiencia,
  deleteExperiencia
} = require('../controllers/experienciaController');

/**
 * @openapi
 * components:
 *   schemas:
 *     Experiencia:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único generado por MongoDB
 *           example: "60d5ecb74b24c72b8c8b4567"
 *         cargo:
 *           type: string
 *           description: Puesto o cargo desempeñado
 *           example: "Desarrollador Fullstack"
 *         empresa:
 *           type: string
 *           description: Nombre de la empresa
 *           example: "Tech Solutions S.A."
 *         descripcion:
 *           type: string
 *           description: Descripción detallada de las responsabilidades y logros
 *           example: "Desarrollo de aplicaciones web modernas con React y Node.js"
 *         fechaInicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del cargo (formato YYYY-MM-DD)
 *           example: "2022-01-15"
 *         fechaFin:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Fecha de finalización del cargo (opcional, formato YYYY-MM-DD)
 *           example: "2024-03-30"
 *         actualmente:
 *           type: boolean
 *           description: Indica si es el cargo actual
 *           example: false
 *         ubicacion:
 *           type: string
 *           description: Ubicación geográfica del trabajo
 *           example: "Bogotá, Colombia"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización
 *           example: "2024-01-01T00:00:00.000Z"
 *     ExperienciaInput:
 *       type: object
 *       required:
 *         - cargo
 *         - empresa
 *         - descripcion
 *         - fechaInicio
 *       properties:
 *         cargo:
 *           type: string
 *           description: Puesto o cargo desempeñado
 *           example: "Desarrollador Frontend"
 *         empresa:
 *           type: string
 *           description: Nombre de la empresa
 *           example: "Startup Tech"
 *         descripcion:
 *           type: string
 *           description: Descripción detallada de las responsabilidades y logros
 *           example: "Desarrollo de interfaces de usuario modernas con Vue.js y diseño responsivo"
 *         fechaInicio:
 *           type: string
 *           format: date
 *           description: Fecha de inicio del cargo (formato YYYY-MM-DD)
 *           example: "2023-09-01"
 *         fechaFin:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Fecha de finalización del cargo (opcional, formato YYYY-MM-DD)
 *           example: "2024-12-31"
 *         actualmente:
 *           type: boolean
 *           description: Indica si es el cargo actual
 *           example: false
 *         ubicacion:
 *           type: string
 *           description: Ubicación geográfica del trabajo
 *           example: "Cali, Colombia"
 */

/**
 * @openapi
 * /api/experiencias:
 *   get:
 *     summary: Obtener todas las experiencias profesionales
 *     description: Recupera una lista de todas las experiencias laborales registradas, ordenadas por fecha de inicio descendente.
 *     responses:
 *       200:
 *         description: Lista de experiencias obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experiencia'
 *             example:
 *               - _id: "60d5ecb74b24c72b8c8b4567"
 *                 cargo: "Desarrollador Fullstack"
 *                 empresa: "Tech Solutions S.A."
 *                 descripcion: "Desarrollo de aplicaciones web modernas con React y Node.js"
 *                 fechaInicio: "2022-01-15"
 *                 fechaFin: "2024-03-30"
 *                 actualmente: false
 *                 ubicacion: "Bogotá, Colombia"
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-01T00:00:00.000Z"
 */
router.get('/', getAllExperiencias);

/**
 * @openapi
 * /api/experiencias/{id}:
 *   get:
 *     summary: Obtener una experiencia por ID
 *     description: Recupera los detalles de una experiencia laboral específica usando su identificador único.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la experiencia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experiencia encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experiencia'
 *             example:
 *               _id: "60d5ecb74b24c72b8c8b4567"
 *               cargo: "Ingeniero de Software Senior"
 *               empresa: "Innovate Corp"
 *               descripcion: "Liderazgo en el desarrollo de microservicios y arquitectura de sistemas escalables"
 *               fechaInicio: "2020-06-01"
 *               fechaFin: null
 *               actualmente: true
 *               ubicacion: "Medellín, Colombia"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             example:
 *               message: "Experiencia no encontrada"
 */
router.get('/:id', getExperienciaById);

/**
 * @openapi
 * /api/experiencias:
 *   post:
 *     summary: Crear una nueva experiencia profesional
 *     description: Registra una nueva experiencia laboral en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienciaInput'
 *           example:
 *             cargo: "Desarrollador Frontend"
 *             empresa: "Startup Tech"
 *             descripcion: "Desarrollo de interfaces de usuario modernas con Vue.js y diseño responsivo"
 *             fechaInicio: "2023-09-01"
 *             fechaFin: "2024-12-31"
 *             actualmente: false
 *             ubicacion: "Cali, Colombia"
 *     responses:
 *       201:
 *         description: Experiencia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experiencia'
 *             example:
 *               _id: "60d5ecb74b24c72b8c8b4567"
 *               cargo: "Desarrollador Frontend"
 *               empresa: "Startup Tech"
 *               descripcion: "Desarrollo de interfaces de usuario modernas con Vue.js y diseño responsivo"
 *               fechaInicio: "2023-09-01"
 *               fechaFin: "2024-12-31"
 *               actualmente: false
 *               ubicacion: "Cali, Colombia"
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-01T00:00:00.000Z"
 *       400:
 *         description: Error en la validación de datos
 *         content:
 *           application/json:
 *             example:
 *               message: "Error al crear la experiencia"
 *               error: "Experiencia validation failed: cargo: Path `cargo` is required."
 */
router.post('/', createExperiencia);

/**
 * @openapi
 * /api/experiencias/{id}:
 *   put:
 *     summary: Actualizar una experiencia profesional
 *     description: Modifica los datos de una experiencia laboral existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la experiencia a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienciaInput'
 *           example:
 *             cargo: "Desarrollador Fullstack Senior"
 *             empresa: "Tech Solutions S.A."
 *             descripcion: "Actualización: Ahora liderando equipo de desarrollo con enfoque en DevOps"
 *             fechaInicio: "2022-01-15"
 *             fechaFin: null
 *             actualmente: true
 *             ubicacion: "Bogotá, Colombia"
 *     responses:
 *       200:
 *         description: Experiencia actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experiencia'
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             example:
 *               message: "Experiencia no encontrada"
 *       400:
 *         description: Error en la validación de datos
 */
router.put('/:id', updateExperiencia);

/**
 * @openapi
 * /api/experiencias/{id}:
 *   delete:
 *     summary: Eliminar una experiencia profesional
 *     description: Remueve permanentemente una experiencia laboral de la base de datos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único de la experiencia a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experiencia eliminada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: "Experiencia eliminada correctamente"
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             example:
 *               message: "Experiencia no encontrada"
 */
router.delete('/:id', deleteExperiencia);

module.exports = router;
