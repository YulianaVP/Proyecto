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

router.get('/alumnos', (req, res) => {
  connection.query('SELECT * FROM alumnos',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get("/alumnos/:id", (req, res) => {
  let id = req.params.id
  connection.query('SELECT * FROM alumnos WHERE ID = ?',[id] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({mensaje : "Error ejecutando la consulta"})
   })
})

router.post ("/alumnos/subir-video", cargador.single('actividad_practica'), async(req, res) => {
  if(req.file){
    const {ID} = req.body
    const response = await connection.query('UPDATE alumnos SET actividad_practica = ? WHERE ID = ?', [JSON.stringify(req.file), ID])
    res.json({mensaje: 'El archivo fue cargado exitosamente', archivo : {ruta : 'uploads/' + req.file.filename}})
  }else{
    res.json({mensaje : 'El archivo no se cargo'})
  }
})

router.put("/alumnos/:id", (req, res) => {

})

router.delete("/alumnos/:id", (req, res) => {

})

module.exports = router