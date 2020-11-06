const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

//improting admin file for product list
const adminData=require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('shop.js',adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  //We get our admin data with the products,so let's actually take these products out of admin 
  //data products and now we want to pass that into our template
  const product=adminData.products;

  //injecting data into our template so that we can use it in this template file and somehow output it there.
  //check second argument in res.render
  res.render('shop',{prods: product, pageTitle: 'Shop',path:'/',hasprods:product.length > 0});
});

module.exports = router;
