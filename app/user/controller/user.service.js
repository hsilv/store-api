const boom = require('@hapi/boom');

const { models } = require('../../../lib/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    try {
      const newUser = await models.User.create(data);
      return newUser;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw boom.conflict('Email already exists');
      } else {
        throw boom.badRequest(error.original.message);
      }
    }
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
    const response = await this.get(id);
    const updatedUser = await response.update(data);
    return updatedUser;
  }

  async update(id, data) {
    const response = await this.get(id);
    const updatedUser = await response.update(data);
    return updatedUser;
  }

  async delete(id) {
    const response = await this.get(id);
    await response.destroy();
    return { id: response.id };
  }
}

module.exports = UserService;
