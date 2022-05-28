const router = require("express").Router();

const authController = require("./authController");

router.route("/login").post(authController.login);

module.exports = router;
