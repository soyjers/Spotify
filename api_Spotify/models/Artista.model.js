const ArtistaSchema = mongoose.Schema({
    id_Artista: {
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

module.exports = mongoose.model('spotifake', ArtistaSchema)