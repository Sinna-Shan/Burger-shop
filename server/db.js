const Sequelize = require("sequelize");
require("dotenv").config();

const db = process.env.DATABASE;
const user = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  dialect: "mysql",
});

module.exports = sequelize;