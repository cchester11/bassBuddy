const express = require('express')
const path = require('path')

const app = express()
const PORT = 3001 || process.env.PORT

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/data.html'))
})

app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT)
})