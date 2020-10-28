const express = require("express");
const router = express.Router();

router.get("/nextevent", require("./nextevent"));

module.exports = router;