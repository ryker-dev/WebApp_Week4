var express = require('express');
var router = express.Router();

/* GET recipe json. */
router.get('/:food', function(req, res, next) {
    const food = req.params.food;
  res.json({
    name: food,
    instructions: ["Prep ingredients", "Mix ingredients", "???", "Profit"],
    ingredients: ["Water", "Salt", "Flour"]
  });
});

module.exports = router;
