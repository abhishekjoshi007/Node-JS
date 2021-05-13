const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

//index page
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Index',
      path: 'All products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

//Cart page
exports.getCart = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/cart', {
      prods: products,
      pageTitle: 'cart',
      path: '/cart',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

//Checkout page
exports.getCheckout = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/checkout', {
      prods: products,
      pageTitle: 'checkout',
      path: '/checkout',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};