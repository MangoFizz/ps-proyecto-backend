const jwt = require('jsonwebtoken')
const requestIp = require('request-ip');
const ClaimTypes = require('../config/claimtypes')
const { bitacora } = require('../models')

const bitacoralogger = (req, res, next) => {
    // Obtiene la IP de la petición
    const ip = requestIp.getClientIp(req)
    let email = 'invitado'

    req.bitacora = async (accion, id) => {
        const authHeader = req.header('Authorization')
        if (authHeader) {
            if (authHeader.startsWith('Bearer ')) {
                // Obtiene el token de la solicitud
                const token = authHeader.split(' ')[1]
                // Decodifica el token
                const decodedToken = jwt.decode(token)
                // Obtiene el nombre de usuario
                email = decodedToken[ClaimTypes.Name] ?? id
            }
        }

        // Guarda la operacion
        await bitacora.create({
            accion: accion, elementoid: id, ip: ip, usuario: email, fecha: new Date()
        })
    }
    next()
}

module.exports = bitacoralogger