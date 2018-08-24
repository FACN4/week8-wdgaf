const { updateCV } = require('../model/updateUserData');

const userId = 5;

exports.get = (req, res) => {
  res.render('editinfo', { title: 'Edit User Profile' });
};

exports.post = (req, res) => {
  updateCV(userId, req.body.cv, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Success');
    res.redirect('/edit');
  });
};
