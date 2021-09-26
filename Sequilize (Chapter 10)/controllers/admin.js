const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null, title, imageUrl, description, price);
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect('/');
  //   })
  //   .catch(err => console.log(err));

  //Create creates a new element based on that model and store it to our db
  //Build creates a new element based on that model but only in js abd then we need to save it manually
  
  //createProduct method is a sequelize special method
  //this create a connected model
  req.user.createProduct({
    title:title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }).then(result => {
    //console.log(result);
    console.log('Product Created');
    res.redirect('/admin/products');
  } ).catch(err => {
    console.log(err);
  })
};

//first load the product to get edited 
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

//gets called once we submit our edit
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  //we are using prod model
  //first find the element in db that you want to change
  Product.findByPk(prodId)
  //this will not reflect the changes in db
  //it will reflect changes in our local app
  .then(product => {
    product.title= updatedTitle;
    product.price= updatedPrice;
    product.description= updatedDesc;
    product.imageUrl=updatedImageUrl
    //to reflect changes in db we need to 
  return product.save();
  })
  //to avoid nesting of promise we are adding then block here and returning save product above
  .then(result => {
    console.log("updated Product")
    res.redirect('/admin/products');
  }) 
  //this  can cath error for both block
  .catch(err => console.log(err));
  
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  //Product.deleteById(prodId);
  //we dont have delete by id in sequelize
  // we have destroy in sequelize
 Product.findByPk(prodId)
 .then(product => {
   return product.destroy();
 })
 .then (result => {
   console.log("product destroyed");
   res.redirect('/admin/products');
 })
 .catch(err => console.log(err));

};
