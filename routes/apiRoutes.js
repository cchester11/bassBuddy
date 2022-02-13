const router = require('express').Router()
const connection = require('../config/connection')

router.get('/catchlog', (req, res) => {
      const sql = 'SELECT * FROM catchlog'

      // make a sql query. the query method accepts a query and a callback function
      // parameters like err and rows do not need data to be passed in
      connection.query(sql, (err, rows) => {
            if(err) {
                  res.status(500).json({ error: err.message})
            } else {
                  res.json({
                        message: 'successful route',
                        data: rows
                  })
            }
      })
}) 

module.exports = router