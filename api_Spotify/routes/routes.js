const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')


// Rutas Canciones
router.post('/create-song', songController.createSong);


module.exports = router