const express = require('express');
const router = express.Router();
const {
    listarUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios
} = require('../controllers/userControllers');

router.get('/',listarUsuarios);

router.post('/',crearUsuarios);

router.put('/:id', actualizarUsuarios);

router.delete('/:id', eliminarUsuarios);

module.exports = router;

