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
        if (req.body.artistId.length < 3 || req.body.artistId.length > 20) {
            res.status(411).send({ error: "artist name must be between 3 and 20 characters." });
            return
        }
        if (req.body.albumId.length < 3 || req.body.albumId.length > 30) {
            res.status(411).send({ error: "album name must be between 3 and 30 characters." });
            return
        }
        if (req.body.year < 1900 || req.body.year > 2024) {
            res.status(411).send({ error: "year must be between 1900 and 2024." });
            return
        }


        let extensionesImagenes = ["png", "jpg", "webp", "jpeg"];

        // Arrays separados para archivos de imagen y archivos de audio
        let files = [];
        let images = [];
        console.log(req.files);
        for (const key in req.files) {
            if (key in req.files) {
                const archivos = req.files[key];
                const primerArchivo = archivos[0];

                if (extensionesImagenes.includes(primerArchivo.mimetype.split('/').pop()) || key === "image") {
                    images.push(archivos);
                } else if (key === "file") {
                    files.push(archivos);
                }
            }
        }


        // Asignar las rutas correspondientes a req.body.image y req.body.file
        req.body.image = images.length > 0 ? `storage/fileSong/images/${images[0][0].filename}` : '';
        req.body.file = files.length > 0 ? `storage/fileSong/audios/${files[0][0].filename}` : '';


        let newfavorite = new favoriteModel(req.body)
        await newfavorite.save()
        console.log(newfavorite)
        res.status(201).send(newfavorite);

    } catch (error) {
        console.error('error when creatin song:', error)
        res.status(500).send({ message: "Error creating the song, check the data entered or contact the administrator" });
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
