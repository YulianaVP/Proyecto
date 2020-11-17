const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql_pool')
    
router.get("/grupos", (req, res) => {
    connection.query('SELECT * FROM grupos',  (error, rows, fields) => {
        if(!error){
            res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.post ("/grupos", (req, res) => {

})

router.put ("/grupos/:id", (req, res) => {

})

router.delete ("/grupos/:id", (req, res) => {

})

router.get ("/grupos/:id", (req, res) => {

})

module.exports = router