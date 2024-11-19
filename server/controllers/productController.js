const { Op } = require("sequelize");
const Product = require("../models/product");
const Supplier = require("../models/supplier");

exports.getAllProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((field) => delete queryObj[field]);

    const sort = req.query.sort;
    const order = [sort.split(":")];
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * limit;

    const where = {};
    for (const key in queryObj) {
      if (key === "price" || key === "quantity") {
        const value = queryObj[key].split(":");
        if (value.length === 2) {
          const operator = value[0];
          const numberValue = Number(value[1]);

          if (!isNaN(numberValue)) {
            switch (operator) {
              case "gt":
                where[key] = { [Op.gt]: numberValue };
                break;
              case "lt":
                where[key] = { [Op.lt]: numberValue };
                break;
              case "gte":
                where[key] = { [Op.gte]: numberValue };
                break;
              case "lte":
                where[key] = { [Op.lte]: numberValue };
                break;
              default:
                break;
            }
          }
        } else {
          const numberValue = Number(value[0]);
          if (!isNaN(numberValue)) {
            where[key] = { [Op.eq]: numberValue };
          }
        }
      } else {
        where[key] = { [Op.like]: `%${queryObj[key]}%` };
      }
    }

    const products = await Product.findAndCountAll({
      where,
      offset,
      limit,
      order,
    });
    res.status(200).json({ products: products.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updated = await Product.update(req.body, {
      where: { product_id: req.params.id },
    });

    res.status(200).json({ updated });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const deleted = await Product.destroy({
      where: { product_id: req.params.id },
      cascade: true,
    });

    res.status(200).json({ message: "product deleted successfully.", deleted });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.assignSupplierToProduct = async (req, res) => {
  try {
    const product_id = req.query.product_id;
    const supplier_id = req.query.supplier_id;

    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const supplier = await Supplier.findByPk(supplier_id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    await product.addSupplier(supplier);

    res.status(200).json({ message: "supplier assigned successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to assign supplier to product.", err.message);
  }
};

exports.removeSupplierFromProduct = async (req, res) => {
  try {
    const product_id = req.query.product_id;
    const supplier_id = req.query.supplier_id;

    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const supplier = await Supplier.findByPk(supplier_id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    const hasSupplier = await product.hasSupplier(supplier);

    if (!hasSupplier) {
      return res
        .status(404)
        .json({ message: "Supplier not found for this product" });
    }

    await product.removeSupplier(supplier);

    res.status(200).json({ message: "Supplier removed successfully." });
  } catch (err) {
    res.status(500).json({
      message: "Error removing supplier from product",
      error: err.message,
    });
  }
};
