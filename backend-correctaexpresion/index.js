const express = require("express")
const morgan = require("morgan")
const app = express()

//Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('public'));

//ROUTES
app.use("/api/", require('./routes/alumno'))
app.use("/api/", require('./routes/docente'))
app.use("/api/", require('./routes/evaluación'))
app.use("/api/", require('./routes/grupos'))
app.use("/api/", require('./routes/niveles'))
app.use("/api/", require('./routes/preguntas'))
app.use("/api/", require('./routes/puntaje'))
app.use("/api/", require('./routes/respuestas'))
app.use("/api/", require('./routes/usuarios'))

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