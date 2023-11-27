const express = require('express');
const { ProductService } = require('../controller/products.service.js');

const router = express.Router();
const Products = new ProductService();

router.post('/', (req, res) => {
  const product = Products.createProduct(req.body);
  res.json(product);
});

router.get('/', (req, res) => {
  const products = Products.getProducts();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = Products.getOneProduct(req.params.id);
  res.json(product);
});

router.put('/:id', (req, res) => {
  const product = Products.updateTotalProduct(req.params.id, req.body);
  res.json(product);
});

router.patch('/:id', (req, res) => {
  const product = Products.updateProduct(req.params.id, req.body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const serviceResponse = Products.deleteProduct(req.params.id);
  res.json({ message: 'Product deleted', ...serviceResponse });
});

module.exports = router;
