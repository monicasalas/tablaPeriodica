const express = require('express');

const link = express.Router();

const elements = require("../controllers/elements");
const group = require('../controllers/groups');
const period = require('../controllers/periods')

link
    .route("/elements")
    .get(elements.getElements)
    .post(elements.createElements);

link
    .route("/elements/:id")
    .put(elements.updateElement)
    .delete(elements.deleteElement)

link
    .route("/groups")
    .get(group.getGroups)
    .post(group.createGroup)

link
    .route("/groups/:id")
    .put(group.updateGroup)
    .delete(group.deleteGroup)

link
    .route("/periods")
    .get(period.getPeriods)
    .post(period.createPeriod)

link
    .route("/periods/:id")
    .put(period.updatePeriod)
    .delete(period.deletePeriod)

module.exports = link;