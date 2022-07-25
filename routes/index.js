const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
/* 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

/* GET recipe */
router.get('/', function(req, res, next) {
  const recipename = "pizza";
  fetch(`http://localhost:3000/recipe/${recipename}`)
  .then((response) => response.json())
  .then((data) => {
    res.render('index', { name: recipename, ingredients: data.ingredients, instructions: data.instructions});
  });
});

module.exports = router;
