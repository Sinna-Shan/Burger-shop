const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const bcrypt = require("bcrypt");

const User = sequelize.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  nic: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["male", "female", "other"],
    defaultValue: "other",
  },
  role: {
    type: DataTypes.ENUM,
    values: ["admin", "cashier", "supervisor", "manager"],
    defaultValue: "cashier",
  },
  user_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue("password", hash);
    },
  },
});

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
