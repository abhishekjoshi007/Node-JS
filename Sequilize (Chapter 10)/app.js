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

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//relaating model 
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

//sync basically syncs your models to the db by creating appropriate tables
//& if we have relations too & then we can listen to the result of this.
sequelize.sync({force:true}).then(result => {
    //console.log(result);
    app.listen(3000);
}).catch(err => {
    console.log(err);
}
)


