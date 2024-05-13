const bcrypt = require('bcrypt')
const { usuario, rol, Sequelize } = require('../models')
const { GeneraToken, TiempoRestanteToken } = require('../services/jwttoken.service')

let self = {}

// POST: api/auth
self.login = async function (req, res) {
    const { email, password } = req.body

    try {
        let data = await usuario.findOne({
            where: { email: email },
            raw: true,
            attributes: ['id', 'email', 'nombre', 'passwordhash', [Sequelize.col('rol.nombre'), 'rol']],
            include: { model: rol, attributes: [] }
        })

        if (data === null)
            return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos.' })

        // Se compara la contraseña vs el hash almacenado
        const passwordMatch = await bcrypt.compare(password, data.passwordhash)
        if (!passwordMatch)
            return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos.' })

        // Utilizamos los nombres de Claims estandar
        token = GeneraToken(data.email, data.nombre, data.rol)

        // Bitacora
        req.bitacora("usuario.login", data.email)

        return res.status(200).json({
            email: data.email,
            nombre: data.nombre,
            rol: data.rol,
            jwt: token
        })
    } catch (error) {
        return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos.' })
    }
}

// GET: api/auth/tiempo
self.tiempo = async function (req, res) {
    const tiempo = TiempoRestanteToken(req)
    if (tiempo == null)
        return res.status(404).send()
    return res.status(200).send(tiempo)
}

module.exports = self
