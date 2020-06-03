const express = require('express');
const router = express.Router();
// const models = require('../models');
const {User} = require('../models');

// session 존재 -> mypage, session 존재X -> login (끝)
router.get('/', function(req, res, next) {
  // if (req.session.uid) {
  //   res.redirect('/users/login', {
  //     uid: req.session.uid
  //   });
  // } else {
  //   res.redirect('users/mypage/:id', {
  //     uid: req.session.uid
  //   });
  // }
  id = 's2018w01';
  res.redirect('users/mypage/id');
});

// user 에 있는 데이터 가져오는 함수
function get_data(id, res) {
  User.findAll({
    where: {user_id: id}
  }).then((result) => {
    res.render('mypage/:id', { rows: result, user_id: id});
  }).catch(err => {
    console.error('err: ' + err);
  });
}

router.get('/mypage', function(req, res, next) {
  // if (req.session.uId)
  //   res.redirect('/users/mypage/:id');
  // else
  //   res.redirect('/users/login');
  res.redirect('/users/mypage/s2018w01')
});

// 마이페이지: 세션X -> login, 세션O -> 정보 가져옴
router.get('/mypage/:id', function(req, res, next) {
  // if (!req.session.uid)
  //   res.redirect('/users/login');

  var id = 's2018w01';

  const mypage_id = id;
  get_data(mypage_id, res);
});

router.post('/mypage', function(req, res, next) {
  if (!req.session.uid)
    res.redirect('/users/login');

  const id = 's2018w011';
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

  User.update(
      {
        user_pwd: pwd,
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_zipcode: zipcode,
        user_address: address,
        user_blog: blog
      },
      {
        where: {user_id: id}
      }
  ).then(() => {
    get_data(id, res);
  }).catch(err => {
    console.error('err: ' + err);
  });

  // var datas = [pwd, name, phone, email, zipcode, address, blog, id];
  //
  // const sql = "UPDATE user SET user_pwd = ?, user_name = ?, user_phone = ?, user_email = ?, user_zipcode = ?," +
  //     " user_address = ?, user_blog = ? WHERE user_id = ?";
  // conn.query(sql, datas, function(err, rows) {
  //   if (err)
  //     console.error("err: " + err);
  //   get_data(id, res);
  // });
});

// (끝)
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

//TODO: crypto 사용하기

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
    alert(id + '님, 회원가입이 완료되었습니다.');
    res.redirect('/users/login');
  }).catch( err => {
    alert('회원가입이 실패하였습니다.');
    console.error(err);
    res.redirect('/users/join');
  });
});

// 로그인 시 세션O -> index, 세션X -> login
router.get('/login', function(req, res, next) {
  if (req.session.uid)
    res.render('index');
  res.render('login');
});

// 로그인 시 세션 저장하는 함수 (끝)
var save_session = function(req, id) {
  req.session.uid = id;
  console.log('세션에 저장');
};

// 로그인 (끝)
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
      res.redirect('/users/mypage/' + id);

      console.log('로그인 완료');
    } else {
      console.log('비밀번호 불일치');
      res.redirect('/users/login');
    }

  }).catch(err => {
    console.error('err: ' + err);
  });
});

// 로그아웃 (끝)
router.get('/logout', function(req, res, next) {
  if (req.session.uid) {
    console.log('세션이 있음')
    req.session.destroy(function(err) {
      console.log('세션 부숨');
      if (err) {
        console.error('err: ' + err);
        console.log('에러 발생함');
      } else {
        console.log('에러 안 발생함');
        res.redirect('/');
      }
    });
  } else {
    res.redirect('/');
  }
  // req.logout();
  // delete req.session.id;
  //
  // req.session.destroy(function(err) {});
  // res.clearCookie('sid');
  // res.redirect('/');
});

module.exports = router;