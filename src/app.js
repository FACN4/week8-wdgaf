const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');

const { SECRET } = process.env;

const controllers = require('./controllers/index');
const helpers = require('./views/helpers');

const app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET,
    key: 'user_authentication',
  }),
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  }),
);

app.set('port', process.env.PORT || 3001);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());
app.use(controllers);

module.exports = app;
