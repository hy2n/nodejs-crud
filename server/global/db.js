const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'app',
  password: '0000',
  database: 'crud-test'
});

module.exports = pool;