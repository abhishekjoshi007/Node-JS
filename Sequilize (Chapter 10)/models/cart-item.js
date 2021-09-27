const Sequelize= require('sequelize');
const sequelize= require('../util/database');

const CartItem=sequelize.define('cartItem', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNUll: false,
    primaryKey: true
  }
  ,
  //each cart item is essentially a combination of a product and the ID of the cart in which this product lies and the quantity.
  quantity: Sequelize.INTEGER
})
 module.exports=CartItem; 
