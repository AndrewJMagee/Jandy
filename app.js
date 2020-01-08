const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (request, response){
  response.sendFile(path.join(__dirname, 'build/index.html'));
});


app.use('/', indexRouter);
app.use('/api/users', userRouter);

app.use(function(req, res, next) {
  res.status(404).send('404: Not found... Invalid URL reached');
});

module.exports = app;
