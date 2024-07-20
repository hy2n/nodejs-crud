const Order = require('./model');
const pool = require('../../global/db');

class OrderRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM `order`");
        return rows.map(row => new Order(row.user_id, row.item_id, row.time, row.date, row.pay, row.status)); //모든 객체
    }
    async findByUser(id) {
        const [rows] = await pool.query('SELECT * FROM order where user_id = ?', [id]);
        if (rows.length === 0) return null;
        const row = rows[0]; // 0번째 객체로 선택
        return new Order(row.user_id, row.item_id, row.time, row.date, row.pay, row.status);
    }
}

module.exports = new OrderRepository();