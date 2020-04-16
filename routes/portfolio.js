var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('/portfolio/list');
});

router.get('/template', function(req, res, next) {
    res.render('template');
});

router.get('/list', function(req, res, next) {
   res.render('portfolioList');
});

router.get('/template/write', function(req, res, next) {
    res.render('portfolioWrite');
});

router.post('/template/write', function(req, res, next) {

});

module.exports = router;