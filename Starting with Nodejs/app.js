//creating a Server through Nodejs

/*
SOME CORE MODULES
1-http (hyper text transfer protocal)-helps in launching server and sending requests
2-https (hyper text transfer protocal secure)-helps in launching a SSL server
3-fs
4-path -for constructing path
5-os
*/

//importing http global files here 
const http=require('http');
const fs=require('fs');
//for core module we dont use ./
//for local we use ./ eg ./http

//using functionality from hhtp
const server=http.createServer((req,res) => //creating server here
{
  //console.log(req);
  //process.exit(); to exit the above process
  //console.log(req.url, req.method ,req.headers)
  
  const url=req.url;
  const method=req.method;
  if(url==='/')
  {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button</form></body>');
    res.write('</html>');
    return res.end(); 
  }

  if(url==='/message' && method ==='POST')
  {
   fs.writeFileSync('message.txt','DUMMY');
   res.statusCode=302;
   res.setHeader('Location','/');
   return res.end();
  }

  //sending response
  res.setHeader('Content-Type','text/html');
  
  //to write some data in response
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>hello</h1></body>');
  res.write('</html>');
  res.end();

}); 

/* 
<-----2nd method-------->
function rqlistener(req,res =>{

})

http.createServer(rqlistener)

<-----3rd method--------> 
http.createServer(function(req,res) 
{

}); 
*/

server.listen(3000);
