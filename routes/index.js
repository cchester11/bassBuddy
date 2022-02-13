const router = require('express').Router()

const clientRoutes = require('./clientRoutes')

router.use('/', clientRoutes)

module.exports = router

