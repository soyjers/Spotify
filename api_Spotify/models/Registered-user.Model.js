const mongoose = require('mongoose');


const registeredUserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('registered-User', registeredUserSchema);