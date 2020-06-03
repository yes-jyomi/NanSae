var express = require('express');
var router = express.Router();
const {License} = require('../models');


router.get('/', function(req, res, next) {
    License.findAll({
        where: {
            user_id: 's2018w01'
        }
    }).then((result) => {
        res.render('licenseList', {
            index: result.license_idx,
            title: result.license_name,
            company: result.license_comp,
            date: result.license_date
        });
    }).catch(err => {
        console.error(err);
    });
    // res.render('licenseList');
});

router.get('/add', function(req, res, next) {
    res.render('licenseAdd');
});

router.post('/add', function(req, res, next) {
    const title = req.body.license_name;
    const date = req.body.license_date;
    const company = req.body.license_company;

    License.create({
        where:{
            user_id: 's2018w01'
        },
        attributes: {
            license_name: title,
            license_date: date,
            license_comp: company,
            createdAt: now(),
            updatedAt: now()
        }
    }).then((result) => {
       res.redirect('/license/');
    }).catch(err => {
        console.error(err);
    });
});

router.get('/update', function(req, res, next) {
    res.render('licenseUpdate');
});

router.post('/update', function(req, res, next) {
    const title = req.body.license_name;
    const date = req.body.license_date;
    const company = req.body.license_company;

    License.update({
        where:{
            user_id: 's2018w01',
            license_name: title
        },
        attributes: {
            license_date: date,
            license_comp: company,
            updatedAt: now()
        }
    }).then((result) => {
        res.redirect('/license/');
    }).catch(err => {
        console.error(err);
    });

});

router.get('/view', function(req, res, next) {
    res.render('licenseView');
});

module. exports = router;