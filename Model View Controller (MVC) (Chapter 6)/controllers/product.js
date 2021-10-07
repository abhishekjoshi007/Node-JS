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
    //as soon as this is called constructor got invoked
    const product=new Product(req.body.title);
    // save function will be called in model
    product.save();
    res.redirect('/');
  };

  exports.getProducts=(req, res, next) => {
   
   //here prods is the key which will help in iterating loop in shop view.
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