const profiles = require("./../model/index");

exports.get = (req, res) => {
  res.render("profiles", { title: "profiles page" });
};
