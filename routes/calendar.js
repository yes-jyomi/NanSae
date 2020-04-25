var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    if (!req.session.user_id)
        res.redirect('/users/login');
    res.render('calendarList', { user_id: req.session.user_id });
});

router.get('/write', function(req, res, next) {
    res.render('calendarWrite');
});

module.exports = router;