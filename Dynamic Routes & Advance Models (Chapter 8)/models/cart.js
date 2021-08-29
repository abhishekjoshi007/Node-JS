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

            // Because for this lecture, the first product he adds is new. So the QTY field would be set during the first iteration of the IF Statement, correct? 
            // So that's why the QTY updates the second time he adds the product.

            // Bingo. It goes like this:
            // 1. Does the product we are adding already exist in our cart?
            // 2. If no, create an object with an ID set to the product's ID and a quantity set to 1.
            // 3. If yes, increment the existing object's quantity by 1.
            
            // I think what most students get confused by is the fact that we're creating a new object instead of using the instance of the product model.

            //adding + to convert string to number
            cart.totalPrice= cart.totalPrice + +productPrice;
            
            //saving back
            fs.writeFile(p, JSON.stringify(cart),err => {
                console.log(err);
            })
        })

    }
}