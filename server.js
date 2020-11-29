var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var passport = require('passport');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure passport
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var playersRoutes = require('./routes/players');
var charactersRoutes = require('./routes/characters');
var spellbooksRoutes = require('./routes/spellbooks');
var spellbookRoutes = require('./routes/spellbook')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware that passes req.user to all templates
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/players', playersRoutes);
app.use('/', charactersRoutes);
app.use('/', spellbooksRoutes);
app.use('/', spellbookRoutes);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
