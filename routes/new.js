const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/new', (req, res, next) => {
  res.render('new', { title: 'New' });
});

module.exports = router;
