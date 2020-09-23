const express = require('express')
const app = express()

app.get ('/Correctaexpresión', function(req, res){
    res.send('Correcta expresión');
})

app.listen(8080, function(){
    console.log("Bieeenvenidos a Correcta expresión")
})