const dbConnection = require('../../database/dbconnection');

// Gets everything from the users table and returns it in a callback
const getUserData = (cb) => {
  dbConnection.query('SELECT * FROM users', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = { getUserData };
