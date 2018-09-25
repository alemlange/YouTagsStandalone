import express from "express"
let router = express.Router();

router.get('/', function(req, res) {

  //get cookies to see if overlay already shown
  let cookies = req.cookies;
  let greetOk = cookies["GreetingOk"];

  let model = {greetingShown:!!greetOk, title:"YouTags Standalone"};

  res.render('index', { model: model });
});

export default router;