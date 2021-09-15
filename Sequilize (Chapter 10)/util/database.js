const Sequelize = require('sequelize');

//creating instance
//First Db name -> Username ->pass 
//dialect define the db that we are going to connect (Mysql, Mongodb etc)
//host is optional
const sequelize = new Sequelize('node_scheme', 'root', 'QWERasdf!12345', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

//with SQL
// const mysql=require('mysql2');
// const pool= mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_scheme',
//     password: 'QWERasdf!12345'
// });
// module.exports= pool.promise();