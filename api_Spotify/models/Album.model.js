const mongoose = require('mongoose')
const ArtistaSchema = mongoose.Schema({
    album_Id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    artist_Id: {
        type: String,
        required: true
    },
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Album', ArtistaSchema)