const User = require("./user");
const Order = require("./order");
const OrderDetail = require("./order_detail");
const Supplier = require("./supplier");
const Product = require("./product");
const SupplierProduct = require("./supplier_product");

User.hasMany(Order, {
  foreignKey: "user_id",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

Order.hasMany(OrderDetail, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

OrderDetail.belongsTo(Order, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Product.hasMany(OrderDetail, {
  foreignKey: "product_id",
});

OrderDetail.belongsTo(Product, {
  foreignKey: "product_id",
});

Product.belongsToMany(Supplier, {
  through: SupplierProduct,
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Supplier.belongsToMany(Product, {
  through: SupplierProduct,
  foreignKey: "supplier_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
