const ArtistaSchema = mongoose.Schema({
    album_Id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    id_Artista: {
        type: String,
        required: true
    }, 
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('spotifake', ArtistaSchema)