var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('calendarList');
});

router.get('/write', function(req, res, next) {
    res.render('calendarWrite');
});

module.exports = router;