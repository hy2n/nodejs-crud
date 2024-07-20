const order = require('./model');
const pool = require('../../global/db');

class OrderRepository {
    async findAll() {
        const [rows] = await pool.query("SELECT * FROM order")
    }
}