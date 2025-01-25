const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombreLibro: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    portada: {
        type: String
    },
    paginas: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Libro', libroSchema);
