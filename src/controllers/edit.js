const { updateCV } = require('../model/updateUserData');

exports.get = (req, res) => {
  res.render('editinfo', {
    title: 'Edit User Profile',
    logged_in: req.session.logged_in,
    git_username: req.session.git_username,
  });
};

exports.post = (req, res) => {
  const userId = 5;
  // const userId = req.session.userid;
  updateCV(userId, req.body.cv, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Success');
    res.redirect('/edit');
  });
};
