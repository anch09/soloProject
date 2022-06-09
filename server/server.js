const express = require('express');
const app = express();
const path = require('path');
const imageRouter = require('./routes/imagesRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', imageRouter);

app.use((req, res) => res.status(404).send('This page doesn\'t exist, please go back...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);

module.exports = app;