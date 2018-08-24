const express = require('express');
const path = require('path');

const router = express.Router();

// Import controllers
const portal = require('./portal');
const error = require('./error');
const eachGraduate = require('./eachGraduate');
const edit = require('./edit');
// Add routes

router.get('/', portal.get);
router.get('/profiles/:eachGraduate', eachGraduate.get);
router.get('/edit', edit.get);
router.get('/profiles', (req, res) => res.redirect('/'));
router.post('/edit', edit.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
