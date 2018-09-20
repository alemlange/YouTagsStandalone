var express = require('express');
var router = express.Router();

const autosuggestController = require('../controllers/autosuggestController');
const trendsController = require('../controllers/trendsController');
const scoreController = require('../controllers/scoreController');

router.get('/trends',trendsController.getTrends);

router.get('/autosuggest', autosuggestController.getAutosuggested);

router.get('/tagscore', scoreController.getScore);

module.exports = router;