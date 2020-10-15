var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main.js')

const ctrlFood = require('../controllers/food.js')

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/favourite', ctrlFood.favouriteFood);
router.get('/list', ctrlFood.foodlist);

module.exports = router;
