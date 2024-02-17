require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const UserModel = require('../models/User.model')

exports.genereToken = async (req, res) =>{
    const {email, password} = req.body
    const user = await UserModel.findOne({ email })
    if(!user)return res.status(401).json({error: "credenciales invalidas(email)"})

    if(user.password !== password)return res.status(401).json({error: "credenciales invalidas(password)"})


    const payload = {
        id: user._id,
        rol : 'admin'
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1h' })
    return res.status(202).json({ token })
}
