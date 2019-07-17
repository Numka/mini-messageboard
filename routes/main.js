const express = require('express');
const router = express.Router();

const messages = [];

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()});
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  res.render('main', { title: 'Mini-messageboard', mes: messages });
});

module.exports = router;


//{ text: "Hi There!", user: "Amando", added: new Date()},
//{ text: "Hello World!", user: "Greg", added: new Date()}