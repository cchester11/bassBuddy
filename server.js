// imports
const express = require('express')
const mysql = require('mysql2')
const path = require('path')

// declarations
const app = express()
const PORT = 3001 || process.env.PORT

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  database: 'catchLog_db',
  password: "Ho99lulu3!2"
})
connection.connect(() => {
  console.log('connected')
})

// static use of files in directory for transport to the client
app.use(express.static(__dirname + '/public'))

// routes (may move into routes file with an import of express.Router())
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/data.html'))
})
app.get('/catchlog', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/catchLog.html'))
})

// initialize the server with command "npm start"
app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT)
})