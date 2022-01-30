const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  // Product.fetchAll()
  //   .then(([rows, fieldData]) => {
  //     res.render('shop/product-list', {
  //       prods: rows,
  //       pageTitle: 'All Products',
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));

  Product.findAll()
  .then(products => {
    res.render('shop/product-list', {
             prods: products,
             pageTitle: 'All Products',
             path: '/products'
           });
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findById(prodId)
  //   .then(([product]) => {
  //     res.render('shop/product-detail', {
  //       product: product[0],
  //       pageTitle: product.title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));


 //-------Method 1--------
    // Product.findByPk(prodId)
    // .then(product => {
    //   res.render('shop/product-detail', {
    //     product: product,
    //     pageTitle: product.title,
    //     path: '/products'
    //   });
    // })
    // .catch(err => console.log(err));

//-------Method 2 (Wher Clause)--------
    Product.findAll({where :{id: prodId}})
    .then(product => {
      res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product[0].title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  // Product.fetchAll()
  //   .then(([rows, fieldData]) => {
  //     res.render('shop/index', {
  //       prods: rows,
  //       pageTitle: 'Shop',
  //       path: '/'
  //     });
  //   })
  //   .catch(err => console.log(err));

  Product.findAll()
  .then(products => {
    // res.render('shop/index', {
    //          prods: products,
    //          pageTitle: 'Shop',
    //          path: '/'
    //        });
    console.log(products);
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  req.user
  .getCart()
  .then(cart => {
    //cart is associated with products in aap.js
    return cart
    .getProducts()
    .then(products => {
      res.render('shop/cart', {
              path: '/cart',
              pageTitle: 'Your Cart',
              products: products
            });
    })
    .catch(err => console.log(err)); 
    //console.log(cart);
  })
  .catch(err =>
    console.log(err)
  );
  // Cart.getCart(cart => {
  //   Product.fetchAll(products => {
  //     const cartProducts = [];
  //     for (product of products) {
  //       const cartProductData = cart.products.find(
  //         prod => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     }
  //     res.render('shop/cart', {
  //       path: '/cart',
  //       pageTitle: 'Your Cart',
  //       products: cartProducts
  //     });
  //   });
  // });

};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
  .getCart()
  .then(cart => {
    
  })
  .catch(err => console.log(err));
  
  // Product.findById(prodId, product => {
  //   Cart.addProduct(prodId, product.price);
  // });
  // res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
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
