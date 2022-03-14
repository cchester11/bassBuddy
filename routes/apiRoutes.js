const router = require('express').Router()
const connection = require('../config/connection')

router.get('/getallcatches', (req, res) => {
      const sql = 'SELECT * FROM catchlog;'

      // make a sql query. the query method accepts a query and a callback function
      // parameters like err and rows do not need data to be passed in
      connection.query(sql, (err, rows) => {
            if(err) {
                  res.status(500).json({ error: err.message})
            } else {
                  console.log({data: rows})
                  res.json({
                        message: 'successful route',
                        data: rows
                  })
            }
      })
})

router.post('/createcatch', (req, res) => {
      console.log('made it to the route')

      const sql = "INSERT INTO catchlog (catch_title, catch_type, season, catch_description) VALUES (?,?,?,?)"

      const params = [
            req.body.catch_title,
            req.body.catch_type,
            req.body.season,
            req.body.catch_description
      ]
      console.log(params)

      // inject our sql query, our parameters placed into values slot and a call back to return answers json format
      connection.query(sql, params, (err, rows, results) => {
            console.log('made it to the query')
            if(err) {
                  res.status(500).json({error: err.message})
            } else {
                  res.json({
                        message: 'success',
                        data: rows
                  })
            }
      })
})    

module.exports = router