const express = require("express");
const { getAllInfo } = require("../info/labInfo");
const router = express.Router();

router.route("/info").get(getAllInfo);

module.exports = router;