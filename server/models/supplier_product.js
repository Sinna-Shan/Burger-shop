const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const Product = require("./product");
const Supplier = require("./supplier");

const SupplierProduct = sequelize.define("product_supplier", {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "product_id",
    },
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Supplier,
      key: "supplier_id",
    },
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: sequelize.fn("NOW"),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
});

module.exports = SupplierProduct;
