const Libro = require('../models/Libro');

exports.agregarLibro = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerUltimosLibros = async (req, res) => {
    try {
        const libros = await Libro.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarLibros = async (req, res) => {
    try {
        const { query } = req.params;
        const libros = await Libro.find({
            $or: [
                { nombreLibro: new RegExp(query, 'i') },
                { autor: new RegExp(query, 'i') }
            ]
        });
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarLibro = async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(libro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarLibro = async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
