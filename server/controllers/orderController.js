/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const sequelize = require("../database");
const Order = require("../models/order");
const OrderDetail = require("../models/order_detail");
const Product = require("../models/product");
exports.placeOrder = async (req, res) => {
  try {
    const { user_id, details } = req.body;

    if (!user_id || details.length === 0) {
      res.status(400).json({
        message: "Invalid order data",
      });
    }

    const total = details.reduce((sum, item) => {
      const discount =
        ((item.unit_price * item.quantity) / 100) * item.discount;
      return discount
        ? sum + (item.unit_price * item.quantity - discount)
        : sum + item.unit_price * item.quantity;
    }, 0);

    const result = await sequelize.transaction(async (t) => {
      const { order_id } = await Order.create(
        { user_id, total },
        { transaction: t }
      );
      const orderDetails = details.map((item) => {
        return { order_id, ...item };
      });
      await OrderDetail.bulkCreate(orderDetails, { transaction: t });

      for (const item of orderDetails) {
        const product = await Product.findByPk(item.product_id);

        if (!product) {
          throw new Error(`No such product with id ${item.product_id}`);
        }

        if (!product || product.quantity < item.quantity) {
          throw new Error(
            `Insufficient stock for product ${item.product_id}. Only ${product.quantity} left in stock.`
          );
        }

        await Product.update(
          { quantity: product.quantity - item.quantity },
          { where: { product_id: item.product_id }, transaction: t }
        );
      }

      return order_id;
    });

    res.status(200).json({ message: "order placed successfully.", result });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};
