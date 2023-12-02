const productsRouter = require('./products/routes/products.routes.js');
const usersRouter = require('./user/routes/user.routes.js');

function useProducts(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
}

module.exports = useProducts;
