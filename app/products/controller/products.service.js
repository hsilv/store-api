const { faker } = require('@faker-js/faker');

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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async getOneProduct(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async updateTotalProduct(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
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
      throw new Error('Product not found');
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
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = { ProductService };
