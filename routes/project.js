var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('projectList');
});

router.get('/add', function(req, res, next) {
    res.render('projectAdd');
});

router.post('/add', function(req, res, next) {

});

router.get('/update', function(req, res, next) {
    res.render('projectUpdates');
});

router.post('/update', function(req, res, next) {

});

router.get('/view', function(req, res, next) {
    res.render('projectView');
});

router.post('/view', function(req, res, next) {

});

module. exports = router;