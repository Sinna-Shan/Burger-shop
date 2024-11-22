exports.isAuthenticated = async (req, res, next) => {
  const user = req.session.user;
  if (!user?.user_id || !user?.role) {
    res
      .status(401)
      .json({ message: "Session expired or not found. Please log in again." });
  }

  req.user = { user_id: user?.user_id, role: user?.role };
  next();
};
