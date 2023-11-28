const express = require('express');
const { ProductService } = require('../controller/products.service.js');

const router = express.Router();
const Products = new ProductService();

router.post('/', async (req, res) => {
  const product = await Products.createProduct(req.body);
  res.json(product);
});

router.get('/', async (req, res) => {
  const products = await Products.getProducts();
  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Products.getOneProduct(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await Products.updateTotalProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const product = await Products.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const serviceResponse = await Products.deleteProduct(req.params.id);
    res.json({ message: 'Product deleted', ...serviceResponse });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
