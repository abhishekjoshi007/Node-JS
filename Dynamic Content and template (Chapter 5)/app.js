const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs=require('express-handlebars');
const app = express();

//registering new template engine (Hbs)
//app.engine('hbs',expressHbs({layoutsDir:'views/layouts/' , defaultLayout:'main-layout', extname:'hbs'}));

// //telling experess that i am registering template engine pug
// app.set('view engine', 'hbs');
// //view  allows us to tell express where to find these dynamic views.
// app.set('views','views')


// telling experess that i am registering template engine pug
// app.set('view engine', 'pug');
// view  allows us to tell express where to find these dynamic views.
// app.set('views','views')

//telling experess that i am registering template engine pug
app.set('view engine', 'ejs');
//view  allows us to tell express where to find these dynamic views.
app.set('views','views')



const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { title } = require('process');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render('404',{pageTitle: 'No Page Found'});
});

app.listen(3000);
