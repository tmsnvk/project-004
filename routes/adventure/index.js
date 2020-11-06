const express = require("express");
const router = express.Router();

router.get("/nextevent", require("./nextevent"));
router.get("/savedgameid-get", require("./savedgameid-get"));
router.put("/savedgameid-set", require("./savedgameid-set"));

module.exports = router;