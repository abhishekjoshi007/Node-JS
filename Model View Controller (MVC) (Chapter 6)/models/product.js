// //const products=[];
// const fs=require('fs');
// //to construct a path which work on all os
// const path=require('path')

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'products.json'
//   );

// module.exports=class Product {
//     constructor(t) {
//         this.title = t;

//     }
//     //save is a function without function keyword
//     save() {
//         
//         const p= path.join(__dirname,
//             'data',
//             'products.json');

//         //to store product first read all the previous product
        
//         fs.readFile(p, (err,filecontent) => {
//             let products=[];
//             if(!err)
//             {
//                 // to json which is a helper object existing in vanilla nodejs,so you don't need to define this on your own
//                 // and there we have the parse method which takes incoming json and gives us back a javascript array or object 
//                 // or whatever is in the file
//                products=JSON.parse(filecontent);
//             }

//             //this refers to class use arrow fun with it.
//             products.push(this);

//             //writing back ton the file
//             fs.writeFile(p,JSON.stringify(products), (err) =>
//             {
//                 console.log(err);
//             })
//         });


//     }

//     //utility function (with static keyword we can directly call this method on class itself and not on an intanciated obj)

//     static fetchAll(cb) {

//         const p= path.join(__dirname,
//             'data',
//             'products.json'
//             );
//         fs.readFile(p , (err, filecontent ) => {

//             if(err)
//             {
//                 cb([]);
//             }

//             cb(JSON.stringify(filecontent));
//         })


//         return products;
//     }
// }

const fs = require('fs');
//to construct a path which work on all os
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

//cb is a helper function
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    //if you are saving elements in array use this 
//         //products.push(this);

//         //otherwise we will store it in a file for which path needs to be constructed

    getProductsFromFile(products => {
      products.push(this);
      //stringify method takes js obj and convert it to json
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

//utility function (with static keyword we can directly call this method on class itself and not on an intanciated obj)
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
