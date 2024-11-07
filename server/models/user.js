const Sequelize  = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  nic: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
