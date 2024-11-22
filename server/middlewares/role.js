exports.role = (role) => {
  return (req, res, next) => {
    if (req.user) {
      if (req.user.role === role) {
        return next();
      }
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permissions." });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};
