const mongoose = require('mongoose')
const ArtistSchema = mongoose.Schema({
    artistId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Artist', ArtistSchema)