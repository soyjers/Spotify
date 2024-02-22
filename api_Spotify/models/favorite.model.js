const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    artistId: {
        type: String,
        required: true,
    },
    albumId: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false


});

module.exports = mongoose.model('favorite', favoriteSchema);
