// const grads = require('./../model/index.js');
const { getUserData } = require('../model/getUserData');

exports.get = (req, res) => {
  getUserData((err, profiles) => {
    if (err) {
      return res.render('error');
    }
    return res.render('portal', { title: 'FAC Grad portal', profiles });
  });
};
