const bodyParser = require('body-parser'); 
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

const newRouter = require('./routes/new');
const mainRouter = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));

app.use(mainRouter);
app.use(newRouter);

app.use((req, res, next) => {
  res.status(404).render('404');
})

app.listen(3000);