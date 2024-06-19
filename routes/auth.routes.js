const router = require('express').Router()
const auth = require('../controllers/auth.controller')
const Authorize = require('../middlewares/auth.middleware')

// POST: api/auth
router.post('/', auth.login)

// GET: api/auth/tiempo
router.get('/tiempo', Authorize('Usuario,Administrador'), auth.tiempo)

// POST: api/auth/register
router.post('/register', auth.register)

// POST: api/auth/verify
router.post('/verify', auth.verify)

module.exports = router
