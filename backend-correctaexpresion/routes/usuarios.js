const { Router } = require("express")
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

router.get("/usuarios", (req, res) => {
    connection.query('SELECT * FROM usuarios',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get ("/usuarios/:id", (req, res) => {
  
})

router.put ("/usuarios/:id", (req, res) => {
  res.json({mensaje : 'Se registró el usuario'})
})

router.post ("/usuarios/subir-imagen-perfil", cargador.single('imagen_perfil'), async(req, res) => {
  if(req.file){
    const {ID} = req.body
    const response = await connection.query('UPDATE usuarios SET imagen_perfil = ? WHERE ID = ?', [JSON.stringify(req.file), ID])
    res.json({mensaje: 'El archivo fue cargado exitosamente', archivo : {ruta : 'uploads/' + req.file.filename}})
  }else{
    res.json({mensaje : 'El archivo no se cargo'})
  }
})

router.delete ("/usuarios/:id", (req, res) => {
  res.json({mensaje : 'El usuario fue eliminado'})
})

module.exports = router