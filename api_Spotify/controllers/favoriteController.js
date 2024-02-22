//Controlador para manejar las operaciones CRUD de los usuarios
const favoriteModel = require('../models/favorite.model');

// Crear una cancion (POST)
exports.createfavorito= async (req, res) => {
    try {

        // Realizar validaciones antes de crear favorito
        const existingFavorito = await favoriteModel.findOne({ name: req.body.name });
        if (existingFavorito) {
            res.status(400).send({ error: "There is already a song with the same name" });
            return
        }
        if (req.body.name.length < 3 || req.body.name.length > 30) {
            res.status(411).send({ error: "song name must contain minimum 3 characters and maximum 30." });
            return
        }
        if (req.body.duration < 60 || req.body.duration > 800) {
            res.status(411).send({ error: "song duration should be from 60 to 800 s." });
            return
        }
        if (req.body.artist_Id.length < 3 || req.body.artistId.length > 20) {
            res.status(411).send({ error: "artist name must be between 3 and 20 characters." });
            return
        }
        if (req.body.album_Id.length < 3 || req.body.albumId.length > 30) {
            res.status(411).send({ error: "album name must be between 3 and 30 characters." });
            return
        }
        if (req.body.year < 1900 || req.body.year > 2024) {
            res.status(411).send({ error: "year must be between 1900 and 2024." });
            return
        }


        console.log(req.body);
        let newFavorite = new favoriteModel(req.body)
        await newFavorite.save()
        res.send(newFavorite);
        console.log(newFavorite)
        res.status(201).send({ message: 'favorite created successfully' });
    } catch (error) {
        console.error('error when creatin favorite:', error)
        res.status(500).send({ message: "Error creating the favorite, check the data entered or contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

// buscar todas las canciones (GET)
exports.findsfavorite = async (req, res) => {
    try {
        let favoriteData = await favoriteModel.find()
        res.status(200).json(favoriteData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* -------------------------------------------------------------------------------------------------------------------------------- */

// buscar un usuario (GET)
exports.findfavorite = async (req, res) => {
    try {
        let favoriteData = await favoriteModel.findById(req.params.userId);
        if (!favoriteData) {
            res.status(404).send({ error: "the user has not been found" });
        } else {
            res.send(favoriteData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* -------------------------------------------------------------------------------------------------------------------------------- */


// actualizar cancion (PUT)
exports.updatefavorite = async (req, res) => {
    try {

        if (req.params.favoriteId.length == 24) {
            let favoriteData = await favoriteModel.findById(req.params.favoriteId);

            if (!favoriteData) {
                res.status(404).send({ error: "song has not been found" });
                return
            }
            const { name, duration, image, year, artistId, albumId, genre } = req.body

            favoriteData.name = name
            favoriteData.duration = duration
            favoriteData.image = image
            favoriteData.year = year
            favoriteData.artistId = artistId
            favoriteData.albumId = albumId
            favoriteData.genre = genre


            favoriteData = await favoriteData.findOneAndUpdate({ _id: req.params.songId }, favoriteData, { new: true });
            res.json(favoriteData)
        } else {
            res.status(403).send({ error: "id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* -------------------------------------------------------------------------------------------------------------------------------- */

// eliminar usuario (DELETE)
exports.deleteFavorite = async (req, res) => {
    try {
        let dataFavorite = await favoriteModel.findById(req.params.userId);
        if (!dataFavorite) {
            res.status(404).send({ error: "user has not been found" });
            return
        }
        await favoriteModel.findOneAndDelete({ _id: req.params.userId });
        res.status(200).send({ message: "user deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}
