const {Router} = require('express')
const router = Router()
const {connection} = require ('./../db/mysql')


router.get('/docente', (req, res) => {
  connection.query("SELECT * FROM docente", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/puntaje/:id', (req, res) => {})

router.post('/puntaje', (req, res) => {})

router.put('/puntaje/id', (req, res) => {})

router.delete('/puntaje/:id', (req, res) => {})

module.exports = router