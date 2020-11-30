const express=require('express');

//core module no need to install
//for serving html file 
const path=require('path')

//express.Router() is a function that we use.Its a mini express app here
const router=express.Router();

//replacing app with router
router.get('/add-product',(req,res,next) => {
    
    console.log('In The secound Middleware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    
});

router.post('/product',(req,res,next) => {
    
    console.log(req.body);
    
    //for easy redirecting
    res.redirect('/');
});

//exporting router
module.exports=router;
