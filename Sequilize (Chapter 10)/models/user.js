const Sequelize=require('sequelize');

const sequelize= require('../util/database');

//user is a model name and then we have defined the structure
const User= sequelize.define('user', {
id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
},
name: Sequelize.STRING,
email: Sequelize.STRING


});

module.exports= User;



