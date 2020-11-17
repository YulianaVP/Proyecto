const { Router } = require('express')
const router = Router()
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { connection } = require('./../db/mysql_pool')

const cargador = multer({
    storage : multer.diskStorage({
      destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'../public/uploads'))
      },
      filename : (req, file, cb) => {
         cb(null, uuidv4() + path.extname(file.originalname));
      }
    })
  })

router.get('/alumno', (req, res) => {
  connection.query("SELECT * FROM alumno", (error, result, fields) => {
    res.json(result)
  })
})

router.post("/alumno", (req, res) => {

})

router.put("/alumno/:id", (req, res) => {

})

router.delete("/alumno/:id", (req, res) => {

})

router.get("/alumno/:id", (req, res) => {

})

module.exports = router