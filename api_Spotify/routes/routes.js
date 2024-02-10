const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')


// Song Rout
router.post('/create-song', songController.createSong);
router.get('/find-songs', songController.findSongs);







module.exports = router