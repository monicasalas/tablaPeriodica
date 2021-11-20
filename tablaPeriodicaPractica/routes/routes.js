const express = require('express');

const link = express.Router();

const elements = require("../controllers/elements");
const group = require('../controllers/groups');
const period = require('../controllers/periods')
const elementType = require('../controllers/elementTypes');
const user = require('../controllers/users');
const generalities = require('../controllers/generalities')

const {verifyToken} = require('../middleware/authorization')

link
    .route("/elements")
    .get(elements.getElements)
    .post( verifyToken, elements.createElements);

link
    .route("/elements/:id")
    .put(verifyToken, elements.updateElement)
    .delete(verifyToken, elements.deleteElement)

link
    .route("/groups")
    .get(group.getGroups)
    .post(verifyToken, group.createGroup)

link
    .route("/groups/:id")
    .put(verifyToken, group.updateGroup)
    .delete(verifyToken, group.deleteGroup)

link
    .route("/periods")
    .get(period.getPeriods)
    .post(verifyToken, period.createPeriod)

link
    .route("/periods/:id")
    .put(verifyToken, period.updatePeriod)
    .delete(verifyToken, period.deletePeriod)

link
    .route("/element-Type")
    .get(elementType.getElementTypes)
    .post(verifyToken, elementType.createElementTypes)

link
    .route("/element-Type/:id")
    .put(verifyToken, elementType.updateElementType)
    .delete(verifyToken, elementType.deleteElementType)

link
    .route("/user")
    .get(verifyToken,user.getUsers)
    .post(user.createUsers)

link
    .route("/user/:id")
    .put(verifyToken, user.updateUser)
    .delete(verifyToken, user.deleteUser)

link
    .route("/login").post(generalities.login)

module.exports = link;