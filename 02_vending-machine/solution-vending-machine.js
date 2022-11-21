/* eslint-disable no-unused-vars */

class VM {
    constructor(inventory) {
        this.inventory = inventory;
    }

    sale(itemID) {
        this.inventory[itemID].stock = this.inventory[itemID].stock - 1;
        return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
    }

    stockTotal() {
        let total = Object.values(this.inventory).reduce((acc, value) => {
            acc += value.stock;
            return acc;
        }, 0);
        if (total > 0) {
            return `${total} item(s)`;
        }
        else {
            return 'Out of Stock';
        }
    }
}
