/* eslint-disable no-undef */
const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
    dialect:'mysql',
    define: {
        freezeTableName: true,
    },
});

module.exports = sequelize;