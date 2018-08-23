const profiles = require('../model/index.js');
const { getUserData } = require('../model/getUserData');

exports.get = (req, res, next) => {
  getUserData((err, result) => {
    if (err) {
      console.log('This error is', err);
      return res.render('error');
    }
    console.log(result);
    const { eachGraduate } = req.params;
    let exist = false;
    let tmp = 0;
    result.forEach((user, index) => {
      if (user.git_username == eachGraduate) {
        exist = true;
        tmp = index;
      }
    });
    if (exist) {
      return res.render('profiles', result[tmp]);
    }
    next();
  });
};
