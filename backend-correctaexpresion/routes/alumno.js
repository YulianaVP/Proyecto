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

router.get('/alumno', (req, res) => {
  connection.query('SELECT * FROM alumnos',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/alumno/:id", (req, res) => {

})

router.post ("/alumno/subir-video", cargador.single('actividad_practica'), async(req, res) => {
  if(req.file){
    const {ID} = req.body
    const response = await connection.query('UPDATE alumnos SET actividad_practica = ? WHERE ID = ?', [JSON.stringify(req.file), ID])
    res.json({mensaje: 'El archivo fue cargado exitosamente', archivo : {ruta : 'uploads/' + req.file.filename}})
  }else{
    res.json({mensaje : 'El archivo no se cargo'})
  }
})

router.put("/alumno/:id", (req, res) => {

})

router.delete("/alumno/:id", (req, res) => {

})

module.exports = router