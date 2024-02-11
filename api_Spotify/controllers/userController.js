//Controlador para manejar las operaciones CRUD de los usuarios
const UserModel = require('../models/User.Model');


  exports.createUser= async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.getAllUsers = async (req, res) => {
    try {
        let usersData = await UserModel.find();
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json({ error: "Something has happened, contact the administrator" });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

  exports.updateUser= async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



