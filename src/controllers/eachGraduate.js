const profiles = require('./../model/index');

exports.get = (req, res, next) => {
  const { eachGraduate } = req.params;
  let exist = false;
  let tmp = 0;
  profiles.forEach((user, index) => {
    if (user.first_name == eachGraduate) {
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
};
