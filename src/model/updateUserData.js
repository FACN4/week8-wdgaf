const dbConnection = require('../../database/dbconnection');

// Updates the user's CV, called in controllers/edit.js
const updateCV = (userId, cv, cb) => {
  const queryString = `UPDATE users SET cv = $1
                      WHERE id = $2`;
  dbConnection.query(queryString, [cv, userId], (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};

module.exports = { updateCV };
