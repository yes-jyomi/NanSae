const express = require('express');
const router = express.Router();
// const models = require('../models');
const {User} = require('../models');

// TODO: session 연결
router.get('/', function(req, res, next) {
  // if (req.session.user_id) {
  //   res.redirect('/users/mypage');
  // } else {
  //   res.redirect('/users/login');
  // }
  res.redirect('/users/login');
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
  if (!req.session.id)
    res.redirect('login');

  const mypage_id = req.session.id;
  get_data(mypage_id, res);
});

router.post('/mypage', function(req, res, next) {
  if (!req.session.id)
    res.redirect('/users/login');

  const id = req.session.id;
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

// 아이디 중복 확인 (끝)
router.post('/join/check_id', function (req, res, next) {
  const id = req.body.id;

  User.findOne({
    where: { user_id: id }
  }).then((users) => {
    console.log(users.get({
      plain: true
    }));
    res.json({
      result: 'success',
      data: 'exist'
    });
  }).catch(err => {
    console.error('err: ' + err);
    res.json({
      result: 'success',
      data: 'not exist'
    });
  });
});

// 회원가입 (끝)
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

  const empty = (blog) => {
    if (blog === null) blog = "";
  };

  User.create({
    user_id: id,
    user_pwd: pwd,
    user_name: name,
    user_phone: phone,
    user_email: email,
    user_zipcode: zipcode,
    user_address: address,
    user_blog: blog
  }).then( result => {
    console.log('회원가입 완료');
    res.redirect('/users/login');
  }).catch( err => {
    console.log('회원가입 실패');
    console.error(err);
    res.redirect('/users/join');
  });
});

// 로그인 시 세션 존재하면 mypage 로
router.get('/login', function(req, res, next) {
  let session = req.session;

  // undefined

  res.render('login', {
    session: session
  });
});

var save_session = function(req, id) {
  req.session.id = id;
};

// 로그인
// TODO: session 연결
router.post('/login', async function(req, res, next) {
  let body = req.body;

  const id = body.id;
  const pwd = body.pwd;

  await User.findOne({
    where: {
      user_id: id
    }
  }).then((user) => {
    let dbPwd = user.user_pwd;

    if (dbPwd === pwd) {
      save_session(req, id);
      res.redirect('/users/mypage');

      console.log('로그인 완료');
    } else {
      console.log('비밀번호 불일치');
      res.redirect('/users/login');
    }

  }).catch(err => {
    console.error('err: ' + err);
  });


  // User.findOne({
  //   where: {user_id: id}
  // }).then((users) => {
  //   if (!users) {
  //     console.log('then: id를 잘못 입력하셨습니다.');
  //     res.redirect('/users/login');
  //   }
  //   const dbPwd = users.user_pwd;
  //   if (pwd === dbPwd) {
  //     console.log('로그인 완료되었습니다.');
  //
  //   //  TODO: 세션 설정
  //     req.session.id = id;
  //     req.session.save(function() {
  //       res.redirect('/users/mypage');
  //     });
  //   } else {
  //     console.log('비밀번호를 잘못 입력하셨습니다.');
  //     res.redirect('/users/login');
  //   }
  // }).catch(err => {
  //   console.log('catch: id를 잘못 입력하셨습니다.');
  //   console.error('err: ' + err);
  //   res.redirect('/users/login');
  // });

  // let sql = "SELECT user_id, user_pwd FROM user WHERE user_id = ?";
  // conn.query(sql, [id], function(err, rows) {
  //   if (err)
  //     console.error("err: " + err);
  //
  //   if (!rows[0]) {
  //     console.log('id 를 잘못 입력하셨습니다.');
  //     res.redirect('/users/login');
  //   }
  //
  //   const user = rows[0];
  //
  //   const dbPwd = user.user_pwd;
  //   if (pwd === dbPwd) {
  //     console.log('로그인 완료');
  //
  //     // 세션 설정
  //     // undefined
  //     req.session.user_id = id;
  //     req.session.save(function() {
  //       res.redirect('/users/mypage');
  //     });
  //   } else {
  //     console.log('비밀번호가 틀렸습니다.');
  //     res.redirect('/users/login');
  //   }
  // });
});

// 로그아웃
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {});
  res.clearCookie('sid');

  req.session.save(function() {
    res.redirect('/users/login');
  });
});

module.exports = router;

//TODO crypto 사용하기