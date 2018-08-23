const { getUserData } = require('../model/getUserData');

exports.get = (req, res, next) => {
  getUserData((err, profiles) => {
    if (err) {
      return res.render('error');
    }
    const { eachGraduate } = req.params;
    let exist = false;
    let tmp = 0;
    profiles.forEach((user, index) => {
      if (user.git_username == eachGraduate) {
        exist = true;
        tmp = index;
      }
    });
    if (exist) {
      return res.render('profiles', profiles[tmp]);
    }
    next();
  });
};
