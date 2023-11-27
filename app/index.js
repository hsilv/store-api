const productsRouter = require('./products/routes/products.js');

function useProducts(app) {
  app.use('/products', productsRouter);
}

module.exports = useProducts;