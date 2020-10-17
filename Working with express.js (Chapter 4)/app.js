const express=require('express')

//creating expess application
//app is also a request handler
const app=express();

    // Expressjs is all about middleware.Middleware means that an incoming request is automatically 
    // funneled through a bunch of functions by expressjs,
    // so instead of just having one request handler, you will actually have a possibility of hooking
    // in multiple functions which the request will go through until you send a response.

    // This allows you to split your code into multiple blocks or pieces instead of having one huge function

// ̣middleware  
app.use((req,res,next) => {
    
    console.log('In The Middleware');
    
    //Allows then req to continue to the next middleware in line
    next();
});

app.use((req,res,next) => {
    
    console.log('In The secound Middleware');
    res.send('<h1>Hello From Express.js!</h1>')
    
});



// const server=http.createServer(app); 
// server.listen(5000);
//or use

app.listen(5000);