const request = require('request');
const fs = require('fs');
const gradData = require('./grad_data.json');
const dbConnection = require('./dbConnection');

const { GITHUB_KEY } = process.env;

const makeEmptyTables = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');

// const getPhotoUrl = (gitUsername) => {
//   const options = {
//     url: `https://api.github.com/users/${gitUsername}?access_token=${GITHUB_KEY}`,
//     headers: {
//       'User-Agent': 'BenNewman90',
//     },
//   };
//   request(options, (error, response, body) => {
//     if (error) {
//       console.log(error);
//     }
//     return JSON.parse(body).avatar_url;
//   });
// };

const buildDatabase = () => {
  dbConnection.query(makeEmptyTables, (err) => {
    if (err) {
      console.log('Building DB error', err);
    } else {
      gradData.forEach((user) => {
        const QUERYinsertUsers = 'INSERT INTO users (git_username, photo_url) VALUES ($1, $2)';
        dbConnection.query(QUERYinsertUsers, [user.git_username, user.photo_url], (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
