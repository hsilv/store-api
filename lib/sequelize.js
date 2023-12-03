/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupDatabase = require('../app/db');

const USER = encodeURIComponent(config.databaseUser);
const PASSWORD = encodeURIComponent(config.databasePassword);
const DB_NAME = encodeURIComponent(config.databaseName);
const HOST = encodeURIComponent(config.databaseHost);
const PORT = encodeURIComponent(config.databasePort);

const connectionString = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;


const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  logging: config.env === 'development' ? console.log : false,
});

setupDatabase(sequelize);

sequelize.sync();

module.exports = sequelize;
