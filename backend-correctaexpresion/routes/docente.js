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

router.get('/docentes', (req, res) => {
  connection.query('SELECT * FROM docentes',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/docentes/:id", (req, res) => {
  let ID = req.params.ID
  connection.query("SELECT * FROM docentes WHERE ID = ?",[ID] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({mensaje : "Error ejecutando la consulta"})
   })
})

router.post('/docentes', (req, res) => {

})

router.put('/docentes/id', (req, res) => {

})

router.delete('/docentes/:id', (req, res) => {

})

module.exports = router