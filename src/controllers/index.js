const express = require('express');
const path = require('path');

const router = express.Router();

// Import controllers
const portal = require('./portal');

// Add routes

router.get('/', portal.get);

module.exports = router;
