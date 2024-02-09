const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3, // Mínimo de 3 caracteres para el nombre
        maxlength: 20 // Máximo de 50 caracteres para el nombre
    },
    duration: {
        type: Number,
        required: true,
        min: 1, // Duración mínima de 1 segundo
        max: 600, // Duración máxima de 10 minutos en segundos (10 minutos = 600 segundos)
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Validar si la URL apunta a una imagen válida (puede requerir una función personalizada)
                // Ejemplo: Validar si la URL termina con una extensión de imagen común (JPEG, PNG, etc.)
                return /\.(jpg|jpeg|png|gif|webp)$/.test(v);
            },
            message: props => `${props.value} no es una URL de imagen válida`
        }
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
    album_Id: {
        type: String,
        required: true,
        minlength: 5, // Mínimo de 5 caracteres para el ID del álbum
        maxlength: 20 // Máximo de 20 caracteres para el ID del álbum
    },
    genre: {
        type: String,
        required: true,
        enum: ['rock', 'pop', 'hip-hop'] // Ejemplo de limitar el género a valores específicos
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('song', songSchema);