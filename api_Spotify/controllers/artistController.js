const ArtistModel = require("../models/Artist.model");

//crear un album (POST)
exports.createArtist = async (req, res) => {
    try {
        console.log(req.body);
        const archivos = req.files


        let extensionesImagenes = ["png", "jpg", "webp", "jpeg"];
        req.body.image = archivos.find((archivo) => {
            return extensionesImagenes.includes(archivo.mimetype.split('/').pop());
        });
        req.body.image = `storage/fileSong/image/artist/${req.body.image.filename}`



        let newArtist = new ArtistModel(req.body);
        await newArtist.save();
        res.send(newArtist);
        console.log(newArtist);
    } catch (error) {
        console.log('error:', error);
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
        let artistData = await ArtistModel.findById(req.params.artistId);
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

/* ------------------------------------------------------------------------------------------------------------------------------- */

// actualizar un artista (PUT)
exports.updateArtist = async (req, res) => {
    try {

        if (req.params.artistId.length == 24) {
            let artistData = await ArtistModel.findById(req.params.artistId);

            if (!artistData) {
                res.status(404).send({ error: "artist has not been found" });
                return
            }
            const { artistId, image } = req.body

            artistData.artistId = artistId
            artistData.image = image

            artistData = await ArtistModel.findOneAndUpdate({ _id: req.params.artistId }, artistData, { new: true });
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

// eliminar un artista (DELETE)
exports.deleteArtist = async (req, res) => {
    try {
        let dataArtist = await ArtistModel.findById(req.params.artistId);
        if (!dataArtist) {
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



exports.findSongsForArtist = async (req, res) => {
    try {
        let songData = await SongModel.find({artistId: 'DataPrueba'})
        // let songData = await SongModel.find({artistId: req.params.idAlbum})
        res.status(200).json(songData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}
