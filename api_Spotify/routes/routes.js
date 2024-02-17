const express = require('express')
const router = express.Router()


const songController = require('../controllers/songController');
const userController = require('../controllers/userController');
const artistController = require('../controllers/artistController');
const albumController = require('../controllers/albumController');
const uploadControllerSong = require('../middleware/mdl.uploadSong');
const sessionController = require('../controllers/sessionController')


const mdJWT = require('../middleware/Jwt')

//? rutas de canciones
router.post('/create-song', uploadControllerSong.array("archivos"), songController.createSong);
router.get('/find-songs', songController.findSongs);
router.get('/find-song/:songId', songController.findSong);
router.put('/update-song/:songId', songController.updateSong);
router.delete('/delete-song/:songId', songController.deleteSong);

//? rutas artistas
router.post('/create-artist', artistController.createArtist);
router.get('/find-artists', artistController.findArtists);
router.get('/find-artist/:artistId', artistController.findArtist);
router.put('/update-artist/:artistId', artistController.updateArtist);
router.delete('/delete-artist/:artistId', artistController.deleteArtist);

//? rutas album
router.post('/create-album', albumController.createAlbum);
router.get('/find-albums', albumController.findAlbums);
router.get('/find-album/:albumId', albumController.findAlbums);
router.put('/update-album/:albumId', albumController.updateAlbum);
router.delete('/delete-album/:albumId', albumController.deleteAlbum);

//? rutas usuarios
router.post('/create-user', userController.createUser);
router.get('/find-users', mdJWT.verificarToken, userController.getUsers);
router.get('/find-user/:userId', userController.getUser);
router.put('/update-user/:userId', userController.updateUser);
router.delete('/delete-user/:userId', userController.deleteUser);
router.post('/ingreso', sessionController.genereToken)

//? rutas favoritos




// ? ruta de subir archivos

module.exports = router
