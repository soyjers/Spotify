// Controlador para manejar las operaciones CRUD de las canciones

const SongModel = require('../models/Song.model');

// Crear una cancion (PUT)
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

// buscando todas las canciones (GET)
exports.findSongs = async (req, res) => {
    try {
        let songData = await SongModel.find()
        res.json(songData)
    } catch (error) {
        res.status(500).send({ error: "Something has happened, contact the administrator." })
    }
}

// buscar una cancion (GET)
exports.findSong = async (req, res) => {
    try {
        let dataMascota = await MascotasModel.findById(req.params.mascotaId)
        if (!dataMascota) {
            res.status(404).send({ error: "No se ha encontrado la mascota" })
        } else {
            res.send(dataMascota)
        }
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

// actualizar canciones
// exports.actualizarMascota = async(req, res) => {
//     try {

//         if (req.params.mascotaId.length == 24) {
//             let dataMascota = await MascotasModel.findById(req.params.mascotaId)

//             if (!dataMascota) {
//                 res.status(404).send({ error: "No se ha encontrado la mascota" })
//                 return
//             }
//             const { nombre, edad, raza, vacunado, diagnostico } = req.body

//             dataMascota.nombre = nombre
//             dataMascota.edad = edad
//             dataMascota.raza = raza
//             dataMascota.vacunado = vacunado
//             dataMascota.diagnostico = diagnostico

//             dataMascota = await MascotasModel.findOneAndUpdate({ _id: req.params.mascotaId }, dataMascota, { new: true })
//             res.json(dataMascota)
//         } else {
//             res.status(403).send({ error: "El id proporcionado no es valido" })
//         }



//     } catch (error) {
//         console.log('error:', error)
//         res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
//     }
// }


// exports.elminarMascota = async(req, res) => {
//     try {
//         let dataMascota = await MascotasModel.findById(req.params.mascotaId)
//         if (!dataMascota) {
//             res.status(404).send({ error: "No se ha encontrado la mascota" })
//             return
//         }
//         await MascotasModel.findOneAndDelete({ _id: req.params.mascotaId })
//         res.status(200).send({ msg: "Eliminado correctamente" })
//     } catch (error) {
//         console.log('error:', error)
//         res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
//     }
// }