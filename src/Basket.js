class Basket {

    constructor(basketItems = [],) {
        this.basketItems = []
    }

    addToBasket(item) {
        this.basketItems.push(item);
    }

    removeFromBasket(item) {
        const index = this.basketItems.indexOf(item)

        this.basketItems.splice(index, 1);
    }
}