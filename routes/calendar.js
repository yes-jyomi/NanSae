var express = require('express');
var router = express.Router();


res.get('/', function(req, res, next) {
    res.render('calendarList');
});

res.get('/write', function(req, res, next) {
    res.render('calendarWrite');
});

module.exports = router;