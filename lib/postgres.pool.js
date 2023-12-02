const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'silva',
  password: '12345',
  database: 'store',
});


module.exports = { pool };
