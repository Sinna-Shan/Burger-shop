const router = require("express").Router();
const { login, register, logout,checkSession } = require("../controllers/authController");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/checkSession").get(checkSession);

module.exports = router;
