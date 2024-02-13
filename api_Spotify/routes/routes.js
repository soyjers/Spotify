const express =require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')
const sessionController = require('../controllers/sessionController')

// ? Rutas Usuario

router.get('/consultar-usuario', UsuarioController.consultarUsuarios);
router.get('/consultar-usuario/:usuarioId', UsuarioController.consultarUnUsuario);
router.post('/crear-usuario', UsuarioController.crearUsuario)
router.put('/actualizar-usuario/:usuarioId', UsuarioController.actualizarUsuario)
router.delete('/eliminar-usuario/:usuarioId', UsuarioController.elminarUsuario)


// ? Rutas X

router.post('/ingreso', sessionController.genereToken)



module.exports = router
