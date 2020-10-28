const express=require('express');

//express.Router() is a function that we use.Its a mini express here
const router=express.Router();

//replacing app with router
router.get('/add-product',(req,res,next) => {
    
    console.log('In The secound Middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    
});

router.post('/product',(req,res,next) => {
    
    console.log(req.body);
    
    //for easy redirecting
    res.redirect('/');
});

//exporting router
module.exports=router;
