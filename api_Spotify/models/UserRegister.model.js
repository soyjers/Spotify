const mongoose = require('mongoose');


const userRegisterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },    
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', userRegisterSchema);

 
