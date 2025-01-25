const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.post('/', libroController.agregarLibro);
router.get('/', libroController.obtenerLibros);
router.get('/ultimos', libroController.obtenerUltimosLibros);
router.get('/buscar/:query', libroController.buscarLibros);
router.put('/:id', libroController.actualizarLibro);
router.delete('/:id', libroController.eliminarLibro);

module.exports = router;
