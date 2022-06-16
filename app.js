const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/api/v1/dab', (req, res) => {
  res.status(200).json({ message: 'DAB is working', app: 'DAB API' });
});

app.post('/api/v1/dab', (req, res) => {
  res.send('Done');
});

module.exports = app;
