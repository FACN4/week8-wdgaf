exports.get = (req, res) => {
  res.render('editinfo', { title: 'Edit User Profile' });
};

exports.post = (req, res) => {
  console.log(req.body);
  res.redirect('/edit');
};
