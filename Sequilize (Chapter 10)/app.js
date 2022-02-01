const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');
const Product= require('./models/product');
const User= require('./models/user');
const Cart= require('./models/cart');
const CartItem= require('./models/cart-item');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//registering a middleare because I want to store that user in my request so that I can use it from anywhere in my app conveniently.
app.use((req,res,next) => {
    User.findByPk(1)
    .then(user => {
        //imp
        //sequelize obj is stored here not js obj.
        req.user=user;
        next();
    })
    .catch(err => console.log(err));
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//relating models

//1st arg define the relation ,2nd arg define how relation is managed 
//cascade means if we del a user the deletion will be their in his products as well
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
//through tell us where the connection to be stored

//sync basically syncs your models to the db by creating appropriate tables
//& if we have relations too & then we can listen to the result of this.

//sequelize.sync({force: true}) means it will overwrite the info in db
sequelize
//.sync({force:true})
.sync()
.then(result => {
    //finding a dummy user
    return User.findByPk(1);
   })
.then(user => {
    //if we dont get any user then we will create one
    if(!user)
    {
        //here returning promise
        User.create({name:'Abhi' , email : 'xyz@gmail.com'});
    }
    //here returning obj
    return user;
})
.then(user => {
    return user.createCart();
    // console.log(user);
    // app.listen(3000);
})
.then(cart => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});



