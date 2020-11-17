const {Router} = require('express')
const router = Router()
const {connection} = require ('./../db/mysql')


router.get('/preguntas', (req, res) => {
  connection.query("SELECT * FROM preguntas", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/preguntas/:id', (req, res) => {})

router.post('/preguntas', (req, res) => {})

router.put('/preguntas/id', (req, res) => {})

router.delete('/preguntas/:id', (req, res) => {})

module.exports = router