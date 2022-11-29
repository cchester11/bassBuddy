const router = require('express').Router()
const connection = require('../config/connection')

// successful route
router.get('/getallcatches', (req, res) => {
      const sql = 'SELECT * FROM catchlog;'

      // make a sql query. the query method accepts a query and a callback function
      // parameters like err and rows do not need data to be passed in
      connection.query(sql, (err, rows) => {
            if (err) {
                  res.status(500).json({ error: err.message })
            } else {
                  // console.log({ data: rows })
                  res.json({
                        rows: rows
                  })
            }
      })
})

// the fetch request successfully reaches the route. there is something wrong with the inner workings of the route
// query route works but still sends an error message back
router.post('/createcatch', (req, res) => {
      console.log('made it to the route')

      // query looks like it uses correct sql syntax
      const sql = "INSERT INTO catchlog (catch_title, catch_type, season, catch_description) VALUES (?,?,?,?);"

      // params successfully sent when running the fetch request in an async function 
      const params = [
            req.body.catch_title,
            req.body.catch_type,
            req.body.season,
            req.body.catch_description
      ]
      console.log(params + ' --- server side params log')

      // inject our sql query, our parameters placed into values slot and a call back to return answers json format
      connection.query(sql, params, (rows) => {
            console.log('made it to the query. Successful post of catch. Congratulations!')
            res.json({
                  message: 'success',
                  data: rows
            })
      })
})

router.delete('/deletecatch', (req, res) => {
      // write our sql native query
      const id = req.body.id;
      const sql = `DELETE FROM catchlog WHERE id = '${id}'`

      connection.query(sql, (rows) => {
            res.json({
                  message: 'success',
                  data: rows
            })
      })
})

module.exports = router