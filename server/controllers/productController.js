const { Op } = require("sequelize");
const Product = require("../models/product");

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
    res.send("get a product.");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    res.send("update a product.");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    res.send("delete a product.");
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};
