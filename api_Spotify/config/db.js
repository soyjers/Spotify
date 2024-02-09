const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' })

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO)

        console.log('connected to MongoDB Atlas');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = conectarDB



