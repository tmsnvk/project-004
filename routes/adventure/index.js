const express = require("express");
const router = express.Router();

router.get("/savedgameid-get", require("./savedgameid-get"));
router.get("/nextevent", require("./nextevent"));
router.put("/savedgameid-set", require("./savedgameid-set"));

module.exports = router;