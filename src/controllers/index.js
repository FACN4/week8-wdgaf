const express = require('express');
const path = require('path');

const router = express.Router();

// Import controllers
const portal = require('./portal');
const error = require('./error');
const eachGraduate = require('./eachGraduate');
// Add routes

router.get('/', portal.get);
router.get('/profiles/:eachGraduate', eachGraduate.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
