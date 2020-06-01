const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require('express-session');

const models = require('./models/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const calendarRouter = require('./routes/calendar');
const outdoorRouter = require('./routes/outdoor');
const graphRouter = require('./routes/graph');
const portfolioRouter = require('./routes/portfolio');
const licenseRouter = require('./routes/license');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  key: 'sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // 6시간
    maxAge: 6000 * 60 * 60
  }
}));

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/calendar', calendarRouter);
app.use('/outdoor', outdoorRouter);
app.use('/graph', graphRouter);
app.use('/portfolio', portfolioRouter);
app.use('/license', licenseRouter);

models.sequelize.sync().then( () => {
  console.log('DB 연결 성공');
}).catch(err => {
  console.error('DB 연결 실패');
  console.error(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
