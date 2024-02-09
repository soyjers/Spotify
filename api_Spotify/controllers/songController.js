// Controlador para manejar las operaciones CRUD de las canciones

const SongModel = require('../models/Song.model');


// Crear una nueva canción PUT
exports.createSong = async (req, res) => {
    try {
        console.log(req.body);
        let newSong = new SongModel(req.body)
        await newSong.save()
        res.send(newSong);
        console.log(newSong)
        res.status(201).send({ message: 'song created successfully', song: newSong });
    } catch (error) {
        console.error('error when creatin song:', error)
        res.status(500).send({ message: "error when creating song, contact the administrator" })
    }
}
