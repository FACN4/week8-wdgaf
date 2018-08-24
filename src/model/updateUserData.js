const dbConnection = require('../database/dbconnection');

// Updates the user's CV, called in controllers/edit.js
const updateCV = (gitUsername, cv, cb) => {
  const queryString = `UPDATE users SET cv = $1
                      WHERE git_username = $2`;
  dbConnection.query(queryString, [cv, gitUsername], (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};

module.exports = { updateCV };
