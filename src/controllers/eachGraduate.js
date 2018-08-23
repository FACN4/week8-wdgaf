const profiles = require('./../model/index');
const getUserData = require('../model/getUserData');

exports.get = (req, res, next) => {
  getUserData((err, res) => {
    if (err) {
      return res.render('error');
    }
    const { eachGraduate } = req.params;
    let exist = false;
    let tmp = 0;
    profiles.forEach((user, index) => {
      if (user.name == eachGraduate) {
        console.log(eachGraduate);
        // index = profiles.indexOf();
        exist = true;
        console.log('The profiles are: ', profiles);
        tmp = index;
      }
    });
    if (exist) {
      return res.render('profiles', profiles[tmp]);
    }
    next();
  });
};
