//Controlador para manejar las operaciones CRUD de los usuarios
const UserModel = require('../models/User.Model');

// Crear un usuario (POST)
exports.createUser = async (req, res) => {
    try {

        // Realizar validaciones antes de crear el usuario
        const existingEmail = await UserModel.findOne({ email: req.body.email });
        if (existingEmail) {
            res.status(400).json({ error: 'email is already registered' });
            return
        };

        const existingUsername = await UserModel.findOne({ username: req.body.username });
        if (existingUsername) {
            res.status(400).json({ error: 'username is already registered' });
            return
        };


        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
        console.log(newUser);

    } catch (error) {
        console.error('error:', error);
        res.status(400).json({ error: "Something has happened, contact the administrator" });
    }
}


/* ------------------------------------------------------------------------------------------------------------------------------- */

// buscar todos los usuarios (GET)
exports.getUsers = async (req, res) => {
    try {
        let usersData = await UserModel.find();
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json({ error: "Something has happened, contact the administrator" });
    }
};

/* -------------------------------------------------------------------------------------------------------------------------------- */

// buscar un usuario (GET)
exports.getUser = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.params.userId);
        if (!userData) {
            res.status(404).send({ error: "the user has not been found" });
        } else {
            res.send(userData);
        }
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}

/* -------------------------------------------------------------------------------------------------------------------------------- */

// actualizar usuario (PUT)
exports.updateUser = async (req, res) => {
    try {

        if (req.params.userId.length == 24) {
            let userData = await UserModel.findById(req.params.userId);

            if (!userData) {
                res.status(404).send({ error: "song has not been found" });
                return
            }
            const { email, password, username} = req.body

            userData.email = email
            userData.password = password
            userData.username = username

            userData = await UserModel.findOneAndUpdate({ _id: req.params.userId }, userData, { new: true });
            res.json(userData)
        } else {
            res.status(403).send({ error: "id provided is not valid" });
        }

    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}
/* -------------------------------------------------------------------------------------------------------------------------------- */

// eliminar usuario (DELETE)
exports.deleteUser = async (req, res) => {
    try {
        let dataUser = await UserModel.findById(req.params.userId);
        if (!dataUser) {
            res.status(404).send({ error: "user has not been found" });
            return
        }
        await UserModel.findOneAndDelete({ _id: req.params.userId });
        res.status(200).send({ message: "user deleted correctly" });
    } catch (error) {
        console.error('error:', error)
        res.status(500).send({ error: "Something has happened, contact the administrator" });
    }
}


