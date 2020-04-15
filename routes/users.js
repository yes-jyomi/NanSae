var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/mypage');
});

router.get('/mypage', function(req, res, next) {
  res.render('mypage');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});

router.post('/join', function(req, res, next) {

});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {

});

module.exports = router;
