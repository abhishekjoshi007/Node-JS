const products=[];

module.exports=class Product {
    constructor(t) {
        this.title = t;

    }
    //save is a function without function keyword
    save() {
        products.push(this);
    }

    //utility function (with static keyword we can directly call this method on class itself and not on an intanciated obj)

    static fetchAll() {
        return products;
    }
}