const dbConnection = require('../../database/dbconnection');

// Gets everything from the users table and returns it in a callback
const getUserData = (cb) => {
  console.log('Made it');
  dbConnection.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res.rows);
    }
  });
};

module.exports = { getUserData };
