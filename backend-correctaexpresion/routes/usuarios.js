const { Router } = require("express")
const router = Router()
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const {connection} = require('../db/mysql_pool')

app.use(express.static('public'));

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

router.post ("/usuarios/subir-imagen-perfil", cargador.single('imagen_perfil'), async(req, res) => {
  if(req.file){
    const {id} = req.body
    const response = await connection.query('UPDATE usuario SET imagen-perfil = ? WHERE id = ?', [JSON.stringify(req.file), id])
    res.json({mensaje: 'El archivo fue cargado exitosamente', archivo : {ruta : 'uploads/' + req.file.filename}})
  }else{
    res.json({mensaje : 'El archivo no se cargo'})
  }
})

router.put ("/usuarios/:id", (req, res) => {

})

router.delete ("/usuarios/:id", (req, res) => {

})

router.get ("/usuarios/:id", (req, res) => {

})

module.exports = router