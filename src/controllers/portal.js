const grads = require('./../model/index.js');

exports.get = (req, res) => {
  res.render('portal', { title: 'FAC Grad portal', grads });
};
