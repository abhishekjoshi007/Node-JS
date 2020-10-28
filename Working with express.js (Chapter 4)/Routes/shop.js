const express=require('express');

//express.Router() is a function that we use.Its a mini express here
const router=express.Router();

router.get('/',(req,res,next) => {
    
    console.log('In The third Middleware');
    res.send('<h1>Hello From Express.js!</h1>')
    
});


//exporting router
module.exports=router;
