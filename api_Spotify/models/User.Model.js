const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    contraseña: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('User', userSchema);

