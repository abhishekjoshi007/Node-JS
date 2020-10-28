const express=require('express')

const bodyparser=require('body-parser');

//importing routes (admin.js) 
const adminRoutes=require('./Routes/admin')

//importing routes (shop.js) 
const shopRoutes=require('./Routes/shop')

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

//using body parser it register a middleware which is used to parsed the incoming request bodies
// (urlencoded) and next is by default called.
//It does body parsering and using package bodyparser.Using for (console.log(req.body);)
app.use(bodyparser.urlencoded({extended:false}));

//fitering out certain request through ('/')
//here app.use fire for both post and get request
//For particular firing use app.get or app.post 

app.use(adminRoutes);
app.use(shopRoutes);


// app.use('/',(req,res,next) => {
    
//     console.log('This always RUNS');
//     next();
// });



// const server=http.createServer(app); 
// server.listen(5000);
//or use

app.listen(5000);