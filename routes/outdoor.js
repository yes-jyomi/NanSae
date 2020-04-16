var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('outdoorList');
});

router.get('/write', function(req, res, next) {
    res.render('outdoorWrite');
});

router.post('/write', function(req, res, next) {

});

router.get('/update', function(req, res, next) {
    res.render('outdoorUpdate');
});

router.post('/update', function(req, res, next) {

});

module.exports = router;