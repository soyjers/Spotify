const AlbumModel = require("../models/Album.model");

//crear un album (POST)
exports.createAlbum = async (req, res) => {
    try {
        console.log(req.body);
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

// consultar todos los album (GET)
// exports.findAlbums = async (req, res) => {
//     try {
//         let albumData = await AlbumModel.find()
//         res.status(200).json(albumData);
//     } catch (error) {
//         res.status(500).send({ error: "Something has happened, contact the administrator" });
//     }
// }

// /* ------------------------------------------------------------------------------------------------------------------------------ */

// // consultar un artista (GET)
// exports.findArtist = async (req, res) => {
//     try {
//         let artistData = await ArtistModel.findById(req.params.artistId);
//         if (!artistData) {
//             res.status(404).send({ error: "artist has not been found" });
//         } else {
//             res.send(artistData);
//         }
//     } catch (error) {
//         console.error('error:', error)
//         res.status(500).send({ error: "Something has happened, contact the administrator" });
//     }
// }

// /* ------------------------------------------------------------------------------------------------------------------------------- */

// // actualizar un artista (PUT)
// exports.updateArtist = async (req, res) => {
//     try {

//         if (req.params.artistId.length == 24) {
//             let artistData = await ArtistModel.findById(req.params.artistId);

//             if (!artistData) {
//                 res.status(404).send({ error: "artist has not been found" });
//                 return
//             }
//             const { artistId, image } = req.body

//             artistData.artistId = artistId
//             artistData.image = image

//             artistData = await ArtistModel.findOneAndUpdate({ _id: req.params.artistId }, artistData, { new: true });
//             res.json(artistData)
//         } else {
//             res.status(403).send({ error: "id provided is not valid" });
//         }

//     } catch (error) {
//         console.error('error:', error)
//         res.status(500).send({ error: "Something has happened, contact the administrator" });
//     }
// }

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