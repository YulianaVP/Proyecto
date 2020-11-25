const {Router} = require('express')
const router = Router()
const {connection} = require('../db/mysql_pool')


router.get('/docente', (req, res) => {
  connection.query("SELECT * FROM docente", (error, result, fields)=> {
    res.json(result)
  }) 
})

router.get('/docente/:id', (req, res) => {})

router.post('/docente', (req, res) => {})

router.put('/docente/id', (req, res) => {})

router.delete('/docente/:id', (req, res) => {})

module.exports = router