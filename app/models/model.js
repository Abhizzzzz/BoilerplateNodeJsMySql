var Sequelize = require("sequelize");
const appConfig = require('../../config/appConfig');
var sequelize = new Sequelize(appConfig.db.uri, { logging: false });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
// git testing

module.exports = db;