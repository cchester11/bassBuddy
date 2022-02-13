const router = require('express').Router()

const apiRoutes = require('./apiRoutes')
const clientRoutes = require('./clientRoutes')

router.use('/api', apiRoutes)
router.use('/', clientRoutes)

module.exports = router

