const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

conectarDB()
const app = express();
app.use(cors())
app.use(express.json());



app.use('/api', require('./routes/routes'))

app.listen(4001, () => {
    console.log('Servidor ejecutandose exitosamente en el puerto 4001');
})