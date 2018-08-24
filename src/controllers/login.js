exports.get = (req, res) => {
  res.render('login', { title: 'Login Page' });
};

exports.post = (req, res) => {
  console.log(req.body.Git_username, req.body.password);
  res.redirect('/login');
};
