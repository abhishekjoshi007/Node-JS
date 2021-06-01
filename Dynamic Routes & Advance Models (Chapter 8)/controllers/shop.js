const Product = require('../models/product');
const Cart= require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

//for single product detail 
exports.getProduct = (req, res, next) => {
  //dynamic route name should be same
  const prodId=req.params.productid;
  //console.log(prodId);
  Product.findbyid(prodId , product => {
    //console.log(products);
    res.render('shop/product-detail',{
      product :product,
      pageTitle:product.title,
      path:'/products'
    });
  }); 
  
};


exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  
  //here name is used from the input filed
  const prodId= req.body.productid;
  
  //getting data of product
  Product.findbyid(prodId,(product) => {
    Cart.addProduct(prodId,product.price)
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
