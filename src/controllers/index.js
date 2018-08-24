const express = require('express');
const path = require('path');

const router = express.Router();

// Import controllers
const login = require('./login');
const portal = require('./portal');
const loginFailed = require('./loginFailed');
const error = require('./error');
const eachGraduate = require('./eachGraduate');
const edit = require('./edit');
// Add routes

router.get('/', portal.get);
router.get('/loginFailed', loginFailed.get);
router.get('/profiles/:eachGraduate', eachGraduate.get);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/edit', edit.get);
router.post('/edit', edit.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
