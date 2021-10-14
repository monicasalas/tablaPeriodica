const express = require('express');

const link = express.Router();

const elements = require("../controllers/elements")

link.route("/elements").post(elements.createElements);

module.exports = link;