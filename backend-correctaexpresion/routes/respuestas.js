const { Router } = require('express')
const router = Router()
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const {connection} = require('../db/mysql_pool')

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
  
router.get('/respuestas', (req, res) => {
  connection.query("SELECT * FROM respuestas", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/respuestas/:id', (req, res) => {})

router.post('/respuestas', (req, res) => {})

router.put('/respuestas/id', (req, res) => {})

router.delete('/respuestas/:id', (req, res) => {})

module.exports = router