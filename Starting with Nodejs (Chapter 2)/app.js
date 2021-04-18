/*
Now the web works like this, we get got a user, a client,
maybe you sitting in front of your browser, visiting a webpage or already being on a webpage and submitting
a form,so you're interacting with webpages.Let's say you are visiting it,so you're entering some url into your browser
and what happens behind the scenes is actually that the browser reaches out to some domain name servers
to look that domain up because this domain is not really the address of your server,
it's basically an encoded human readable version of that address you could say, your server itself has just an
IP address but this is just some technical thing behind the scenes,
in the end you enter this url and it will lead to some server. You therefore or the browser therefore
sends a request to that server with that given IP address I mentioned, so the IP address belonging to that domain.
Now thus far that's all interesting but now we reach the part where nodejs comes into play, where your
nodejs code matters.You write the code that runs on that computer in the Internet which has that IP address,
you write the code that spins up that server which is able to handle the incoming request and do something
with it.
*/

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
