const express = require('express');
const UserService = require('../controller/user.service');

const router = express.Router();
const User = new UserService();

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.get(req.params.id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.updateWhole(req.params.id, req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const user = await User.update(req.params.id, req.body);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.delete(req.params.id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
