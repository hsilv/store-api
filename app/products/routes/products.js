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
  const product = Products.updateProduct(req.params.id, req.body);
  res.json(product);
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: `Product ${req.params.id}`,
  });
});

module.exports = router;
