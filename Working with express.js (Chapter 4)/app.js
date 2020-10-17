const express=require('express')

const bodyparser=require('body-parser');

//creating expess application
//app is also a request handler
const app=express();

    // Expressjs is all about middleware.Middleware means that an incoming request is automatically 
    // funneled through a bunch of functions by expressjs,
    // so instead of just having one request handler, you will actually have a possibility of hooking
    // in multiple functions which the request will go through until you send a response.

    // This allows you to split your code into multiple blocks or pieces instead of having one huge function

// ̣middleware  

// app.use((req,res,next) => {
    
//     console.log('In The Middleware');
    
//     //Allows then req to continue to the next middleware in line
//     next();
// });

//using body parser it register a middleware (urlencoded) and next is by default called.
app.use(bodyparser.urlencoded({extended:false}));

//fitering out certain request through ('/')
app.use('/',(req,res,next) => {
    
    console.log('This always RUNS');
    next();
});

app.use('/add-product',(req,res,next) => {
    
    console.log('In The secound Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    
});

app.use('/product',(req,res,next) => {
    
    console.log(req.body);
    //for easy redirecting
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    
    console.log('In The third Middleware');
    res.send('<h1>Hello From Express.js!</h1>')
    
});

// const server=http.createServer(app); 
// server.listen(5000);
//or use

app.listen(5000);