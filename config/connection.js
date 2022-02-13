const mysql = require('mysql2')

// connection to database
const connection = mysql.createConnection({
      host: "localhost",
      user: 'root',
      database: 'catchLog_db',
      password: "Ho99lulu3!2"
})

module.exports = connection