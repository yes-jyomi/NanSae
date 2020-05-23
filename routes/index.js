const express = require('express');
const router = express.Router();
// const firebase = require("firebase");
// const dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
  // if (req.session.user_id)
    res.render('index');
  // else
  //   res.render('index', { user_id: req.session.user_id });
});

module.exports = router;
