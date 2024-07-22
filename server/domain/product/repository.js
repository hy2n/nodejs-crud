const Product = require('./model');
const pool = require('../../global/db');

class ProductReposiroty {
    async findAll() {
        const [product] = await pool.query("SELECT * FROM `product`");
        return product.map(row => new Product(item_id))
    }
}

module.exports = ProductReposiroty;