exports.get = (req, res) => {
  res.render('loginFailed', {
    title: 'Login Failed',
    logged_in: req.session.logged_in,
  });
};
