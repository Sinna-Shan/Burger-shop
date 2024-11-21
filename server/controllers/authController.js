const User = require("../models/user");
const { Op } = require("sequelize");
exports.register = async (req, res) => {
  try {
    const { user_id, role } = await User.create(req.body);
    req.session.user = { user_id, role };
    res.status(201).json({ message: "registration successful." });
  } catch (e) {
    console.log(e.parent);
    return res
      .status(500)
      .json({ message: "Failed to create user.", error: e.parent.sqlMessage });
  }
};

exports.login = async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ user_name: user_name }, { email: user_name }],
      },
    });

    if (user === null) {
      return res.status(401).json({ message: "User not found." });
    }

    if (!user.validPassword(password)) {
      return res.status(401).json({ message: "Invalid login credentials." });
    }

    res.status(200).json({ message: "login successful." });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};
