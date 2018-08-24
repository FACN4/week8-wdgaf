const { getUserData } = require('../model/getUserData');

exports.get = (req, res) => {
  getUserData((err, profiles) => {
    if (err) {
      return res.render('error');
    }
    return res.render('portal', {
      title: 'FAC Grad portal',
      logged_in: req.session.logged_in,
      profiles,
      git_username: req.session.git_username,
    });
  });
};
