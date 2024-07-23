const User = require('./model');
const pool = require('../../global/db');

class UserRepository {
    async findAll() {
        const [users] = await pool.query("SELECT * FROM `user`");
        return users.map(row => new User(row.name,row.address,row.phone_number,row.user_id,row.pw_hash));
    }
}

module.exports = new UserRepository();