var express = require('express');
var router = express.Router();

/* GET home page. */
/* 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

/* GET recipe */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const instr = ["Prep ingredients", "Mix ingredients", "???", "Profit"];
  const ingre = ["Water", "Salt", "Flour"];
  res.render('index', { name: id, ingredients: ingre, instructions: instr});
});
module.exports = router;
