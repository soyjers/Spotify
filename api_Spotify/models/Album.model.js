const mongoose = require('mongoose')
const ArtistaSchema = mongoose.Schema({
    album_Id: {
        type: String,
        required: true,
        minlength: 5, // Mínimo de 5 caracteres para el ID del álbum
        maxlength: 20 // Máximo de 20 caracteres para el ID del álbum
    },
    year: {
        type: Number,
        required: true,
        min: 1900, // Año mínimo
        max: 2024 // Año máximo
    },
    artist_Id: {
        type: String,
        required: true,
        minlength: 5, // Mínimo de 5 caracteres para el ID del artista
        maxlength: 20 // Máximo de 20 caracteres para el ID del artista
    },
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Album', ArtistaSchema)