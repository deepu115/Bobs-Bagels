//NEED TO CREATE INSTANCE OF CLASS TO ACTUALLY USE IT

//const Item = require('./Item');

class Basket {

    constructor(basketItems = [], maxCapacity = 1) {
        this.basketItems = [];
        this.maxCapacity = 1;
    }

    addToBasket(item) {
        if (this.basketItems.length < this.maxCapacity) {
            this.basketItems.push(item);
        }

    }

    removeFromBasket(item) {
        const index = this.basketItems.indexOf(item)

        this.basketItems.splice(index, 1);
    }

    isBasketFull() {
        return this.basketItems.length === this.maxCapacity;
    }

    increaseBasketCapacityTo(num) {
        if (typeof num === 'number' && num > this.maxCapacity)
            this.maxCapacity = num;
    }

    itemExists(item) {
        return this.basketItems.indexOf(item) !== -1;
    }
}


module.exports = Basket;    
