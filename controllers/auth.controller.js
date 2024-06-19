const bcrypt = require('bcrypt')
const { usuario, rol, Sequelize } = require('../models')
const { GeneraToken, TiempoRestanteToken } = require('../services/jwttoken.service')
const { generateOTP } = require('../utils/otp')
const { sendEmail } = require('../utils/email')

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

self.register = async function (req, res) {
    const { email, nombre, password } = req.body

    try {
        let data = await usuario.findOne({ where: { email: email } })
        if (data !== null) {
            return res.status(400).json({ mensaje: 'El correo ya está registrado.' })
        }

        const rolusuario = await rol.findOne({ where: { nombre: 'NoVerificado' } });

        const otp = generateOTP();

        data = await usuario.create({ 
            id: crypto.randomUUID(),
            email: req.body.email,
            passwordhash: await bcrypt.hash(req.body.password, 10),
            nombre: req.body.nombre,
            rolid: rolusuario.id,
            otp: otp
        });

        req.bitacora("usuario.register", email);

        sendEmail(email, 'Activación de cuenta', `Su código de activación es: ${otp}`);

        req.bitacora("usuario.otpsend", email);

        return res.status(201).json({ mensaje: 'Usuario creado.' })
    } 
    catch (error) {
        return res.status(400).json({ mensaje: 'Error al crear el usuario.' })
    }
}

self.verify = async function (req, res) {
    const { email, code } = req.body

    console.log(email, code)

    try {
        let data = await usuario.findOne({ where: { email: email } })
        if (data === null) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado.' })
        }

        if (data.otp !== code) {
            return res.status(400).json({ mensaje: 'Código incorrecto.' })
        }

        const rolusuario = await rol.findOne({ where: { nombre: 'Usuario' } });

        await data.update({ rolid: rolusuario.id, otp: null });

        req.bitacora("usuario.verify", email);

        return res.status(200).json({ mensaje: 'Usuario verificado.' })
    } 
    catch (error) {
        return res.status(400).json({ mensaje: 'Error al verificar el usuario.' })
    }
}

module.exports = self
