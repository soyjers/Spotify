const mongoose = require('mongoose')
const ArtistaSchema = mongoose.Schema({
    artist_Id: {
        type: String,
        required: true,
        minlength: 5, // Mínimo de 5 caracteres para el ID del artista
        maxlength: 20 // Máximo de 20 caracteres para el ID del artista
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
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Artist', ArtistaSchema)