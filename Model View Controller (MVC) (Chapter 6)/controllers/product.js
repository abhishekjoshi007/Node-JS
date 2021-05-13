//importing class
const Product=require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.putAddProduct = (req, res, next) => {
    //model class will call
    const product=new Product(req.body.title);
    // save function will be called in model
    product.save();
    res.redirect('/');
  };

  exports.getProducts=(req, res, next) => {
   //model file is called
    Product.fetchAll( (products) => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };