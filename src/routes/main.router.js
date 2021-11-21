// Falta express y router
const express = require('express');
const router = express.Router();
const mainController = require('/controllers/mainController');

// Falta traer el controller

// Definir las rutas
router.get('/', mainController.index);

router.get('/menu', mainController.menu);

// Exportar el resultado
module.exports = router;