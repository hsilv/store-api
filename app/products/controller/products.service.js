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

  createProduct(product) {
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

  getProducts() {
    return this.products;
  }

  getOneProduct(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  updateProduct(id, changes) {
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

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = { ProductService };
