const mongoose = require('mongoose')
const ArtistSchema = mongoose.Schema({
    album_Id: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    artist_Id: {
        type: String,
        required: true,
    },
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Album', ArtistSchema)