var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cookies = req.cookies;
  let greetOk = cookies["GreetingOk"];

  let model = {greetingShown:false, title:"Заголовок"};
  model.greetingShown = !!greetOk;

  res.render('index', { model: model });
});

module.exports = router;
