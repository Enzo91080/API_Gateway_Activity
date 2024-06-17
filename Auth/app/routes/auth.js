const express = require("express");
const router = express();
const userCtrl = require("../controllers/user.js");

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);

module.exports = router;
