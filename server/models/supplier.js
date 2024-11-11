const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const Product = require("../models/product");
const SupplierProduct = require("../models/supplier_product");

const Supplier = sequelize.define("supplier", {
  supplier_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = Supplier;
