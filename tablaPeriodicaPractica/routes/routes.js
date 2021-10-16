const express = require('express');

const link = express.Router();

const elements = require("../controllers/elements")

link
    .route("/elements")
    .get(elements.getElements)
    .post(elements.createElements);

link
    .route("/elements/:id")
    .put(elements.updateElement)
    .delete(elements.deleteElement)

module.exports = link;