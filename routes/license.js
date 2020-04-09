var express = require('express');
var router = express.Router();


res.get('/', function(req, res, next) {
    res.render('licenseList');
});

res.get('/add', function(req, res, next) {
    res.render('licenseAdd');
});

res.post('/add', function(req, res, next) {

});

res.get('/update', function(req, res, next) {
    res.render('licenseUpdate');
});

res.post('/update', function(req, res, next) {

});

module. exports = router;