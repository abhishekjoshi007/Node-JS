const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product= require('./models/product');
const User= require('./models/user');

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
        req.user=user;
        next();
    })
    .catch(err => console.log(err));
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//relating models
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

//sync basically syncs your models to the db by creating appropriate tables
//& if we have relations too & then we can listen to the result of this.
sequelize.sync()
.then(result => {
    return User.findByPk(1);
   })
.then(user => {
    if(!user)
    {
        return User.create({name:'Abhi' , email : 'xyz@gmail.com'});
    }
    return user;
})
.then(user => {
    //
    console.log(user);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
}
)


