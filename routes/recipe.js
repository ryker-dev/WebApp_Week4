var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
  res.json({
    name: id,
    instructions: ["Prep ingredients", "Mix ingredients", "???", "Profit"],
    ingredients: ["Water", "Salt", "Flour"]
  });
});

module.exports = router;
