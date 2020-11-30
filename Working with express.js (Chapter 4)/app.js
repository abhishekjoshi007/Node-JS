const express=require('express')

const bodyparser=require('body-parser');

//importing routes (admin.js) 
const adminRoutes=require('./Routes/admin')

//importing routes (shop.js) 
const shopRoutes=require('./Routes/shop')

const path=require('path');

//creating expess application
//app is also a valid request handler
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
       
       //for sending res
       //res.send('html here');

// });

//using body parser it register a middleware which is used to parsed the incoming request bodies
// (urlencoded) and next is by default called.
//It does body parsering and using package bodyparser.Using for (console.log(req.body);)
app.use(bodyparser.urlencoded({extended:false}));

//we need to serve file statically like (css files) simply means not handled by express js router
//or other middleware but instead directly forwarded to the system. 
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'publicview')));


//fitering out certain request through ('/')
//app.use will fire for both post and get request
//For particular firing use app.get or app.post 

//calling router file.
app.use(adminRoutes);
app.use(shopRoutes);

//404 error page
app.use((req,res,next) =>
{

    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

//app.use is a express defined method. which add a middleware
//which has an array of request.
// app.use('/',(req,res,next) => {
    
//     console.log('This always RUNS');
//     next();
// });

// const server=http.createServer(app); 
// server.listen(5000);

//or use

app.listen(5000);