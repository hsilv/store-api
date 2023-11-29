const express = require('express');
const router = require('./app');
const cors = require('cors');

const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
app.use(express.json());
const allowList = [
  'http://localhost:8080',
  'https://silva-ecommerce-api-19f34f3f17fe.herokuapp.com/',
  'http://localhost:3000',
];
const opt = {
  origin: (origin, callback) => {
    if (allowList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(opt));

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

router(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);
