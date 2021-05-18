const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// after ":" we have dynamic route
// /products/detail is a normal route 
// if you put /products/detail after /products/:productID we will not get /products/detail
// coz itsd been already been fire
router.get('/products/:productID', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;