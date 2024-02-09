const mongoose = require('mongoose')
const ArtistaSchema = mongoose.Schema({
    artist_Id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Artist', ArtistaSchema)