const { getUserData } = require('../model/getUserData');

exports.get = (req, res) => {
  getUserData((err, profiles) => {
    console.log(req.session.git_username);
    if (err) {
      return res.render('error');
    }
    return res.render('portal', {
      title: 'FAC Grad portal',
      profiles,
      'req.sesssion.git_username': req.session.git_username,
    });
  });
};
