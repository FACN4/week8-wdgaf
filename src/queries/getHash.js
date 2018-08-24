const dbConnection = require('../database/dbconnection');

const getHash = (git_username, cb) => {
  const queryString = 'SELECT password FROM users WHERE git_username = $1;';
  dbConnection.query(queryString, [git_username], (err, res) => {
    if (err || res.rows.length === 0) {
      console.log(err, 'error');
      cb(err);
    } else {
      cb(null, res.rows[0].password);
    }
  });
};

module.exports = { getHash };
