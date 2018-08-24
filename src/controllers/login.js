const bcrypt = require('bcrypt');
const qs = require('querystring');
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');
const { getHash } = require('../queries/getHash');

const { SECRET } = process.env;
const dbConnection = require('../database/dbconnection');

exports.get = (req, res) => {
  res.render('login', { title: 'Login Page' });
};

exports.post = (req, res) => {
  getHash(req.body.Git_username, (err, hash) => {
    bcrypt
      .compare(req.body.password, hash)
      .then((result) => {
        if (result === true) {
          req.session.git_username = req.body.Git_username;
          req.session.logged_in = true;
          res.redirect('/');
        } else {
          res.redirect('/loginFailed');
        }
      })
      .catch((err2) => {
        res.redirect('/loginFailed');
      });
  });
};
