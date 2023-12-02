const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.databaseUser);
const PASSWORD = encodeURIComponent(config.databasePassword);
const DB_NAME = encodeURIComponent(config.databaseName);
const HOST = encodeURIComponent(config.databaseHost);
const PORT = encodeURIComponent(config.databasePort);

const connectionString = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;

const pool = new Pool({ connectionString });


module.exports = { pool };
