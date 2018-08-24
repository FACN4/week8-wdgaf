const dbConnection = require('../../database/dbconnection');

const getHash = (git_username, cb) => {
  dbConnection.query(
    `SELECT password FROM users WHERE git_username = '${git_username}'`,
    (err, res) => {
      if (err || res.rows.length === 0) {
        console.log('reject');
        cb(err);
      } else {
        cb(null, res.rows[0].password);
      }
    },
  );
};
