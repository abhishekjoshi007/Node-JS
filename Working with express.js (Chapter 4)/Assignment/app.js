const express=require('express');

const bodyparser=require('body-parser') ;

const path=require('path');

const adminroutes=require('./routes/admin');

const shoproutes=require('./routes/shop');



const app=express();

app.use(adminroutes);
app.use(shoproutes);

app.use((req,res,next) =>
{

    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


app.listen(3000);
