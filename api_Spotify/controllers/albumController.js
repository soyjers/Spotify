const AlbumModel = require("../models/Album.model");

//crear un album (POST)
exports.createAlbum = async (req, res) => {
    try {
        console.log(req.body);
        const archivos = req.files

        let extensionesImagenes = ["png", "jpg", "webp", "jpeg"];
        req.body.image = archivos.find((archivo) => {
            return extensionesImagenes.includes(archivo.mimetype.split('/').pop());
        });
        req.body.image = `storage/fileSong/image/album/${req.body.image.filename}`


        let newAlbum = new AlbumModel(req.body);
        await newAlbum.save();
        res.send(newAlbum);
        console.log(newAlbum);
    } catch (error) {
        console.log('error:', error);
        res.status(500).send({ error: "Something has happened, contact the administrator" })
    }




}

/* ------------------------------------------------------------------------------------------------------------------------------- */

//consultar todos los album (GET)
exports.findAlbums = async (req, res) => {
    try {
        let albumData = await AlbumModel.find()
        res.status(200).json(albumData);
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

// /* ------------------------------------------------------------------------------------------------------------------------------ */

// consultar un album (GET)
exports.findAlbum = async (req, res) => {
    try {
        let albumData = await AlbumModel.findById(req.params.albumId);
        if (!albumData) {
            res.status(404).send({ error: "album has not been found" });
        } else {
            res.send(albumData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

// /* ------------------------------------------------------------------------------------------------------------------------------- */

// actualizar un album (PUT)
exports.updateAlbum = async (req, res) => {
    try {

        if (req.params.albumId.length == 24) {
            let albumData = await AlbumModel.findById(req.params.albumId);

            if (!albumData) {
                res.status(404).send({ error: "album has not been found" });
                return
            }
            const { albumId, year, artistId, image } = req.body

            albumData.albumId = albumId
            albumData.year = year
            albumData.artistId = artistId
            albumData.image = image

            albumData = await AlbumModel.findOneAndUpdate({ _id: req.params.albumId }, albumData, { new: true });
            res.json(albumData)
        } else {
            res.status(403).send({ error: "id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

// /* ----------------------------------------------------------------------------------------------------------------------------- */

// // eliminar un artista (DELETE)
// exports.deleteArtist = async (req, res) => {
//     try {
//         let dataArtist = await ArtistModel.findById(req.params.artistId);
//         if (!dataArtist) {
//             res.status(404).send({ error: "song has not been found" });
//             return
//         }
//         await ArtistModel.findOneAndDelete({ _id: req.params.artistId });
//         res.status(200).send({ message: "artist deleted correctly" });
//     } catch (error) {
//         console.error('error:', error)
//         res.status(500).send({ error: "Something has happened, contact the administrator" });
//     }
// }
// eliminar un album (DELETE)
exports.deleteAlbum = async (req, res) => {
    try {
        let dataAlbum = await AlbumModel.findById(req.params.albumId);
        if (!dataAlbum) {
            res.status(404).send({ error: "album has not been found" });
            return
        }
        await AlbumModel.findOneAndDelete({ _id: req.params.albumId });
        res.status(200).send({ message: "album deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}


exports.findAlbumXArtist = async (req, res) => {
    try {
        let albumData = await AlbumModel.find({ artistId: req.params.artistId });
        if (!albumData) {
            res.send([]);
        } else {
            res.send(albumData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}
