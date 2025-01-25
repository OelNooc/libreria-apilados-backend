const { check, validationResult } = require('express-validator');

exports.validarLibro = [
    check('ISBN').notEmpty().withMessage('El ISBN es obligatorio'),
    check('nombreLibro').notEmpty().withMessage('El nombre es obligatorio'),
    check('autor').notEmpty().withMessage('El autor es obligatorio'),
    check('paginas').isNumeric().withMessage('Las páginas deben ser un número'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
