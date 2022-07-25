const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const port = process.env.PORT || '3000';

/* GET home page. */
/* 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

/* GET recipe */
router.get('/:id', function(req, res, next) {
  const recipename = req.params.id;
  fetch(`http://localhost:${port}/recipe/${recipename}`)
  .then((response) => response.json())
  .then((data) => {
    res.render('index', { name: recipename, ingredients: data.ingredients, instructions: data.instructions});
  });
});

module.exports = router;
