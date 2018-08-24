const bcrypt = require('bcrypt');
const qs = require('querystring');
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
const getHash = require('../queries/getHash');

const { SECRET } = process.env;
const dbConnection = require('../../database/dbconnection');

exports.get = (req, res) => {
  res.render('login', { title: 'Login Page' });
};

exports.post = (req, res) => {
  console.log(req.body.Git_username, req.body.password);
  getHash(req.body.Git_username, (err, hash) => {
    bcrypt
      .compare(userData.password, hash)
      .then((res) => {
        if (res === true) {
          req.session.git_username = req.body.Git_username;
          req.session.logged_in = true;
          res.redirect('/login');
        } else {
          res.render('loginFailed', { title: 'Login Failed' });
        }
      })
      .catch((err2) => {
        res.render('loginFailed', { title: 'Login Failed' });
      });
  });
};
