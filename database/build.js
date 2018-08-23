const request = require('request');
const fs = require('fs');
const gradData = require('./grad_data.json');
const dbConnection = require('./dbConnection');

const { GITHUB_KEY } = process.env;

const makeEmptyTables = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');

const buildDatabase = () => {
  dbConnection.query(makeEmptyTables, (err) => {
    if (err) {
      console.log('Building DB error', err);
    } else {
      gradData.forEach((user) => {
        const QUERYinsertUsers = 'INSERT INTO users (git_username, photo_url) VALUES ($1, $2)';
        dbConnection.query(
          QUERYinsertUsers,
          [user.git_username, user.photo_url],
          (err) => {
            if (err) {
              console.log(err);
            }
          },
        );
      });
    }
  });
};

buildDatabase();

module.exports = buildDatabase;
