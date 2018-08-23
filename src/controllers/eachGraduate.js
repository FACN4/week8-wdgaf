const profiles = require("./../model/index");
exports.get = (req, res, next) => {
  const { eachGraduate } = req.params;
  console.log(eachGraduate);
  profiles.forEach((user, index) => {
    if (user.name == eachGraduate) {
      index = profiles.indexOf(eachGraduate);
      return res.render("profiles", profiles[index]);
    } else {
      console.log("Not Found");
    }
  });
  next();
};
