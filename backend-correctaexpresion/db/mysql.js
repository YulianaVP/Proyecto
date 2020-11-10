  
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bv93agndbdg84r6en2ji-mysql.services.clever-cloud.com',
  user     : 'u8bvvpawzjtbvcix',
  password : '1BzZ8L1LxzxXKY8EbZRm',
  database : 'bv93agndbdg84r6en2ji'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}