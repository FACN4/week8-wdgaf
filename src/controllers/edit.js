const { updateCV } = require('../model/updateUserData');

exports.get = (req, res) => {
  if (req.session.logged_in) {
    res.render('editinfo', {
      title: 'Edit User Profile',
      logged_in: req.session.logged_in,
      git_username: req.session.git_username,
    });
  } else {
    res.redirect('/');
  }
};

exports.post = (req, res) => {
  const username = req.session.git_username;
  // const userId = req.session.userid;
  updateCV(username, req.body.cv, (err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
};
