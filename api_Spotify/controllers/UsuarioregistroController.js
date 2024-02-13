

exports.CrearUsuario = async(req, res) => {
    try {
        console.log(req.body);
        let NuevoUsuario = new RegirtroUsuarioModel(req.body)
        await NuevoUsuario.save()
        res.send(NuevoUsuario)
        console.log(NuevoUsuario)
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}


