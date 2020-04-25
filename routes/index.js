var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
  if (!req.session.user_id)
    res.render('index', { user_id: req.session.user_id });
  else
    res.render('index', { user_id: req.session.user_id });
});

module.exports = router;
