const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users/mypage');
});

router.get('/mypage', function(req, res, next) {
  res.render('mypage');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});

router.post('/join', function(req, res, next) {
  const id = req.body.id;
  const pwd = req.body.pwd;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const zipcode = req.body.zipcode;
  const address = req.body.address;
  let blog = req.body.blog;

  const empty = (blog) => {
    if (blog === null) blog = "";
  };

  const datas = [id, pwd, name, phone, zipcode, address, email, blog];

  const sql = "INSERT INTO user (user_id, user_pwd, user_name, user_phone, user_zipcode, user_address, user_email, user_blog)" +
      "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(sql, datas, function(err, rows) {
    if (err) console.error("err: " + err);
    res.redirect('/users/login');
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {

});

router.get('/pwdck', function(req, res, next) {
  res.render('passwordCheck');
});

router.post('/pwdck', function(req, res, next) {

});

module.exports = router;
