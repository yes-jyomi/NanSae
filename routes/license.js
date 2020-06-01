var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('licenseList');
});

router.get('/add', function(req, res, next) {
    res.render('licenseAdd');
});

router.post('/add', function(req, res, next) {

});

router.get('/update', function(req, res, next) {
    res.render('licenseUpdate');
});

router.post('/update', function(req, res, next) {

});

router.get('/view', function(req, res, next) {
    res.render('licenseView');
});

module. exports = router;