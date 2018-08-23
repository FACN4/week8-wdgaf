const express = require("express");
const path = require("path");
const router = express.Router();

// Import controllers
const portal = require("./portal");
const profiles = require("./profiles");
const eachGraduate = require("./eachGraduate");
// Add routes

router.get("/", portal.get);
router.get("/profiles/:eachGraduate", eachGraduate.get);
router.get("/profiles", profiles.get);

module.exports = router;
