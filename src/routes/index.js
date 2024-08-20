const express = require("express");
const router = express.Router();

const v1ApiSetup = require("./v1/index");

router.use("/v1", v1ApiSetup);

module.exports = router;
