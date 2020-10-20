const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')
    
router.get("/usuarios", (req, res) => {
    connection.query('SELECT * FROM actores',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.post ("/usuarios", (req, res) => {

})

router.put ("/usuarios/:id", (req, res) => {

})

router.delete ("/usuarios/:id", (req, res) => {

})

router.get ("/usuarios/:id", (req, res) => {

})

module.exports = router