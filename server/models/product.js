const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const OrderDetail = require("../models/order_detail");
const SupplierProduct = require("../models/supplier_product");
const Supplier = require("../models/supplier");

const Product = sequelize.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  discount: {
    type: DataTypes.DECIMAL(5, 2),
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
