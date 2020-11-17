const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql_pool')
    
    
router.get("/niveles", (req, res) => {
    connection.query('SELECT * FROM niveles',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.post ("/niveles", (req, res) => {

})

router.put ("/niveles/:id", (req, res) => {

})

router.delete ("/niveles/:id", (req, res) => {

})

router.get ("/niveles/:id", (req, res) => {

})

module.exports = router