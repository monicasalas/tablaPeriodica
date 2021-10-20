const Sequelize = require('sequelize');

const DB = require('../config/config');

const sequelize = new Sequelize(DB.DBNAME, DB.USER, DB.PASSWORD,{
    host: DB.HOST, 
    dialect:DB.DIALECT
});

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.element = require('./element')(sequelize, Sequelize);
db.group = require('./group')(sequelize, Sequelize);
db.period = require('./period')(sequelize, Sequelize);
db.elementType = require('./elementType')(sequelize, Sequelize);
db.user = require('./user')(sequelize, Sequelize);



module.exports = db;