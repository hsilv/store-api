const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const sequelize = require('../../../lib/sequelize');
class ProductService {
  constructor() {
    this.products = [];
    this.initProducts(1000);
  }

  initProducts(quantity) {
    for (let i = 0; i < quantity; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async createProduct(product) {
    const newProduct = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

  async getOneProduct(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlocked) {
      throw boom.locked('Product is blocked');
    }
    return product;
  }

  async updateTotalProduct(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products[index] = {
      id: this.products[index].id,
      ...changes,
    };
    return this.products[index];
  }

  async updateProduct(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products[index] = {
      ...this.products[index],
      ...changes,
    };
    return this.products[index];
  }

  async deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = { ProductService };
