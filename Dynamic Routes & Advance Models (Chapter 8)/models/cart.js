const { json } = require('body-parser');
const fs=require('fs');
const path=require('path');

//path construction
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports=class Cart{
    static addProduct(id , productPrice ) 
    {

        // Fetching the Previous cart
        fs.readFile(p, (err,filecontent) => {
            //if there is an error that means the cart is empty
            
            //creating new cart
            let cart={
                products: [],
                totalPrice:0
            };
            if(!err)
            {
              cart=JSON.parse(filecontent);
            }

            //analyzing the cart -> finding existinng product
            const existingProductIndex= cart.products.findIndex(prod => prod.id === id);
            const existingProduct=cart.products[existingProductIndex];
            let updatedProduct;
            //adding new product / increase quantity
            if(existingProduct)
            {
             updatedProduct={ ...existingProduct};
             updatedProduct.qty=updatedProduct.qty + 1;
             //fetching previous product
             cart.products=[...cart.products];
             //not adding , replacing the products
             cart.products[existingProductIndex]=updatedProducts;
            }
            else 
            {
                updatedProduct={ id:id ,qty:1};
                //updating the cart
                //replacing cart by present product
                cart.products=[...cart.products,updatedProduct]
            }
            //adding + to convert string to number
            cart.totalPrice= cart.totalPrice + +productPrice;
            
            //saving back
            fs.writeFile(p, JSON.stringify(cart),err => {
                console.log(err);
            })
        })

    }
}