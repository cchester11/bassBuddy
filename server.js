// imports
const express = require('express')
const connection = require('./config/connection')

// declarations
const app = express()
const PORT = 3001 || process.env.PORT

// run the config file
connection.connect(() => {
  console.log('connected')
})

// middleware options
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// static use of files in directory for transport to the client
app.use(express.static(__dirname + '/public'))

// access routes
app.use(require('./routes'))

// initialize the server with command "npm start"
app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT)
})