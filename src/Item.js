

class Item {

    #id;
    constructor(id = 'bagel1') {
        this.#id = id
    }
    getId() {
        return this.#id;
    }
}

module.exports = Item;