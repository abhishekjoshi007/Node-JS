//creating a Server through Nodejs

/*
SOME CORE MODULES
1-http (hyper text transfer protocal)-helps in launching server and sending requests
2-https (hyper text transfer protocal secure)-helps in launching a SSL server
3-fs-file system
4-path -for constructing path
5-os
*/

//importing http global files here 
const http=require('http');

//importing modeule (requesthandler from routes)
const routes= require('./routes'); 

//for core module we dont use ./
//for local we use ./ eg ./http


//using functionality from hhtp
const server=http.createServer(routes); //creating server here
  //console.log(req);
  //console.log(req.url, req.method ,req.headers) //few imp fields (handling request)
  //process.exit(); to exit the above process
  




server.listen(3000);
