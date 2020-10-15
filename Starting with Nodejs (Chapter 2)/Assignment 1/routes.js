const fs=require('fs');

const routehandler=(req,res) => {

    const url=req.url;
    const method=req.method;

    // if(url === '/')
    // {
    //     res.write('<html>');
    //     res.write('<head><title>My first Page</title></head>');
    //     res.write('<body><h1>Hello Welcome</h1></body>');
    //     res.write('</html>');
    //     res.end();
    // }
    
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Form Page</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="UserName"><button type="submit">Send</button</form></body>');
        res.write('</html>');
        return res.end(); //it will come out of the function
    }

    if(url === '/create-user' && method === 'POST')
    {
        const body=[];

        req.on('data',(chunk) =>
        {
            body.push(chunk);
          
        })

        req.on('end',() => 
        {
            const parsedbody =Buffer.concat(body).toString();
            console.log(parsedbody.split('=')[1]);
            
            
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
        
    }
    

    if(url === '/user')
    {
           //to write some data in response
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        res.end();
    }
   
   
    
};

module.exports=routehandler;