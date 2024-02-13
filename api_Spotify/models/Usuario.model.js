const mongoose = require('mongoose')

const UsuarioModel = mongoose.Schema({
    Correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
   
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('usuario', UsuarioModel)



/*
{
    correo: "santi@correo.com",
    clave: "clave123",

}
*/
