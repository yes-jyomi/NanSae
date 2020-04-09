var express = require('express');
var router = express.Router();


res.get('/', function(req, res, next) {
    res.render('outdoorList');
});

res.get('/write', function(req, res, next) {
    res.render('outdoorWrite');
});

res.post('/write', function(req, res, next) {

});

res.get('/update', function(req, res, next) {
    res.render('outdoorUpdate');
});

res.post('/update', function(req, res, next) {

});

module.exports = router;