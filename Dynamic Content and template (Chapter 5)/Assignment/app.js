const express=require('express')
const bodyParser = require('body-parser');
const path=require('path');

const app=express();

app.set('view engine','ejs');
app.set('views','views');

const admindata=require('./routes/admin');
const usern=require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(admindata.routes);
app.use(usern);



app.listen(5000);




