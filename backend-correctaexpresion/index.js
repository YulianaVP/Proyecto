const express = require('express')
const app = express()

app.get ('/Correcta Expresión', function(req, res){
    res.send('Correcta Expresión');
})

app.listen(8080, function(){
    console.log("Bieenvenidos a Correcta Expresión")
})