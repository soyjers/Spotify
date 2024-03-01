const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' })

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO)

        console.log('database is connected')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB
