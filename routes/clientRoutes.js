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
router.get('/winter', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/winter.html'))
})
router.get('/fall', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/fall.html'))
})
router.get('/spring', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/spring.html'))
})
router.get('/createcatch', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/createCatch.html'))
})
router.get('/catchlog', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/catchLog.html'))
})
router.get('/favorites', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/favorites.html'))
})

module.exports = router


