const express = require('express');
const path = require('path');

const router = express.Router();

// Import controllers
<<<<<<< HEAD
const login = require('./login');
const portal = require('./portal');
const error = require('./error');
const eachGraduate = require('./eachGraduate');
=======
const portal = require('./portal');
const error = require('./error');
const eachGraduate = require('./eachGraduate');
const edit = require('./edit');
>>>>>>> master
// Add routes

router.get('/', portal.get);
router.get('/profiles/:eachGraduate', eachGraduate.get);
<<<<<<< HEAD
router.get('/login', login.get);
router.post('/login', login.post);
=======
router.get('/edit', edit.get);
router.post('/edit', edit.post);
>>>>>>> master
router.use(error.client);
router.use(error.server);

module.exports = router;
