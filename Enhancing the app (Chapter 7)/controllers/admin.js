const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {

    //Pay attention at name filed case sensitive
    const title=req.body.title;
    const ImageUrl=req.body.ImageUrl;
    const price=req.body.price;
    const description=req.body.description;
    

    const product = new Product(title, ImageUrl, price, description);
    product.save();
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'admin/products',
        path: 'Admin products',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };