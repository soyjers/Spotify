const mongoose = require('mongoose')
const ArtistSchema = mongoose.Schema({
    albumId: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    artistId: {
        type: String,
        required: true,
    },
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Album', ArtistSchema)