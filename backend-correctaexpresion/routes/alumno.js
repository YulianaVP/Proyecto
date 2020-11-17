const { Router } = require('express')
const router = Router()
const { connection } = require('./../db/mysql')


router.get('/alumno', (req, res) => {
  connection.query("SELECT * FROM alumno", (error, result, fields) => {
    res.json(result)
  })
})

router.post("/alumno", (req, res) => {

})

router.put("/alumno/:id", (req, res) => {

})

router.delete("/alumno/:id", (req, res) => {

})

router.get("/alumno/:id", (req, res) => {

})

module.exports = router