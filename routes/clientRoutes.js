// import express's Router method
const router = require('express').Router()
const path = require('path')

// client side routes
router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/summer', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/summer.html'))
})
router.get('/createcatch', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/createCatch.html'))
})
router.get('/catchlog', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/catchLog.html'))
})

module.exports = router


