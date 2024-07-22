const Order = require('./model');
const pool = require('../../global/db');

class OrderRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM `order`");
        return rows.map(row => new Order(row.user_id, row.item_id, row.time, row.order_id, row.pay, row.status)); //모든 객체
    }
    async findByUserId(id) {
        const [rows] = await pool.query('SELECT * FROM `order` where `user_id` = ?', [id]);
        if (rows.length === 0) return null;
        return rows.map(row => new Order(row.user_id, row.item_id, row.time, row.order_id, row.pay, row.status)); //모든 객체
    }
    async findByOrderId(id) {
        const [rows] = await pool.query('SELECT * FROM `order` where `order_id` = ?', [id]);
        if (rows.length === 0) return null;
        return rows.map(row => new Order(row.user_id, row.item_id, row.time, row.order_id, row.pay, row.status)); //모든 객체
    }
    async updateByOrderId(id,data) {
        if (!data.pay || !data.status) return null;
        console.log(data);
        const [result] = await pool.query('UPDATE `order` SET `pay` = ?, `status` = ? where `order_id` = ?' , 
            [data.pay,data.status,id]);
        if (result.affectedRows === 0 ) return null;
        return true;
    }
    async deleteByOrderId(id) {
        const [result] = await pool.query('DELETE FROM `order` where `order_id` = ?', [id]);
        if (result.affectedRows === 0 ) return null;
        return true;
    }
}

module.exports = new OrderRepository();