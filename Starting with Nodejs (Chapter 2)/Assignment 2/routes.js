const fs=require('fs');

const requesthandler=(req,res) => 
{

    const url=req.url;
    const method=req.method;

    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button</form></body>');
        //action contain a url which is basically the url this request will generate automatically should be sent to
        res.write('</html>');
        return res.end(); 
    }

    if(url==='/message' && method==='POST')
    {
        const body=[];

        req.on('data' , (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () =>
        {
                 //Buffer is a global obj created by nodejs
     //we convert the incoming text to string with (tostring) utility method
     const parsedbody =Buffer.concat(body).toString();

     //we split it with[1] so we get the message only not a buffer.
     const message =parsedbody.split('=')[1];
    
     //sync stand for syncronous
     //sync here will block execution untill message file is not created which is not good for large file as it will take a lot of time.
     //fs.writeFileSync('message.txt',message);
      fs.writeFile('message.txt',message,(err) => {
      res.statusCode=302;

      //redirecting back to /
      res.setHeader('Location','/');
      return res.end();
        });
    });
}
    //sending response
  //setting value of header
  res.setHeader('Content-Type','text/html');
  
  //we use "res.write" to write some data in response
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Hello Welcome</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports=requesthandler; 