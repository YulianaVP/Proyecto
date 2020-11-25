const {Router} = require('express')
const router = Router()
const {connection} = require('../db/mysql_pool')


router.get('/respuestas', (req, res) => {
  connection.query("SELECT * FROM respuestas", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/respuestas/:id', (req, res) => {})

router.post('/respuestas', (req, res) => {})

router.put('/respuestas/id', (req, res) => {})

router.delete('/respuestas/:id', (req, res) => {})

module.exports = router