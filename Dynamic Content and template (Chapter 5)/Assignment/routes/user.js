const express=require('express')
const path=require('path');

const admin=require('./admin');

const router=express.Router();

router.get('/user',(req,res,next )=> {
    const username=admin.username;
    res.render('user',{pageTitle: 'User',user: username});
} );

module.exports=router;