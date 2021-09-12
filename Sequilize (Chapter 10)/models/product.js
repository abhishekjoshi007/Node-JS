const Sequelize = require('sequelize');
//importing Db connection
const sequelize = require('../util/database');

//First We need to define model that will be managed by sequelize. it will not be define as class as we did it before. 
//first arg define model name and sec arg define the structure of the model
const Product = sequelize.define('product' , {
 id: {
   type: Sequelize.INTEGER,
   autoIncrement: true,
   allowNull: false,
   primaryKey: true
 },
 title: Sequelize.STRING,
 price: {
  type: sequelize.DOUBLE,
  allowNull: false
 },

 imageUrl: {
  type: Sequelize.STRING,
  allowNull: false
  
 },

 description :{
  type: Sequelize.STRING,
  allowNull: false,
   
 }
});

module.exports = Products;