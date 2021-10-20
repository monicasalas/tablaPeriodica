const express = require('express');

const link = express.Router();

const elements = require("../controllers/elements");
const group = require('../controllers/groups');
const period = require('../controllers/periods')
const elementType = require('../controllers/elementTypes');
const user = require('../controllers/users');


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

link
    .route("/element-Type")
    .get(elementType.getElementTypes)
    .post(elementType.createElementTypes)

link
    .route("/element-Type/:id")
    .put(elementType.updateElementType)
    .delete(elementType.deleteElementType)

link
    .route("/user")
    .get(user.getUsers)
    .post(user.createUsers)

link
    .route("/user/:id")
    .put(user.updateUser)
    .delete(user.deleteUser)


module.exports = link;