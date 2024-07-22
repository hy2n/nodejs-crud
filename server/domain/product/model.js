class product {
    constructor(item_id,price,name,info,moq) {
        this.item_id = item_id;
        this.price = price;
        this.name = name;
        this.info = info;
        this.moq = moq;
    }
}

module.exports = product;