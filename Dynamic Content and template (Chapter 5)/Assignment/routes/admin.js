const express=require('express');
const path=require('path');

const router=express.Router();

const un=[];

router.get('/', (req,res,next )=> {

    res.render('admin',{pageTitle : 'Add User'});
});

router.post('/add-user',(req,res,next )=> {
    un.push({name: req.body.username});
    res.redirect('/user')
} );

//module.exports=router;
exports.routes=router;
exports.username=un;
