const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    file: {
        type: String,
        required: false,
    },
    year: {
        type: Number,
        required: true,
    },
    artistId: {
        type: String,
        required: true,
    },
    albumId: {
        type: String,
        required: false,
    },
    // genre: {
    //     type: String,
    //     required: true,
    // },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('song', songSchema);
