var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  //get cookies to see if overlay already shown
  let cookies = req.cookies;
  let greetOk = cookies["GreetingOk"];

  let model = {greetingShown:!!greetOk, title:"YouTags Standalone"};

  res.render('index', { model: model });
});

module.exports = router;
