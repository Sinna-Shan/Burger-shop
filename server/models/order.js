const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Order = sequelize.define("orders", {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
});


module.exports = Order;