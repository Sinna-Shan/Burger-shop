const User = require("../models/user");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
    res.status(200).json({
      message: "getAllUsers",
      users,
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
