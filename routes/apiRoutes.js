const router = require('express').Router()
const connection = require('../config/connection')

// successful route
router.get('/getallcatches', (req, res) => {
      const sql = 'SELECT * FROM catchLog;'

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

router.get('/favorites', (req, res) => {
      const sql = 'SELECT * FROM catchLog WHERE favorite = 1;'

      connection.query(sql, (err, rows) => {
            if (err) {
                  res.status(500).json({ error: err.message })
            } else {
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
      const sql = "INSERT INTO catchLog (catch_location, catch_species, season, catch_description, catch_date) VALUES (?,?,?,?,?);"

      // params successfully sent when running the fetch request in an async function 
      const params = [
            req.body.catch_location,
            req.body.catch_species,
            req.body.season,
            req.body.catch_description,
            req.body.catch_date
      ]
      console.log(params + ' --- server side params log')

      // inject our sql query, our parameters placed into values slot and a call back to return answers json format
      connection.query(sql, params, (err, rows) => {
            if (err) {
                  res.status(500).json({ error: err.message })
            } else {
                  console.log('made it to the query. Successful post of catch. Congratulations!')
                  res.json({
                        message: 'success',
                        data: rows
                  })
            }
      })
})

router.put('/favorite', (req, res) => {
      const id = req.body.id
      const favorite = req.body.favorite

      const sql = `UPDATE catchLog SET favorite = ${favorite} WHERE id = ${id}`

      connection.query(sql, rows => {
            res.json({
                  message: 'success',
                  data: rows
            })
      })
})

router.delete('/deletecatch', (req, res) => {
      // write our sql native query
      const id = req.body.id;
      const sql = `DELETE FROM catchLog WHERE id = '${id}'`

      connection.query(sql, (rows) => {
            res.json({
                  message: 'success',
                  data: rows
            })
      })
})

module.exports = router