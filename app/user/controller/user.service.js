const boom = require('@hapi/boom');

const { models } = require('../../../lib/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async getAll() {
    const response = await models.User.findAll();
    return response;
  }

  async get(id) {
    const response = await models.User.findByPk(id);
    if (!response) {
      throw boom.notFound('User not found');
    }
    return response;
  }

  async updateWhole(id, data) {
    const response = await models.User.findByPk(id);
    if (!response) {
      throw boom.notFound('User not found');
    }
    const updatedUser = await response.update(data);
    return updatedUser;
  }

  async update(id, data) {
    const response = await models.User.findByPk(id);
    if (!response) {
      throw boom.notFound('User not found');
    }
    const updatedUser = await response.update(data);
    return updatedUser;
  }

  async delete(id) {
    const response = await models.User.findByPk(id);
    if (!response) {
      throw boom.notFound('User not found');
    }
    console.log(response);
    await response.destroy();
    return response;
  }
}

module.exports = UserService;
