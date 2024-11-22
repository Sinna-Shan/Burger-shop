const router = require("express").Router();
const { login, register } = require("../controllers/authController");
router.route("/register").post(register);
router.route("/login").get(login);

module.exports = router;
