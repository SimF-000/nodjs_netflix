const express = require('express');
const router = express.Router();
const models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    
});

module.exports = router;
