const express = require('express');
const router = express.Router();
// const firebase = require("firebase");
// const dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.render('index', {
        uid: req.session.uid
    });
});

module.exports = router;
