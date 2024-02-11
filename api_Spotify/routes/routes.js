const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')
const userController = require('../controllers/userController')


// rutas de canciones
router.post('/create-song', songController.createSong);
router.get('/find-songs', songController.findSongs);
router.get('/find-song/:songId', songController.findSong);
router.put('/update-song/:songId', songController.updateSong);
router.delete('/delete-song/:songId', songController.deleteSong);


// rutas usuarios
router.post('/create-user', userController.createUser);
router.get('/find-users', userController.getUsers);
router.get('/find-user/:userId', userController.getUser);
router.put('/update-user/:userId', userController.updateUser);
router.delete('/delete-user/:userId', userController.deleteUser);


module.exports = router