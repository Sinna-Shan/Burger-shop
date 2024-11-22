const router = require("express").Router();
const { login, register, logout } = require("../controllers/authController");
router.route("/register").post(register);
router.route("/login").get(login);
router.route("/logout").get(logout);

module.exports = router;
