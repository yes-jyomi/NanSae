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
        license_idx: 0,
        user_id: 's2018w01',
        license_name: title,
        license_comp: company,
        license_date: date,
        createdAt: date,
        updatedAt: date
    }).then( result => {
        console.log('자격증이 추가되셨습니다.');
        res.redirect('/license/');
    }).catch( err => {
        console.log('자격증 추가에 실패하셨습니다.');
        console.error(err);
        res.redirect('/license/');
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