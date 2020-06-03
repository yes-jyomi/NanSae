var express = require('express');
var router = express.Router();
const {Activity} = require('../models');


router.get('/', function(req, res, next) {
    Activity.findAll({
       where: {
           user_id: 's2018w01'
       },
        order: 'act_start DESC'
    }).then((list) => {
        res.render('outdoorList', {
            title: list.act_name,
            date1: list.act_start,
            date2: list.act_end,
            content: list.act_content
        });
    }).catch(err => {
        console.error(err);
    });
});

router.get('/add', function(req, res, next) {
    res.render('outdoorAdd');
});

router.post('/add', function(req, res, next) {
    const title = req.body.outdoor_name;
    const date1 = req.body.outdoor_date1;
    const date2 = req.body.outdoor_date2;
    const content = req.body.outdoor_context;

    console.log(title + ":" + date1 + ":" + date2 + ":" + content);

    Activity.create({
        user_id: 's2018w01',
        act_name: title,
        act_start: date1,
        act_end: date2,
        act_content: content,
        createdAt: now(),
        updatedAt: now()
    }).then((result) => {
        console.log(result);
        res.redirect('/outdoor/');
    }).catch(err => {
        console.error(err);
    });
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

    const title = req.body.outdoor_name;
    const date1 = req.body.outdoor_date1;
    const date2 = req.body.outdoor_date2;
    const content = req.body.outdoor_context;

    console.log(title + ":" + date1 + ":" + date2 + ":" + content);

    Activity.update({
        where: {
            user_id: 's2018w01'
        },
        attributes: {
            user_id: 's2018w01',
            act_name: title,
            act_start: date1,
            act_end: date2,
            act_content: content,
            updatedAt: now()
        }
    }).then((result) => {
        console.log(result);
        res.redirect('/outdoor/');
    }).catch(err => {
        console.error(err);
    });
});

module.exports = router;
