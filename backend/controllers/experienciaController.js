const Experiencia = require('../models/Experiencia');

const getAllExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.find().sort({ fechaInicio: -1 });
    res.json(experiencias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener experiencias', error: error.message });
  }
};

const getExperienciaById = async (req, res) => {
  try {
    const experiencia = await Experiencia.findById(req.params.id);
    if (!experiencia) {
      return res.status(404).json({ message: 'Experiencia no encontrada' });
    }
    res.json(experiencia);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la experiencia', error: error.message });
  }
};

const createExperiencia = async (req, res) => {
  try {
    const experiencia = new Experiencia(req.body);
    const nuevaExperiencia = await experiencia.save();
    res.status(201).json(nuevaExperiencia);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la experiencia', error: error.message });
  }
};

const updateExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!experiencia) {
      return res.status(404).json({ message: 'Experiencia no encontrada' });
    }
    res.json(experiencia);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la experiencia', error: error.message });
  }
};

const deleteExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
    if (!experiencia) {
      return res.status(404).json({ message: 'Experiencia no encontrada' });
    }
    res.json({ message: 'Experiencia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la experiencia', error: error.message });
  }
};

module.exports = {
  getAllExperiencias,
  getExperienciaById,
  createExperiencia,
  updateExperiencia,
  deleteExperiencia
};
