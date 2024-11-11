const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const Order = require("../models/order");
const Product = require("../models/product");

const OrderDetail = sequelize.define("order_detail", {
  order_detail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});





module.exports = OrderDetail;
