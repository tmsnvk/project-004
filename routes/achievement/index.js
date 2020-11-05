const express = require("express");
const router = express.Router();

router.get("/showcase/:storyid", require("./showcase"));
router.get("/store", require("./store"));
router.put("/counter-death", require("./counter-death"));
router.put("/counter-finish", require("./counter-finish"));
router.put("/counter-start", require("./counter-start"));
router.put("/reset", require("./reset"));
router.put("/trigger", require("./trigger"));

module.exports = router;