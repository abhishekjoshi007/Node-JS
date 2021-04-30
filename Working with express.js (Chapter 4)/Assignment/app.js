const express=require('express');

const adminroutes=require('./routes/admin');

const shoproutes=require('./routes/shop');

const app=express();

app.use(adminroutes);
app.use(shoproutes);


app.listen(3000);
