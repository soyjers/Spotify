const ArtistModel = require("../models/Artist.model");

//crear un artista (POST)
exports.createArtist = async (req, res) => {
    try {
        console.log(req.body);
        let newArtist = new ArtistModel(req.body)
        await newArtist.save()
        res.send(newArtist)
        console.log(newArtist)
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" })
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

// consultar todos los artistas (GET) 
exports.findArtists = async (req, res) => {
    try {
        let artistData = await ArtistModel.find()
        res.status(200).json(artistData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// consultar un artista (GET)
exports.findArtist = async (req, res) => {
    try {
        let artistData = await SongModel.findById(req.params.artistId);
        if (!artistData) {
            res.status(404).send({ error: "artist has not been found" });
        } else {
            res.send(artistData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// buscar todas las canciones (GET)
exports.findSongs = async (req, res) => {
    try {
        let songData = await SongModel.find()
        res.status(200).json(songData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ */

// buscar una cancion (GET)
exports.findSong = async (req, res) => {
    try {
        let songData = await SongModel.findById(req.params.songId);
        if (!songData) {
            res.status(404).send({ error: "song has not been found" });
        } else {
            res.send(songData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

// actualizar cancion (PUT)
exports.updateArtist = async (req, res) => {
    try {

        if (req.params.artist_Id.length == 24) {
            let artistData = await ArtistModel.findById(req.params.artist_Id);

            if (!artistData) {
                res.status(404).send({ error: "artist has not been found" });
                return
            }
            const { artist_Id, image } = req.body

            artistData.artist_Id = artist_Id
            artistData.image = image

            artistData = await artistModel.findOneAndUpdate({ _id: req.params.artist_Id }, artistData, { new: true });
            res.json(artistData)
        } else {
            res.status(403).send({ error: "id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* ----------------------------------------------------------------------------------------------------------------------------- */

// eleminar un artista (DELETE)
exports.deleteArtist = async (req, res) => {
    try {
        let dataArtist = await ArtistModel.findById(req.params.artistId);
        if (!dataSong) {
            res.status(404).send({ error: "song has not been found" });
            return
        }
        await ArtistModel.findOneAndDelete({ _id: req.params.artistId });
        res.status(200).send({ message: "artist deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}