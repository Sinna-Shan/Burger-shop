const User = require("../models/user");
const { Op } = require("sequelize");

exports.getAllUsers = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["limit", "sort", "page", "fields"];
    excludeFields.forEach((field) => delete queryObj[field]);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const offset = (page - 1) * limit;
    const where = {};

    for (const key in queryObj) {
      if (queryObj[key]) {
        where[key] = { [Op.like]: `%${queryObj[key]}%` };
      }
    }

    const sort = req.query.sort;
    const order = [sort.split(":")];

    const users = await User.findAndCountAll({ where, offset, limit, order });

    res.status(200).json({
      message: "getAllUsers",
      users: users.rows,
      currentPage: page,
      totalPages: Math.ceil(users.count / limit),
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "create a user...",
      user,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      message: "user found.",
      user,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updated = await User.update(req.body, {
      where: { user_id: req.params.id },
    });

    res.status(201).json({
      message: "user updated successfully.",
      user: updated,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const deleted = await User.destroy({ where: { user_id: req.params.id } });

    res.status(201).json({
      message: "user deleted successfully.",
      user: deleted,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};
