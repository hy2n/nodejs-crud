const Product = require('./model');
const pool = require('../../global/db');
const { v4: uuidv4 } = require('uuid');

class ProductReposiroty {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM `product`");
        if (rows.length === 0) return null;
        return rows.map(row => new Product(row.item_id,row.price,row.name,row.info,row.moq))
    }
    async findWithId(id) {
        const [rows] = await pool.query("SELECT * FROM `product` where `item_id`=?",[id]);
        if (rows.length === 0) return null;
        return rows.map(row => new Product(row.item_id,row.price,row.name,row.info,row.moq))
    }
    async updateWithId(id,data) {
        if (!data.price||!data.name||!data.info||!data.moq) return null;
        const [rows] = await pool.query("UPDATE `product` SET `price`=?,`name`=?,`info`=?,`moq`=? where `item_id`=?",[data.price,data.name,data.info,data.moq,id]);
        if (rows.length === 0) return null;
        else return true;
    }
    async deleteWithId(id) {
        const [rows] = await pool.query("DELETE FROM `product` where `item_id`=?",[id]);
        if (rows.length === 0) return null;
        else return true
    }
    async addProduct(data) {
        if (!data.price||!data.name||!data.info||!data.moq) return null;
        const [rows] = await pool.query("INSERT INTO `product` (item_id,price,name,info,moq)  VALUES (?,?,?,?,?)",
            [uuidv4(),data.price,data.name,data.info,data.moq]);
        if (rows.length === 0) return null;
        else return true
    }
}

module.exports = new ProductReposiroty();