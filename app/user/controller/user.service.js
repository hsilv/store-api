const boom = require('@hapi/boom');
const { getConnection } = require('../../../lib/postgres.conn');

class UserService{
  constructor () {}

  async create(data) {
    return { data }
  }

  async getAll() {
    const client = await getConnection();
    const response = await client.query('SELECT * FROM tasks');
    return response.rows;
  }

  async get(id) {
    return { id };
  }

  async updateWhole(id, data) {
    return { id, ...data };
  }

  async update(id, data) {
    return { id, ...data };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
