const router = require('express').Router()
const connection = require('../config/connection')
const multer = require('multer')
const storage = multer.diskStorage({
      destination: function(req, file, callback) {
            callback(null, __dirname+'/../uploads')
      },
      filename: function(req, file, callback) {
            let format = ''

            if(file.mimetype === 'image/jpeg') {
                  format = '.jpg'
            } else if(file.mimetype === 'image/png') {
                  format = '.png'
            } else if(file.mimetype === 'application/png') {
                  format = '.pdf'
            }

            const fileName = file.originalname+'_'+Date.now()+format;
            callback(null, fileName)
      }
})
const upload = multer({
      storage: storage
})

// successful route
router.get('/getallcatches', (req, res) => {
      const sql = 'SELECT * FROM catchLog'

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
});

router.get('/find_catch_image', (req, res) => {
      console.log('----- on find catch image route -----')
      const id = req.body.id
      const sql = `SELECT catch_image FROM catchLog WHERE id =  ${id}`

      connection.query(sql, (rows, err) => {
            if(err) {
                  throw new Error(err)
            } else {
                  res.json({
                        data: rows
                  })
            }
      })
});

router.get('/favorites', (req, res) => {
      const sql = 'SELECT * FROM catchLog WHERE favorite = 1'

      connection.query(sql, (err, rows) => {
            if (err) {
                  res.status(500).json({ error: err.message })
            } else {
                  res.json({
                        rows: rows
                  })
            }
      })
});

router.post('/createcatch', (req, res) => {
      console.log('made it to the route')

      // query looks like it uses correct sql syntax
      const sql = "INSERT INTO catchLog (catch_location, catch_species, season, catch_description, catch_date) VALUES (?,?,?,?,?)"

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
});

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
});

router.post('/addimage', (req, res) => {
      const uploadToServer = upload.single('add-image-input')
      uploadToServer(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                  throw new Error(err)
            }
            else if (err) {
                  console.log('not a multer error')
                  throw new Error(err)
            } else {
                  const path = req.file.path
                  const id = req.body.image_id
                  console.log(path, id)
                  const sql = `UPDATE catchLog SET catch_image = '${path}' WHERE id = ${id}`
                  connection.query(sql, (rows, err) => {
                        res.json({
                              message: "image path posted to db",
                              data: rows
                        })
                  })
            }
      })
});

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
});

module.exports = router