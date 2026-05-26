const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  cargo: { type: String, required: true },
  empresa: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: String, required: true },
  fechaFin: { type: String },
  actualmente: { type: Boolean, default: false },
  ubicacion: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Experiencia', experienciaSchema);
