const boom = require('@hapi/boom');

const { models } = require('../../../lib/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return { data };
  }

  async getAll() {
    const response = await models.User.findAll();
    return response;
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
