
const CancionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    lyrics: {
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
    album_Id: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('spotifake', CancionSchema)