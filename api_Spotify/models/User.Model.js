const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    favoritePlaylist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);


