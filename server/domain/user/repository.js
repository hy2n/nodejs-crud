const User = require('./model');
const pool = require('../../global/db');

class UserRepository {
    async findAll() {
        const [users] = await pool.query("SELECT * FROM `user`");
        return users.map(row => new User(row.name,row.address,row.phone_number,row.user_id,row.pw_hash));
    }
    async deleteById(id) {
        const [result] = await pool.query('DELETE FROM `user` where `order_id` = ?', [id]);
        if (result.affectedRows === 0 ) return null;
        return true;
    }
    async updateById(id,data) {
        if (!data.name || !data.address ||!data.phone_number) return null;
        const [result] = await pool.query('UPDATE `user` SET `name` = ?, `address` = ?, `phone_number` = ?  where `user_id` = ?' , 
            [data.name,data.address,data.phone_number,id]);
        if (result.affectedRows === 0 ) return null;
        return true;
    }
    async addUser(data) {
        if (!data.name||!data.address||!data.phone_number||!data.pw_hash) return null;
        const [rows] = await pool.query("INSERT INTO `user` (user_id,name,address,phone_number,pw_hash)  VALUES (?,?,?,?,?)",
            [uuidv4(),data.name,data.address,data.phone_number,data.pw_hash]);
        if (rows.length === 0) return null;
        else return true
    }
}

module.exports = new UserRepository();