//const products=[];
const fs=require('fs');
//to construct a path which work on all os
const path=require('path')

module.exports=class Product {
    constructor(t) {
        this.title = t;

    }
    //save is a function without function keyword
    save() {
        //if you are saving elements in array use this 
        //products.push(this);

        //otherwise we will store it in a file for which path needs to be constructed
    }

    //utility function (with static keyword we can directly call this method on class itself and not on an intanciated obj)

    static fetchAll() {
        return products;
    }
}