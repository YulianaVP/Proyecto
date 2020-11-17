const {Router} = require('express')
const router = Router()
const {connection} = require ('./../db/mysql_pool')


router.get('/docente', (req, res) => {
  connection.query("SELECT * FROM docente", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/evaluacion/:id', (req, res) => {})

router.post('/evaluacion', (req, res) => {})

router.put('/evaluacion/id', (req, res) => {})

router.delete('/evaluacion/:id', (req, res) => {})

module.exports = router