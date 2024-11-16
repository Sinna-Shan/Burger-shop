const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    res.send("get all products.");
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
