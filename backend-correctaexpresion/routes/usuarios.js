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
  let id = req.params.id
  connection.query('SELECT * FROM usuarios WHERE ID = ?',[id] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({mensaje : "Error ejecutando la consulta"})
   })
})

router.post ("/usuarios", (req, res) => {
  try{
    let {
      Nombre,
      Contrasena,
      Correo
    } = req.body
    const SQL = `INSERT INTO usuarios(Nombre, Contrasena, Correo) VALUES (?, ?, ?)`
    const data = [Nombre, Contrasena, Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error ejecutando la consulta"})
    }else{
      res.json({mensaje : "Se registró el usuario"})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
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