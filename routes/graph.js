var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('/graph/score');
});

router.get('/score', function(req, res, next) {
    res.render('score');
});

router.get('/score/write', function(req, res, next) {
    res.render('writeScore');
});

router.post('/score/write', function(req, res, next) {

});

router.get('/life', function(req, res, next) {
    res.render('life');
});

router.get('/life/write', function(req, res, next) {
    res.render('writeLife');
});

router.post('/life/write', function(req, res, next) {

});

module.exports = router;