var express = require('express');
var router = express.Router();


res.get('/', function(req, res, next) {
    res.redirect('/portfolio/list');
});

res.get('/template', function(req, res, next) {
    res.render('template');
});

res.get('/list', function(req, res, next) {
   res.render('portfolioList');
});

res.get('/template/write', function(req, res, next) {
    res.render('portfolioWrite');
});

res.post('/template/write', function(req, res, next) {

});

module.exports = router;