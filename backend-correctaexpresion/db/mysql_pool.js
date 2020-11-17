mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bv93agndbdg84r6en2ji-mysql.services.clever-cloud.com',
  user     : 'u8bvvpawzjtbvcix',
  password : '1BzZ8L1LxzxXKY8EbZRm',
  database : 'bv93agndbdg84r6en2ji'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}