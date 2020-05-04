const express = require('express');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.session.logined)
    res.redirect('/users/mypage');
  res.redirect('/users/mypage', { user_id: req.session.user_id });
});


function get_data(id, res) {
  const sql = "SELECT user_id, user_pwd, user_name, user_phone, user_email, " +
      "user_zipcode, user_address, user_blog FROM user WHERE user_id = ?";
  conn.query(sql, [id], function(err, rows) {
    if (err)
      console.error("err: " + err);
    res.render('mypage', { rows: rows, user_id: id });
  });
}

router.get('/mypage', function(req, res, next) {
  if (!req.session.logined)
    res.render('login');

  const id = req.session.user_id;
  get_data(id, res);
});

router.post('/mypage', function(req, res, next) {
  if (!req.session.logined)
    res.redirect('/users/login');

  const id = req.session.user_id;
  const pwd = req.body.pwd;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const zipcode = req.body.zipcode;
  const address = req.body.address;
  const blog = req.body.blog;

  console.log(id + " : " + pwd + " : " + name + " : " + phone + " : " + email + " : " + zipcode + " : " + address + " : " + blog);

  const empty = (blog) => {
    if (blog === null) blog = "";
  };

  var datas = [pwd, name, phone, email, zipcode, address, blog, id];

  const sql = "UPDATE user SET user_pwd = ?, user_name = ?, user_phone = ?, user_email = ?, user_zipcode = ?," +
      " user_address = ?, user_blog = ? WHERE user_id = ?";
  conn.query(sql, datas, function(err, rows) {
    if (err)
      console.error("err: " + err);
    get_data(id, res);
  });
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
  const roadAddress = req.body.roadAddress;
  const detailAddress = req.body.detailAddress;
  const address = roadAddress + ", " + detailAddress;
  let blog = req.body.blog;

  console.log('zipcode: ' + zipcode + ', roadAddr: ' + roadAddress + ', detailAddr: ' + detailAddress + 'addr: ' + address);

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
  if (!req.session.user_id)
    res.render('login', { user_id: req.session.user_id });
  else {
    console.log('이미 로그인됨');

    res.render('calendar');
  }

});

router.post('/login', function(req, res, next) {
  const id = req.body.id;
  const pwd = req.body.pwd;

  let sql = "SELECT user_id, user_pwd FROM user WHERE user_id = ?";
  conn.query(sql, [id], function(err, rows) {
    if (err)
      console.error("err: " + err);

    if (!rows[0]) {
      console.log('id 를 잘못 입력하셨습니다.');
      res.redirect('/users/login');
    }

    const user = rows[0];

    const dbPwd = user.user_pwd;
    if (pwd === dbPwd) {
      console.log('로그인 완료');

      // 세션 설정
      req.session.logined = true;
      req.session.user_id = user.user_id;
      req.session.save(function() {
        return res.render('calendarList', { user_id: req.session.user_id });
      });
    } else {
      console.log('비밀번호가 틀렸습니다.');
      res.redirect('/users/login');
    }
  });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    console.log('로그아웃');
    res.redirect('/users/login');
  });
});

module.exports = router;
