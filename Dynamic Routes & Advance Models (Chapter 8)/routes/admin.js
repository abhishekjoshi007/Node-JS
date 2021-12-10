const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST 
router.post('/add-product', adminController.postAddProduct);

//to edit Product
router.get('/edit-product/:productid', adminController.getEditProduct);

//for Editing product update button needs to update products
router.post('/edit-product',adminController.postEditProduct);

module.exports = router;
