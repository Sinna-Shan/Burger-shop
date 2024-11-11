const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const User = require('../models/user');
const OrderDetail = require('../models/order_detail');

const Order = sequelize.define('order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});


module.exports = Order;