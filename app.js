const bodyParser = require('body-parser'); 
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.listen(3000);