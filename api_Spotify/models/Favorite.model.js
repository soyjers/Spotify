const mongoose = require('mongoose')
const FavoriteSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    songs: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Favorite', FavoriteSchema)