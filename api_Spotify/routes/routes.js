const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')


// rutas de canciones
router.post('/create-song', songController.createSong);
router.get('/find-songs', songController.findSongs);
router.get('/find-song/:songId', songController.findSong);
router.put('/update-song/:songId', songController.updateSong);
router.delete('/delete-song/:songId',songController.deleteSong);


// rutas usuarios



module.exports = router