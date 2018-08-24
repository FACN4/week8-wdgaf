const path = require('path');

exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Page not found',
    git_username: req.session.git_username,
    logged_in: req.session.logged_in,
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    logged_in: req.session.logged_in,
    git_username: req.session.git_username,
    errorMessage: 'Internal server error',
  });
};
