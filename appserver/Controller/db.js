var config = require("../../config/clmita.json")
var connstring = `postgresql://root@${config.cockroachDB_IP}:${config.cockroachDB_port}/${config.cockroachdb_name}?sslmode=disable`
const { Client } = require("pg");
var client;
//console.log(connstring);
// Run the transactions in the connection pool
(async () => {
  /* var connectionString = connstring;
  var config = connectionString;
  config.port = cal_config.cockroachDB_port;
  config.database = cal_config.cockroachdb_name;*/
  //var config = require("../../config/clmita.json")
  const client = new Client({
    user: 'root',
    host: `${config.cockroachDB_IP}`,
    database: `${config.cockroachdb_name}`,
    port: `${config.cockroachDB_port}`
  })
  client.connect() 

  /* client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  }) */


})().catch((err) => console.log(err.stack));

module.exports.addtemp = function(req, res){
  //console.log(req.body.temp)
  const client = new Client({
    user: 'root',
    host: `${config.cockroachDB_IP}`,
    database: `${config.cockroachdb_name}`,
    port: `${config.cockroachDB_port}`
  })
  client.connect() 
  const query = {
    text: 'INSERT INTO temps(temp) VALUES($1)',
    values: [`'${req.body.temp}'`],
  }
  // callback
  client.query(query, (err, data) => { 
    if (err) {
      console.log(err.stack)
    } else {
      res.json(data)
    }
  })

}