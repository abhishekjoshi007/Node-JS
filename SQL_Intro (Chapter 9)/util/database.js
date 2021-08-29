//importing mysql pacakage
const mysql=require('mysql2');

//connection through pool

//we have a query to run and then we get a new connection from that pool which manages multiple connections
//so that we can run multiple queries simultaneously because each query needs its own connection and once
//the query is done, the connection will be handed back into the pool and it's available again for a new query
//and the pool can then be finished when our application shuts down.

const pool= mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_scheme',
    password: 'QWERasdf!12345'
});

module.exports= pool.promise();