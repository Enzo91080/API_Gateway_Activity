const express = require("express");
const router = express();
const authRoutes = require("./auth.js");

router.use("/auth", authRoutes);

module.exports = router;
