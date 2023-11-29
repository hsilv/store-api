const productsRouter = require('./products/routes/products.routes.js');

function useProducts(app) {
  app.use('/products', productsRouter);
}

module.exports = useProducts;
