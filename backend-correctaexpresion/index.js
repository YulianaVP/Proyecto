const express = require("express")
const morgan = require("morgan")
const app = express()

//Middlewares
app.use(morgan("dev"))
app.use(express.json())

//ROUTES
app.use("/api/", require('./routes/usuarios'))
app.use("/api/", require('./routes/docente'))

app.get("/", (req, res) => {
  res.send("API CRUD")
})

app.get ('/Correctaexpresión', function(req, res){
    res.send('Correcta expresión');
})

app.set("puerto", 9001)

app.listen(app.get("puerto"), () => {
  console.log(`Servidor escuchando en el puerto ${app.get("puerto")}`)
})