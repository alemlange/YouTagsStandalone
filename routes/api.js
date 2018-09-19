var express = require('express');
var router = express.Router();

const autosuggestConroller = require('../controllers/autosuggestController');
const trendsConroller = require('../controllers/trendsController');

router.get('/trends',trendsConroller.getTrends);

router.get('/autosuggest', autosuggestConroller.getAutosuggested);

module.exports = router;