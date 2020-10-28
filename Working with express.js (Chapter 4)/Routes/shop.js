const express=require('express');

//core module no need to install
const path=require('path')

//express.Router() is a function that we use.Its a mini express here
const router=express.Router();

router.get('/',(req,res,next) => {
    
    console.log('In The third Middleware');
    //res.send('<h1>Hello From Express.js!</h1>')
    
    //sending html file
    //__dirname holds the absolute path on our os to this project folder.
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
    
});


//exporting router
module.exports=router;
