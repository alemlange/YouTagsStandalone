var express = require('express');
var router = express.Router();

const autosuggestController = require('../controllers/autosuggestController');
const trendsController = require('../controllers/trendsController');
const scoreController = require('../controllers/scoreController');
const favoriteController = require('../controllers/favoriteController');

router.get('/trends',trendsController.getTrends);

router.get('/autosuggest', autosuggestController.getAutosuggested);

router.get('/tagscore', scoreController.getScore);

router.get('/savefavorite', favoriteController.saveFavorite);

router.get('/getfavorites', favoriteController.getFavorites);

module.exports = router;