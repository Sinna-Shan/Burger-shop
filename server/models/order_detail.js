const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const OrderDetail = sequelize.define("order_details", {
  order_detail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
  unit_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0,
    },
  },
});

module.exports = OrderDetail;
