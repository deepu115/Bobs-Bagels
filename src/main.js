const basket = {
    basketItems: [],
    addToBasket: function (item) {
        this.basketItems.push(item);
    },
    removeFromBasket: function (item) {
        const index = this.basketItems.indexOf(item)

        this.basketItems.splice(index, 1);

    }
}
module.exports = basket;