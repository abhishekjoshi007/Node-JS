const http=require('http');

//importing modeule (requesthandler from routes)
const routes= require('./routes'); 

//using functionality from hhtp
const server=http.createServer(routes); 

server.listen(3000);
