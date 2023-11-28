const express = require('express');
const router = require('./app');

const {logError, errorHandler } = require('./middleware/error.handler')

const app = express();
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

router(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello World! This is a new route');
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No limit or offset provided');
  }
});


app.use(logError);
app.use(errorHandler);
